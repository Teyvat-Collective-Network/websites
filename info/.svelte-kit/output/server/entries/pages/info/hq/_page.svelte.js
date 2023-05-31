import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/definitions-organization", "Definitions & Organization"],
      next: ["/info/quickstart", "Quickstart"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>HQ</h1><ul><li><a href="${"/info/directory"}">Directory</a></li></ul><ul><li><a href="${"/info/voting"}">Voting</a></li></ul><ul><li><a href="${"/info/procedures"}">Procedures</a></li></ul><ul><li><a href="${"/info/akasha"}">Akasha System</a></li></ul></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
