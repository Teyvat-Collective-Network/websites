import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/quickstart#staff-link", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Staff Link</h1><p>To manage your staff in the TCN API, you will need to use the TCN manager bot. You can access it in HQ and the Hub, but you should add it to your server with <a href="${"https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot"}">this link</a> as it enables you to use automatic role sync and also has banshares and future features on it.</p><p>To add a staff member manually, use <code>/staff add</code> (and to remove them, <code>/staff remove</code>).</p><p>To list a server&#39;s staff, use <code>/staff members</code>. Conversely, use <code>/staff list</code> to list a staff&#39;s servers.</p><p>To automatically sync staff, use <code>/autostaff add</code> to add a staff role, <code>/autostaff remove</code> to remove a staff role, and <code>/autostaff list</code> to list registered staff roles. Users with any of these roles will automatically be considered staff.</p><p>Staff will automatically gain the <b>Network Staff</b> role and your server&#39;s color role in the TCN Hub, and also gain access to banshares from your server.</p></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
