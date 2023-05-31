import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { C as Callout } from "../../../../chunks/Callout.js";
import { L as Linkable } from "../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render($$result, { last: ["/info/quickstart", "Quickstart"] }, {}, {
    default: () => {
      return `<div id="${"main"}"><h1>Discord Help</h1>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "permissions",
          e: "h2",
          value: "Discord Permissions"
        },
        {},
        {}
      )}<p>If you have absolutely no knowledge of Discord permissions, a good place to start would the official <a href="${"https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ"}">Permissions FAQ</a> support article.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "warn" }, {}, {
        default: () => {
          return `<p>An important thing to know about permissions is that allow overrides always apply over deny overrides, regardless of hierarchy.</p>`;
        }
      })}<p>For a list of all permissions and what they do, visit <a href="${"/info/discord/permission-list"}">this page</a>.</p><p>For more information about permissions and some recommendations for good structure, check out <a href="${"/info/discord/permissions"}">this page</a>.</p>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "webhooks-embeds",
          e: "h2",
          value: "Webhooks &amp; Embeds"
        },
        {},
        {}
      )}<p>This is a guide on how to use embeds and webhooks in Discord. This guide features Discohook, Embed Generator (discord.club), and Leaf Embeds.</p><p>Webhooks are resources you can create in a text channel that can be used to post messages to the channel by any user or application that has the URL.</p><p>Embeds are a way to organize information and add styling to your resources.</p><p>To view the full guide, visit either the <a href="${"/info/discord/webhooks"}">webhooks</a> or <a href="${"/info/discord/embeds"}">embeds</a> page.</p></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
