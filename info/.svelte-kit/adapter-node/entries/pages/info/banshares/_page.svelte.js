import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { C as Callout } from "../../../../chunks/Callout.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Image } from "../../../../chunks/Image.js";
import { L as Linkable } from "../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/quickstart#banshares", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Banshares</h1><p><a href="${"#submitting"}" style="${"display: flex; align-items: center"}"><i class="${"material-icons"}" style="${"padding-right: 0.5em"}">arrow_downward</i>Submitting Guide</a></p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "overview",
            e: "h2",
            value: "Overview"
          },
          {},
          {}
        )}<p>The lifecycle of a banshare is as follows. Click a card to learn more.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "upload",
            title: "Submit",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>A banshare is submitted to <a href="${"/banshare"}">/banshare</a>. It is posted to <b>#ban-share-logs</b> and reviewed by observers.</p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "published_with_changes",
            title: "Publish",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>Once it is approved, an observer will publish it and it will be posted to all TCN servers that have banshares set up. The bot will also automatically ban the user(s) in servers where that is enabled.</p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "unpublished",
            title: "Rescind",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>We strive to avoid this from happening, but if a banshare is found to be invalid, we will rescind it with a reason and perform a post-mortem to see why a faulty banshare was approved.</p><p>This may also happen if the user&#39;s behavior improves and we retroactively agree to un-banshare them.</p>`;
            }
          }
        )}</div><br>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>When the bot performs automated actions, either through auto-ban or the ban button, it will log the action in your logging channel if you set it up. Here&#39;s what the log message looks like</p>${validate_component(Image, "Image").$$render(
              $$result,
              {
                src: "https://imgur.com/WgKPMrs.png",
                alt: "example banshare bot log"
              },
              {},
              {}
            )}<p>This is probably most appropriate for whatever channel your mods use commands in instead of your mod action audit log, but you can put it wherever you want.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render($$result, { id: "setup", e: "h2", value: "Setup" }, {}, {})}<p>To set up the banshare system, first invite the bot using <a href="${"https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot"}">this link</a>.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p>You will need to grant the bot read+write access to your banshare channel, and if you want logging for automated actions, to that channel as well.</p>`;
          }
        })}<ol><li>Use <code>/banshare post here</code> in your banshare channel. To disable banshares, use <code>/banshare post none</code>.</li><li>Use <code>/banshare log here</code> in your logging channel (optional). To disable this, use <code>/banshare log none</code>.</li><li>The ban button is enabled by default and allows members with the <b>Ban Members</b> permission to execute the banshare more easily. If you want to disable this, use <code>/banshare ban-button</code> to turn it off (or back on).</li><li>To enable auto-banning (the banshare will be executed on its own if it meets the threshold), use <code>/banshare autoban</code> (see below for what the severities mean).</li><li>If you use <b>Daedalus</b>, you can use <code>/banshare daedalus-integration</code> to enable/disable the integration, which allows the banshare bot to automatically add auto-bans and button bans to the targets&#39; user history.</li></ol>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "severity",
            e: "h2",
            value: "Severity"
          },
          {},
          {}
        )}<p>Banshares are categorized into three levels of severity. These are not very strictly defined, and observers can tweak the severity before or after publication. Here are our guidelines. These do not matter for anything other than auto-banning, and do not reflect how &quot;bad&quot; we think the user is. Click a card to learn more.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "keyboard_arrow_up",
            title: "P0 (Critical)",
            icon_color: "var(--red-text)",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>Urgent banshares where the user should be immediately removed everywhere, e.g. illegal activity, raids, ongoing harassment, etc.</p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "remove",
            title: "P1 (Medium)",
            icon_color: "var(--yellow-text)",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>Banshares that aren&#39;t very urgent and largely routine cases like low-threat scam bots or more serious accusations like pedophiles/lolicons (that aren&#39;t currently actively harming or threatening harm against users).</p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "keyboard_arrow_down",
            title: "P2 (Low)",
            icon_color: "var(--blue-text)",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>Non-urgent banshares such as a user being problematic in just one server where it should be considered on an individual basis whether to ban or just keep watch.</p>`;
            }
          }
        )}</div>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "submitting",
            e: "h2",
            value: "Submitting"
          },
          {},
          {}
        )}<p>To post a banshare, go to <a href="${"/banshare"}">this form</a>. All fields should be fairly intuitive, but here is a usage guide for each:</p><ul><li><b>IDs:</b> The IDs of the offending users. Please post this as an actual list of IDs. If it is too long to fit in a message, it will be automatically uploaded as a document, but if you paste a link, auto-banning will not function. If it is so long that the form rejects it, then you may need to post a link instead.<ul><li>Once you paste in your IDs, click the &quot;Check IDs&quot; button that appears to fetch all of the user tags to look them over and make sure you are bansharing the right people. If your banshare is very long, this will take a very long time, so you may wish to skip this step in that case.</li></ul></li><li><b>Reason:</b> Summarize why the users should be banned. This is used as the audit log reason for automated bans, so please keep that in mind when writing it and include full details and other notes in the evidence instead.</li><li><b>Evidence:</b> Include enough evidence to prove that your reasons are valid and for other mods to make an informed decision on what to do.</li><li><b>Server:</b> Choose what server you are bansharing it from. If the incident is not bound to a particular server or not one you staff, you should pick the server where you feel you have your &quot;main/primary&quot; or most prominent position.</li><li><b>Severity:</b> This determines if a banshare is automatically executed. See above for information on what the severity levels mean.</li><li><b>Urgency:</b> If you check the &quot;urgent&quot; box, this will ping all observers instead of just a few to review it.</li></ul>${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p>If the ID list is very long, you may use <b>Submit Without Validation</b>. Do <b>NOT</b> use <b>Submit Without Checking IDs</b> unless you had to publish a banshare with a link for the ID field and there was no way around it. Skipping the check prevents auto-banning or the ban button from working.</p><p>The regular submit option will validate that your IDs all correspond to valid users. Submitting without validation will only verify that the IDs are in the right format, and will still parse them such that auto-banning works.</p>`;
          }
        })}</div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
