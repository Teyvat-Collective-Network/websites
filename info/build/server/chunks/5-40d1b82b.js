import { G as GIST_TOKEN, b as bot, C as CHANNEL, d as components, e as db$1, f as ALERT, U as URGENT, g as NON_URGENT } from './bot-193fdc25.js';
import { P as PUBLIC_TCN_API } from './public-a46e145d.js';
import { f as fail } from './index-e414dda7.js';
import { e as escape } from './index2-4b0ff9cf.js';
import { Octokit } from 'octokit';
import 'discord.js';
import 'mongodb';

const octokit = new Octokit({ auth: GIST_TOKEN });
async function create_gist(filename, description, content) {
  const request = await octokit.request("POST /gists", {
    description,
    files: { [filename]: { content } }
  });
  if (request.status !== 201)
    throw "Error creating gist.";
  return request.data.html_url;
}
function compare(a, b) {
  if (!a.match(/^\d+$/))
    if (!b.match(/^\d+$/))
      return a.localeCompare(b);
    else
      return -1;
  else if (!b.match(/^\d+$/))
    return 1;
  const diff = BigInt(a) - BigInt(b);
  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
}
const actions = {
  default: async ({ request, locals, fetch }) => {
    const data = await request.formData();
    const user = locals.user;
    if (!user)
      return fail(500, { error: "Not Authenticated" });
    const ids = data.get("ids").trim();
    const reason = data.get("reason").trim();
    const evidence = data.get("evidence").trim();
    const server = data.get("server");
    const severity = data.get("severity");
    const urgent = data.has("urgent");
    const action = data.get("submit") ?? "Submit";
    const values = {
      ids,
      reason,
      evidence,
      server,
      severity,
      urgent
    };
    const abort = (code, message) => fail(code, {
      error: message,
      ...values
    });
    if (ids.length === 0)
      return abort(400, "You must enter at least one user to banshare.");
    if (!reason)
      return abort(400, "You must enter a non-empty reason.");
    if (!evidence)
      return abort(400, "You must enter some evidence.");
    if (!server)
      return abort(400, "You must select the server.");
    if (!severity)
      return abort(400, "You must select the severity.");
    if (!severity.match(/^p[0-4]$/))
      return abort(400, "Invalid severity selection.");
    if (reason.length > 498)
      return abort(400, "Maximum reason length is 498.");
    if (evidence.length > 1200)
      return abort(
        400,
        "Maximum evidence length is 1200. If you need more space, please create and link a document and include some basic information about it in the evidence field."
      );
    const tcn_request = await fetch(`${PUBLIC_TCN_API}/users/${user.id}`);
    if (!tcn_request.ok)
      return abort(
        400,
        "You do not appear to be a staff member of any TCN servers. Contact your server owner or a TCN observer if you believe this is a mistake."
      );
    const tcn_data = await tcn_request.json();
    if (!tcn_data.guilds.includes(server))
      return abort(400, "You are not a staff member on the server you selected.");
    const server_request = await fetch(`${PUBLIC_TCN_API}/guilds/${server}`);
    if (!server_request.ok)
      return abort(
        400,
        "The server you selected does not appear to be in the TCN. (This message should never appear...)"
      );
    const server_name = (await server_request.json()).name;
    if (!bot.user)
      return abort(
        500,
        "Banshare bot is not ready to handle your request yet. Please wait for a few seconds."
      );
    const channel = bot.channels.cache.get(CHANNEL);
    if (!channel?.isTextBased())
      return abort(
        500,
        "Banshare bot is not configured correctly: output channel is not a valid text-based channel."
      );
    let id_list = [];
    const tags = [];
    let ids_output = ids;
    if (action === "Submit" || action === "Submit Without Validation") {
      id_list = [...new Set(ids.trim().split(/\s+/))].sort(compare);
      for (const id of id_list)
        if (!id.match(/^[1-9][0-9]{16,19}$/))
          return abort(
            400,
            `Invalid ID: <code>${escape(id)}</code> is not a valid Discord ID.`
          );
      if (action === "Submit")
        for (const id of id_list)
          try {
            tags.push((await bot.users.fetch(id)).tag);
          } catch {
            return abort(
              400,
              `Invalid ID: <code>${escape(
                id
              )}</code> did not correspond to a valid user.`
            );
          }
      ids_output = id_list.join(" ");
    }
    const format = (ids2, tags2) => ({
      embeds: [
        {
          title: "**Banshare**",
          color: 2961718,
          fields: [
            { name: "ID(s)", value: ids2 },
            ...tags2.length > 0 ? [{ name: "Username(s)", value: tags2 }] : [],
            { name: "Reason", value: reason },
            { name: "Evidence", value: evidence },
            {
              name: "Submitted by",
              value: `${user.username}#${user.discriminator} (\`${user.id}\`) from ${server_name}`
            },
            {
              name: "Severity",
              value: severity[0].toUpperCase() + severity.slice(1)
            }
          ]
        }
      ]
    });
    let send_data = format(id_list.join(" "), tags.join(" "));
    if (send_data.embeds[0].title.length + send_data.embeds[0].fields.map((field) => field.name.length + field.value.length).reduce((x, y) => x + y) > 6e3 || send_data.embeds[0].fields.some((field) => field.value.length > 1024)) {
      const iso = new Date().toISOString();
      try {
        send_data = format(
          `<${await create_gist(
            `banshare-ids-${iso}`,
            `IDs for the banshare on ${iso}`,
            ids_output
          )}>`,
          ""
        );
      } catch {
        return abort(500, "Uploading your ID list / user tag list as a gist failed.");
      }
    }
    const post = await channel.send({ ...send_data, components: components(false, severity) });
    await db$1.banshares.insertOne({
      message: post.id,
      url: post.url,
      server,
      id_list,
      reason,
      severity
    });
    {
      const alert = bot.channels.cache.get(ALERT);
      if (alert?.isTextBased())
        try {
          await alert.send(
            `${(urgent ? URGENT : NON_URGENT) ?? ""} A banshare was just posted in ${channel} for review${urgent ? " (**urgent**)" : ""}. If you wish to alter the severity, use the buttons below the banshare **before** publishing.`
          );
        } catch {
        }
    }
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
const component = async () => (await import('./_page.svelte-47105845.js')).default;
const file = '_app/immutable/components/pages/banshare/_page.svelte-46d242d8.js';
const imports = ["_app/immutable/components/pages/banshare/_page.svelte-46d242d8.js","_app/immutable/chunks/index-c4baf36c.js","_app/immutable/chunks/public-962e99ca.js","_app/immutable/chunks/index-1e14ffe7.js","_app/immutable/chunks/Callout-2d6b8933.js","_app/immutable/chunks/LoggedInAs-8fa87d23.js"];
const stylesheets = ["_app/immutable/assets/_page-dd8da7fc.css","_app/immutable/assets/index-6a431cf5.css","_app/immutable/assets/Callout-cc38d962.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=5-40d1b82b.js.map
