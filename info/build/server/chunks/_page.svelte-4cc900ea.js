import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { C as Callout } from './Callout-65dcda1e.js';
import { L as Linkable } from './Linkable-15397560.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/quickstart#global", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Global Chat</h1>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "what-is-global",
            e: "h2",
            value: "What is it?"
          },
          {},
          {}
        )}<p>Global chat is a system that connects channels across the TCN and allow users to chat with each other through it. There are three network-wide channels:</p><ul><li><b>TCN</b> - Public &quot;general&quot; channel which can be made accessible to all server members.</li><li><b>lounge</b> - Staff general chat which can be made accessible to anyone who can access your server&#39;s staff chat.</li><li><b>office</b> - Staff business channel which can be made accessible to your staff.</li></ul>${validate_component(Linkable, "Linkable").$$render($$result, { id: "setup", e: "h2", value: "Setup" }, {}, {})}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "adding-the-bot",
            e: "h3",
            value: "Adding the bot"
          },
          {},
          {}
        )}<p>First, invite the bot to your server using <a href="${"https://discord.com/api/oauth2/authorize?client_id=905370006362140702&permissions=137976212544&scope=applications.commands%20bot"}">this link</a>.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "permissions",
            e: "h3",
            value: "Permissions"
          },
          {},
          {}
        )}<p>You need to ensure the bot has all of the following permissions in all global channels that you want to use:</p><ul><li><b>View Channel:</b> to be able to relay messages</li><li><b>Read Message History:</b> to be able to fetch older messages for relaying deletion</li><li><b>Manage Webhooks:</b> to be able to create a webhook / find your webhook for incoming messages</li><li><b>Manage Messages:</b> to be able to cross-delete messages that were deleted elsewhere</li></ul><p>Because of the possibility of spam or abusive content, if you do not allow the bot to delete messages, it will stop sending them as well.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "warn" }, {}, {
          default: () => {
            return `<p>Emoji from non-TCN servers will not work by default due to changes in Discord&#39;s bot webhook permissions. To fix this, just create a webhook manually in the channel. You do not need to do anything else.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "connecting",
            e: "h3",
            value: "Connecting"
          },
          {},
          {}
        )}${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>Your global channels cannot be used for anything else. All messages sent to the channel are relayed.</p>`;
          }
        })}<p>Once your channel permissions are set up, use <code>/connect</code> and select the appropraite global channel. If you see any channels not mentioned above, do not connect to it unless you were given permission to. Global chat may be used by servers for things like event channels, so don&#39;t disrupt their channels.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>To test that the channel works, send a message from your side and check another server. If it doesn&#39;t show up, <b>View Channel</b> is missing.</p><p>Then, send a message from the other side and check that it appears in your channel. If not, <b>Manage Webhooks</b> is missing.</p><p>Finally, delete the message from the other side and check that it disappears on your side. If not, <b>Manage Messages</b> is missing.</p><p>For staff channels, if you are not staff elsewhere, you may use the global channels in the TCN Hub to test.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "disconnecting",
            e: "h3",
            value: "Disconnecting"
          },
          {},
          {}
        )}<p>To disconnect, use <code>/disconnect</code> and the global channel will immediately stop relaying messages both ways.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "moderation",
            e: "h2",
            value: "Moderation"
          },
          {},
          {}
        )}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "deleting",
            e: "h3",
            value: "Deleting Messages"
          },
          {},
          {}
        )}<p>When a message or any copy of it is deleted, all copies of it and the original are deleted. If this isn&#39;t working, make sure the bot has <b>View Channel</b>, <b>Read Message History</b>, and <b>Manage Messages</b> in all of your global channels.</p><p>If purging didn&#39;t work, you can use <code>/purge</code> with the message URL to make the bot try again.</p>${validate_component(Linkable, "Linkable").$$render($$result, { id: "banning", e: "h3", value: "Banning" }, {}, {})}<p>Use <code>/ban</code> to ban a user from global chat. This makes the bot stop relaying messages from that user in the current global channel across all servers. You must have <b>Ban Members</b> but no hierarchy check is performed. Use of this command is logged, so use it responsibly.</p><p>Note that the ban is per-channel, so make sure you run it in the right channel. You should not be using this in the staff channels unless a staff member is causing serious disruption that must be immediately stopped; instead, reach out to the server&#39;s admins/owner and/or an observer.</p><p>To get the ID of the author of a message, right click the message and select <code>Apps &gt; user</code> or run <code>/user</code> with the message URL (the URL of any copy of the message will work).</p><p>To unban a user, just use <code>/unban</code>.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "panic-mode",
            e: "h3",
            value: "Panic Mode"
          },
          {},
          {}
        )}${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p>This command alerts all observers and can only be undone by an observer. Misuse of this command may result in loss of global chat privileges or other consequences. If you think it might be needed, don&#39;t be afraid to use it; we will discuss it with you if we think it was unnecessary, but don&#39;t play with it or use it for &quot;testing&quot; purposes.</p>`;
          }
        })}<p>If there is a raid or network-wide incident going on in global chat, you can use <b>/panic</b> to completely shut down the global channel. It will cease to relay messages from any server.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "for-observers",
            e: "h3",
            value: "For Observers"
          },
          {},
          {}
        )}<ul><li><code>/globals list</code> - show a list of existing global channels</li><li><code>/globals remove</code> - delete a global channel (do <b>not</b> do this on channels unless it is agreed upon or it was a temporary channel that is no longer needed)</li><li><code>/globals add</code> - create a new global channel with a name (required) and log channel (optional)<ul><li>the log channel is where edits, deletions, bans/unbans, and connections/disconnections are logged</li><li>this command will not connect any channels, so you will need to connect the channel using <code>/connect</code></li></ul></li><li><code>/globals logchannel</code> - change the log channel of a global channel</li></ul>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "other-commands",
            e: "h3",
            value: "Other Commands"
          },
          {},
          {}
        )}<ul><li><code>/faq</code> - Show some information about the bot. If someone asks what global chat is or why everyone is a bot (fairly common), use this with the <b>public: true</b> option to show the info page.</li><li><code>/help</code> - Show one of three help pages:<ul><li><b>mods</b> - Information relevant to moderators such as how to ban/unban users and <code>/panic</code>.</li><li><b>admins</b> - Information for server admins such as how to connect/disconnect channels.</li><li><b>execs</b> - Information for observers such as how to create/delete global channels and <code>/unpanic</code>.</li></ul></li><li><code>/nickname</code> - Set your global nickname. Normally, your display name (nickname, or if none, username) will be shown to other servers. If you set this, it will override your display name in all global channels from all servers.</li><li><code>/ping</code> - If you think the bot is unresponsive, use this command to check its ping (response time).</li><li><code>/rules</code> - Show the global chat rules. Individual server rules still apply and moderation may be done by individual server staff, but a baseline set of rules exists. Use <b>public: true</b> to show it publicly in the channel (it is relayed to other servers).</li><li><code>/user</code> - Call this with a message link to get the ID of the author of the original message. You can also right-click the message and select <code>Apps &gt; user</code> but this sometimes doesn&#39;t work due to Discord issues.</li></ul></div>`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4cc900ea.js.map
