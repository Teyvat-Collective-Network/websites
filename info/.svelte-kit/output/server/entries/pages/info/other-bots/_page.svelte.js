import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { C as Callout } from "../../../../chunks/Callout.js";
import { L as Linkable } from "../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/quickstart#other-bots", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Other Bots</h1>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>These bots are not TCN-exclusive, so feel free to use them in other servers!</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "genshin-wizard",
            e: "h2",
            value: "Genshin Wizard"
          },
          {},
          {}
        )}<h5 style="${"color: var(--text-accent)"}">[Official Partner]</h5><p><a href="${"https://discord.com/api/oauth2/authorize?client_id=782099719718699009&permissions=537136128&scope=applications.commands%20bot"}">Add To Server</a></p><p>The TCN is officially partnered with Genshin Wizard, a multi-purpose Genshin Impact bot with a comprehensive set of features allowing you to view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, etc. To get more information or for setup, please contact the support team on their <a href="${"https://discord.gg/BTT5Zr7Dmp"}">Discord server</a> and open a ticket. Mention that you are part of the TCN and would like help setting up.</p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This bot is not developed by a TCN council member, it is just a partner of the TCN. It is not exclusive to us and frequently partners with other servers as well.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "ruin-hunter",
            e: "h2",
            value: "Ruin Hunter"
          },
          {},
          {}
        )}<p>Made by <b>Leaf#1950</b>, this is an anti-raid bot that detects large influxes of new accounts and bans them to keep your server safe from raids. You can also turn this on and off easily (such as if you are expecting a higher rate of incoming users) and adjust the thresholds.</p><p><a href="${"/info/other-bots/ruin-hunter"}">See More</a></p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "banhammer",
            e: "h2",
            value: "Banhammer"
          },
          {},
          {}
        )}<p>This is a utility bot dedicated to massbanning by <b>HyperNeutrino#1759</b>. It allows you to ban many users at once from an online file of IDs such as a Pastebin raw file, which is useful if the number of users is very high and copy-pasting them into chat would take many messages.</p><p><a href="${"/info/other-bots/banhammer"}">See More</a></p>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>This feature also exists on <b>Daedalus</b>, which also includes many other features, and is much more comprehensive there.</p>`;
          }
        })}${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "daedalus",
            e: "h2",
            value: "Daedalus"
          },
          {},
          {}
        )}<p>Daedalus is a modern, general-purpose bot containing a wide array of features for all your server management needs, featuring full slash-command support, buttons and dropdowns for a smooth experience, modals, high customizability, transparent permissions, etc. It is developed by <b>HyperNeutrino#1759</b>.</p><p><a href="${"/info/other-bots/daedalus"}">See More</a></p></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
