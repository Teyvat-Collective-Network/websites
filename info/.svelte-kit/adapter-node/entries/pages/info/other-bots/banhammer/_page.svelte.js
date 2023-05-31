import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import { C as Callout } from "../../../../../chunks/Callout.js";
import { N as Navigation } from "../../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/other-bots#banhammer", "Other Bots"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Banhammer</h1>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>Developed by <b>HyperNeutrino#1759</b></p><p><a href="${"https://discord.com/api/oauth2/authorize?client_id=994100815402909817&permissions=274877959172&scope=bot"}">Add To Server</a></p>`;
          }
        })}<br>${validate_component(Callout, "Callout").$$render($$result, { style: "info" }, {}, {
          default: () => {
            return `<p>The massban feature on <a href="${"/info/other-bots/daedalus"}">Daedalus</a> is much more comprehensive, and that bot supports better permission controls and more features.</p>`;
          }
        })}<p>By default, Banhammer can only be used by administrators, but this can be changed. Only administrators can manage the permissions.</p><ul><li><code>bh!massban [days] &lt;url&gt; [reason]</code> - massban a list of users<ul><li><b>days</b> indicates the number of days of messages to purge (0-7, default 0)</li><li><b>url</b> must point to a raw text file (e.g. a Pastebin or Gist raw file) listing the IDs</li><li><b>reason</b> will be put in the audit logs (optional)</li></ul></li><li><code>bh!allow &lt;role&gt;</code> - allow members with this role to use <code>bh!massban</code></li><li><code>bh!deny &lt;role&gt;</code> - remove this role from the allowlist (but does not block it, so users with another allowed role can still use <code>bh!massban</code>)</li><li><code>bh!list</code> - list allowed roles</li></ul></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
