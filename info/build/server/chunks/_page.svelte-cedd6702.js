import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { C as Callout } from './Callout-65dcda1e.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/other-bots#ruin-hunter", "Other Bots"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Ruin Hunter</h1>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>Developed by <b>Leaf#1950</b></p><p><a href="${"https://discord.com/api/oauth2/authorize?client_id=927626506937720862&permissions=1099511635974&scope=bot%20applications.commands"}">Add To Server</a></p>`;
          }
        })}<p>The bot starts working as soon as it&#39;s added and requires no setup, though you may want to adjust the settings.</p><ul><li><code>/settings</code> - adjust the raid threshold (default: 5 joins from accounts younger than 1 week per 10 seconds)</li><li><code>/off</code> - turn off the bot (useful if you are expecting an influx of users)</li><li><code>/on</code> - turn back on the bot (it starts on)</li></ul><p>Some additional commands:</p><ul><li><code>/logs</code> - set the log output channel</li><li><code>/history</code> - view the history of recent raids caught in your server, or view details of a particular raid</li><li><code>/stats</code> - view bot stats (how many servers and how many members are being watched, and how many raids have been caught overall)</li></ul></div>`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cedd6702.js.map
