import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { C as Callout } from './Callout-65dcda1e.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/other-bots#daedalus", "Other Bots"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Daedalus</h1>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>Developed by <b>HyperNeutrino#1759</b></p><p><a href="${"https://discord.com/api/oauth2/authorize?client_id=989173789482975262&permissions=1428010036470&scope=applications.commands+bot"}">Add To Server</a> — <a href="${"https://daedalus.hyper-neutrino.xyz/"}">Website / Dashboard</a></p>`;
          }
        })}<p>Daedalus is a highly customizable general-purpose bot supporting all of the features you expect from public bots but with better workflows, easier customization, a simple-to-use interface that still enables complex use cases, and transparent permissions. Here are some examples of some of its features and how they stand out:</p><ul><li><b>Reaction Roles</b> - in addition to traditional reactions, you can also set up button and dropdown roles, making it much easier for users to use, as the interface is more intuitive and responsive, and users will get a confirmation that the action worked.</li><li><b>Moderation</b> - Daedalus supports a comprehensive set of mod tools and detailed user history that links back to the original message so you can always find the context for a particular mod action. It also asks for confirmation on all actions so you don&#39;t have to worry about accidentally banning the wrong user.</li><li><b>Starboard</b> - Each channel can have its own threshold and target starboard.</li><li><b>Automod</b> - Daedalus supports over 10 different types of automod rules which are advanced in functionality but easy to learn and support full control over which channels to watch, which roles to exempt, and fine control over automatic punishments / actions.</li><li><b>Nukeguard</b> - Worried about rogue staff members or admins being compromised? If you put Daedalus above them and enable Nukeguard, the bot will detect disallowed actions and ban them and alert you to review the action, so you don&#39;t have to worry about mass destruction.</li><li><b>Highlights</b> - Beyond the normal highlight features, Daedalus also allows you to be highlighted if someone replies without pinging you. You also get control over the delay and cooldown of highlights, and they actually work consistently and as you instruct it to.</li></ul></div>`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d70d0828.js.map
