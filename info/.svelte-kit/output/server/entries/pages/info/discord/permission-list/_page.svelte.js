import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "../../../../../chunks/index2.js";
import { C as Callout } from "../../../../../chunks/Callout.js";
import { N as Navigation } from "../../../../../chunks/Navigation.js";
import { L as Linkable } from "../../../../../chunks/Linkable.js";
const Permission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { code = name.toUpperCase().replaceAll(/\s+/g, "_") } = $$props;
  let { bit } = $$props;
  let { open } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.bit === void 0 && $$bindings.bit && bit !== void 0)
    $$bindings.bit(bit);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `${validate_component(Linkable, "Linkable").$$render(
    $$result,
    {
      e: "h5",
      id: code,
      value: name + " (<code>" + code + "</code>)" + (open ? ` - <code>1 << ${bit} = ${2 ** bit}</code>` : "")
    },
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/discord#permissions", "Discord Help"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Permission List</h1><p><a${add_attribute("href", "javascript:void(0)", 0)}>${escape("Show")} permission bits</a></p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p><b>Role Hierarchy</b> refers to the order of roles. A user&#39;s position is based on their highest role, except for the server owner, who is always at the very top of the hierarchy.</p><p>Note that it is based on the highest role in general, <b>not</b> the highest role with the specified permission. Therefore, a mod with a cosmetic role that is higher than the mod role can ban mods without that role, even if the cosmetic role carries no permissions.</p>`;
          }
        })}<div>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "CREATE_INSTANT_INVITE",
            name: "Create Invite",
            bit: 0,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice, Stage</b></p><p>Allows users to create invite links to the server, which other users can use to join the server. Users do not need this permission to share existing invite links, including the vanity URL, only to create new invites.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This does not allow users to add bots - that requires <a href="${"#MANAGE_GUILD"}">Manage Guild</a>.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Kick Members", bit: 1, open }, {}, {})}<p><b>Server-Wide</b></p><p>Allows users to kick members from the server, instantly removing them from the server but not preventing them from rejoining. This is subject to role hierarchy.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Ban Members", bit: 2, open }, {}, {})}<p><b>Server-Wide</b></p><p>Allows users to ban members from the server, preventing them from rejoining the server and also banning their IP.</p><p>Allows users to unban members, allow them to rejoin the server (if they have an invite; unbanning does not re-add members).</p><p>Bans are permanent unless revoked. Users who aren&#39;t in the server can be banned to prevent them from joining. This is subject to role hierarchy, and non-members are considered underneath everyone.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Administrator", bit: 3, open }, {}, {})}<p><b>Server-Wide</b></p><p>Grants users all permissions in the server and in all channels. Also prevents users from being timed out by anyone. This is still subject to role hierarchy, so admins cannot kick/ban anyone not below them and can be kicked/banned by anyone above them.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
          default: () => {
            return `<p>This is a dangerous permission to grant! Administrators gain permission to do anything - all permissions, as well as access to all channels. They are not immune to moderation except for timeouts, but deny overrides will have no effect on them.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Channels", bit: 4, open }, {}, {})}<p><b>Text, Voice, Stage</b></p><p>Allows users to create, edit, and delete channels. Editing channels includes changing the channel&#39;s name, topic, bitrate, video quality, user limit, region, slowmode, auto-archive duration for threads, etc.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This permission does not allow users to edit channel overrides; that is part of <a href="${"#MANAGE_ROLES"}">Manage Roles</a>.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "MANAGE_GUILD",
            name: "Manage Server",
            bit: 5,
            open
          },
          {},
          {}
        )}<p><b>Server-Wide</b></p><p>Allows users to edit server properties such as the name, icon, banner, etc. Also allows users to add applications to the server (e.g. bots). Also allows users to configure built-in AutoMod and users with this permission always bypass AutoMod.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This does not allow users to delete the server, change the 2FA requirement for moderation, or apply for Discord partnership. Those are only available to the server owner.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Add Reactions", bit: 6, open }, {}, {})}<p><b>Text, Voice</b></p><p>Allows users to add new emoji reactions to messages.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This permission is not needed to add to an existing reaction, e.g. in the case of reaction role prompts. Users who are timed out or have not passed membership screening cannot do this.</p><p>Users can always remove their own reactions.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "View Audit Log", bit: 7, open }, {}, {})}<p><b>Server-Wide</b></p><p>Allows users to see the audit log which keeps track of moderation and administrative actions for a certain amount of time. They can see all actions, even those that they do not have permission to perform.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "PRIORITY_SPEAKER",
            name: "Use Priority Speaker",
            bit: 8,
            open
          },
          {},
          {}
        )}<p><b>Voice</b></p><p>Allows users to enable Push-To-Talk Priority Speaker mode, which causes all other users in a voice channel to have their volume reduces while the user is using priority mode.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Stream", bit: 9, open }, {}, {})}<p><b>Voice</b></p><p>Allows users to stream in a voice channel, including screensharing and using the video camera.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "View Channel", bit: 10, open }, {}, {})}<p><b>Text, Voice, Stage</b></p><p>Allows users to see channels and see incoming messages while focused on the channel. Users can see category channels if they can see at least one channel in it, and seeing a category does not automatically allow them to see any or all channels in it.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>The ability to see messages that were sent when the user was offline or the channel was unfocused is controlled by <a href="${"#READ_MESSAGE_HISTORY"}">Read Message History</a>.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Send Messages", bit: 11, open }, {}, {})}<p><b>Text, Voice</b></p><p>Allows users to send messages in text and text-in-voice channels that they can view. Also allows users to create forum posts but not to talk in them.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>To talk in threads and forum posts, users need <a href="${"#SEND_MESSAGES_IN_THREADS"}">Send Messages In Threads</a> instead.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "SEND_TTS_MESSAGES",
            name: "Send Text-To-Speech Messages",
            bit: 12,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice</b></p><p>Allows users to use <code>/tts</code> which sends a message that is read aloud to everyone focused on the channel.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Messages", bit: 13, open }, {}, {})}<p><b>Text, Voice</b></p><p>Allows users to delete other users&#39; messages, pin messages, publish other users&#39; messages in announcement channels, and remove embeds from other users&#39; messages. Except for pinning messages, the other three are always available for one&#39;s own messages. This is <b>not</b> subject to role hierarchy.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Embed Links", bit: 14, open }, {}, {})}<p><b>Text, Voice</b></p><p>Links that users send will show embeds if possible and the user has not suppressed embeds using <code>&lt;...&gt;</code>. For bots, this is necessary for them to send custom embeds in messages.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Attach Files", bit: 15, open }, {}, {})}<p><b>Text, Voice</b></p><p>Allows users to upload files in messages they send. This is not limited to images; users can upload most types of files.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Read Message History",
            bit: 16,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice</b></p><p>Allows users to view messages in channels that they can view, even if they were not focused on the channel at the time, and allows them to search back through all past messages.</p><p>Without this permission, users will see &quot;You do not have permission to view the history of this channel.&quot; and will only be able to see messages received by their client while they were in that channel.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "MENTION_EVERYONE",
            name: "Mention <code>@everyone</code>, <code>@here</code>, and All Roles",
            bit: 17,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice, Stage</b></p><p>Allows users to use <code>@everyone</code> to ping all server members who can see the channel, <code>@here</code> to ping all online members who can see the channel, and ping any role regardless of if it has the &quot;Allow anyone to <b>@mention</b> this role&quot; setting enabled. This is <b>not</b> subject to role hierarchy.</p><p>In stage channels, this allows users to alert <code>@everyone</code> when starting an instance.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Use External Emojis",
            bit: 18,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice</b></p><p>Allows users to use emojis from other servers in messages and reactions (if they have Nitro or are a bot).</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "VIEW_GUILD_INSIGHTS",
            name: "View Server Insights",
            bit: 19,
            open
          },
          {},
          {}
        )}<p><b>Server-Wide</b></p><p>Allows users to see the server insights page, which provides information about server health, members joining and leaving, which invites they are using, member retention, participant message count, etc.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Connect", bit: 20, open }, {}, {})}<p><b>Voice, Stage</b></p><p>Allows users to join voice and stage channels that they can see. Being able to speak is controlled by <a href="${"#SPEAK"}">Speak</a> but they can listen unless deafened.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Speak", bit: 21, open }, {}, {})}<p><b>Voice</b></p><p>Allows users to speak in voice channels that they are connected to. This does not allow users to speak in stage channels; stage moderators are appointed separately per stage channel (via the channel permission settings) and choose who is allowed to speak.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Mute Members", bit: 22, open }, {}, {})}<p><b>Voice, Stage</b></p><p>Allows users to force-mute users (including themselves), preventing them from speaking in any channel regardless of if they have the <a href="${"#SPEAK"}">Speak</a> permission. Also allows users to undo force-mutes, including on themselves. Users who have muted themselves cannot be muted by anyone else. This is <b>not</b> subject to role hierarchy.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Deafen Members", bit: 23, open }, {}, {})}<p><b>Voice, Stage</b></p><p>Allows users to force-deafen users (including themselves), preventing them from hearing what is happening in voice or stage channels. Also allows users to undo force-deafens, including on themselves. Users who have deafened themselves cannot be undeafened by anyone else. This is <b>not</b> subject to role hierarchy.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>Unlike how self-deafening works, a user can be force-deafened but still allowed to speak. This can be used to disable music bots&#39; ability to hear, which is useful if you are concerned about spying.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Move Members", bit: 24, open }, {}, {})}<p><b>Voice, Stage</b></p><p>Allows users to move members who are already in a voice channel in this server into another voice channel. The user performing this action must have <a href="${"#CONNECT"}">Connect</a> in the target channel, but the target user does not need to be able to see or join it on their own. Users cannot be connected by another user and can never be moved between servers even if the user has this permission in both servers. This is <b>not</b> subject to role hierarchy.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "USE_VAD",
            name: "Use Voice Activity",
            bit: 25,
            open
          },
          {},
          {}
        )}<p><b>Voice</b></p><p>Allows users to use voice activity detection mode. Without this permission, users can only use Push-To-Talk.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Change Nickname", bit: 26, open }, {}, {})}<p><b>Server-Wide</b></p><p>Allows users to change their own nickname.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Nicknames", bit: 27, open }, {}, {})}<p><b>Server-Wide</b></p><p>Allows users to change other members&#39; nicknames. This is subject to role hierarchy.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Roles", bit: 28, open }, {}, {})}<p><b>Text, Voice, Stage</b></p><p>Allows users to create, edit, delete, add, and remove roles that are below them in role hierarchy (however, adding/removing roles can be done to members above them in hierarchy).</p><p>Allows users to edit channel overrides for roles that are below them and permissions that they have.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Webhooks", bit: 29, open }, {}, {})}<p><b>Text, Voice</b></p><p>Allows users to create, edit, and delete webhooks, as well as view a list of webhooks and get their URLs.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Manage Emojis and Stickers",
            bit: 30,
            open
          },
          {},
          {}
        )}<p><b>Server-Wide</b></p><p>Allows users to upload, rename, and delete emojis and stickers. Also allows bots to control which roles can use emojis, which is a little-known feature that isn&#39;t very useful and isn&#39;t supported by most bots.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Use Application Commands",
            bit: 31,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice</b></p><p>Allows users to use slash commands and context menu commands (right clicking a message or user and selecting &quot;Apps&quot;).</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This permission is not needed for the bot to support application commands; that is the <code>application.commands</code> scope set when inviting the bot. If you are not seeing a bot&#39;s commands and you gave it this scope, you likely have too many bots; if you have over 50 bots, some will no longer be able to register commands.</p><p>In fact, this permission currently does nothing for bots.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render($$result, { name: "Request To Speak", bit: 32, open }, {}, {})}<p><b>Stage</b></p><p>Allows users to request to become a speaker in stage channels, which can be approved or denied by stage moderators.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Events", bit: 33, open }, {}, {})}<p><b>Voice, Stage</b></p><p>Allows users to create, edit, and delete server events, including starting and ending them.</p>${validate_component(Permission, "Permission").$$render($$result, { name: "Manage Threads", bit: 34, open }, {}, {})}<p><b>Text</b></p><p>Allows users to edit, archive, unarchive, lock, unlock, and delete threads and view all private threads.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Create Public Threads",
            bit: 35,
            open
          },
          {},
          {}
        )}<p><b>Text</b></p><p>Allows users to create public threads (threads that all users can see).</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Create Private Threads",
            bit: 36,
            open
          },
          {},
          {}
        )}<p><b>Text</b></p><p>Allows users to create private threads, which can only be seen by users with <a href="${"#MANAGE_THREADS"}">Manage Threads</a> and users who are explicitly invited to the thread.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Use External Stickers",
            bit: 37,
            open
          },
          {},
          {}
        )}<p><b>Text, Voice</b></p><p>Allows users to send messages with stickers from other servers.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            name: "Send Messages in Threads",
            bit: 38,
            open
          },
          {},
          {}
        )}<p><b>Text</b></p><p>Allows users to send messages in threads and forum posts.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>To create forum posts and talk in text and text-in-voice channels, users need <a href="${"#SEND_MESSAGES"}">Send Messages</a>.</p>`;
          }
        })}${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "USE_EMBEDDED_ACTIVITIES",
            name: "Use Activities",
            bit: 39,
            open
          },
          {},
          {}
        )}<p><b>Voice</b></p><p>Allows users to use activities such as YouTube&#39;s Watch Together in voice channels.</p>${validate_component(Permission, "Permission").$$render(
          $$result,
          {
            code: "MODERATE_MEMBERS",
            name: "Timeout Members",
            bit: 40,
            open
          },
          {},
          {}
        )}<p><b>Server-Wide</b></p><p>Allows users to timeout other members, disabling all permissions except <a href="${"#VIEW_CHANNEL"}">View Channel</a> and <a href="${"#READ_MESSAGE_HISTORY"}">Read Message History</a>. Some other features like adding to existing reactions or using message components (buttons and dropdowns) are also disabled.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p><a href="${"#ADMINISRTATOR"}">Administrators</a> cannot be timed out. If a user is timed out and gains the permission, their timeout will be canceled. Even if an administrator could be timed out, it would take no effect.</p>`;
          }
        })}</div></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
