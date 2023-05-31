import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { C as Callout } from "../../../../chunks/Callout.js";
import { C as Card } from "../../../../chunks/Card.js";
import { L as Linkable } from "../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/quickstart#partner-list", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Partner List &amp; Autosync</h1>${validate_component(Callout, "Callout").$$render($$result, { style: "green" }, {}, {
          default: () => {
            return `<p>The following methods will all meet the requirements, and if you like the default style and don&#39;t need to cutomize it, you can use these options.</p><ul><li>Post it from <a href="${"https://embeds.leaf.moe/TCN_partners"}">https://embeds.leaf.moe/TCN_partners</a>.</li><li>Use <code>/partners</code> on the TCN Global Chat bot.</li><li>Set up autosync (instructions below the requirements).</li></ul>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "requirements",
            e: "h2",
            value: "Requirements"
          },
          {},
          {}
        )}<p>You must include all of the following:</p><ul><li><b>Website URL:</b> <a href="${"https://teyvatcollective.network"}">https://teyvatcollective.network</a></li><li><b>Description:</b> a description of the TCN.</li><li><b>Partner List:</b> a list of all TCN partners, which must not contain any other servers.</li><li><b>TCN Hub:</b> the description for the TCN Hub and its invite link (<a href="${"https://discord.gg/FG2wpbywSx"}">https://discord.gg/FG2wpbywSx</a>).</li><li><b>Genshin Wizard:</b> the description for Genshin Wizard and its website link (<a href="${"https://genshinwizard.com"}">https://genshinwizard.com</a>).</li></ul><p>You do not need to include all of these verbatim, but here&#39;s what we recommend for the description. Your description is expected to be roughly accurate, but you can write it in your own style. Click each card to see what we recommend.</p><div class="${"cards"}">${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "notes",
            title: "General Description",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p><i>&quot;In Teyvat, the stars in the sky will always have a place for you.&quot;</i></p><p>A network of high-quality Genshin Impact character-mains style servers that focus on creating fan communities. Within the network, individual and network-wide events are held such as: tournaments, scavenger hunts and other fun events, community nights, giveaways, and patch preview livestreams.</p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "hub",
            title: "TCN Hub",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>Join us in the official TCN hub to ask questions about the network, talk to other network members, get information on the network and how to apply, and contact observers (admins)! <a href="${"https://discord.gg/FG2wpbywSx"}">https://discord.gg/FG2wpbywSx</a></p>`;
            }
          }
        )}${validate_component(Card, "Card").$$render(
          $$result,
          {
            icon: "auto_fix_high",
            title: "Genshin Wizard",
            expandable: true
          },
          {},
          {
            default: () => {
              return `<p>The TCN is partnered with <a href="${"https://genshinwizard.com"}">Genshin Wizard</a>, a multipurpose Genshin Impact Discord bot with a wide array of features to let you view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, and more!</p>`;
            }
          }
        )}</div>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "autosync",
            e: "h2",
            value: "Autosync"
          },
          {},
          {}
        )}${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p><b>Is this for me?</b> If you would like to follow the default format of the TCN partner embed and don&#39;t want to have to update it manually, this is for you.</p><p>You can choose a message that will be automatically edited each time or for the bot to automatically delete and re-post the message each time it is updated.</p>`;
          }
        })}<ol><li>Invite the bot using <a href="${"https://discord.com/api/oauth2/authorize?client_id=713773560371609660&permissions=536871936&scope=bot%20applications.commands"}">this link</a>.</li><li>Set up the bot:<ul><li><b>Quick Setup:</b> Right click your current partner embed and select <code>Apps &gt; Set Target</code>. If this doesn&#39;t work, it will tell you why. Then, call <code>/autosync update</code> to call in an update.</li><li>Use <code>/autosync webhook set</code> with the webhook&#39;s URL.</li><li>Use <code>/autosync message set</code> with the message URL that points to the current embed (if you don&#39;t have one, you can skip this step).</li></ul></li><li>If you would like the message to be deleted and reposted each time instead of edited, use <code>/autosync mode repost</code>. To switch it back to edit mode (default), use <code>/autosync mode edit</code>.</li><li>If your embed is out of date, use <code>/autosync update</code> to trigger an update.</li></ol><p>Just like that, you&#39;re all done and as long as you don&#39;t remove the bot or delete the webhook, you will never need to update it yourself again!</p></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
