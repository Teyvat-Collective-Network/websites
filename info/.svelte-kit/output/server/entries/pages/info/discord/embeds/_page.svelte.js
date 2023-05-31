import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import { L as Linkable } from "../../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render(
    $$result,
    {
      last: ["/info/discord#webhooks-embeds", "Discord Help"]
    },
    {},
    {
      default: () => {
        return `<div id="${"main"}"><h1>Embeds</h1>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "embed-color",
            e: "h2",
            value: "Embed Color"
          },
          {},
          {}
        )}<p>You should pick one embed color that you like and stick to it for most/all of your embeds for consistency and organization. If you want am embed to appear colorless, use <code>0x2d3136</code> (dark mode).</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "text-color",
            e: "h2",
            value: "Text Color"
          },
          {},
          {}
        )}<p>You cannot color text by default, but you can use code block syntax highlighting to get a similar effect. Check out <a href="${"https://docs.google.com/document/d/1tyBtgNfGc6ae7t033dFxdqCSfG9kgiuwrFxlJTvyuu8/edit"}">this document</a> for a list.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "timestamps",
            e: "h2",
            value: "Timestamps"
          },
          {},
          {}
        )}<p>Discord doesn&#39;t make it obvious that this feature even exists, but you can show a specific date to a user both absolutely and relatively. The format is <code>&lt;t:timestamp:format&gt;</code>. You can use <a href="${"https://discord-timestamp-generator.vercel.app/"}">this website</a> to generate these.</p>${validate_component(Linkable, "Linkable").$$render(
          $$result,
          {
            id: "limits",
            e: "h2",
            value: "Embed Limits"
          },
          {},
          {}
        )}<p>Discord places size limits on embeds.</p><ul><li>The author name can be up to 256 characters.</li><li>The title can be up to 256 characters.</li><li>The description can be up to 4096 characters.</li><li>Field names are mandatory and can be up to 256 characters.</li><li>Field values are mandatory and can be up to 1024 characters.</li><li>The footer text can be up to 2048 characters, but it is not formatted.</li><li>The total length of the listed fields over all embeds in one message can be up to 6000 characters,</li><li>A message may have up to 10 embeds.</li><li>An embed may have up to 25 fields.</li></ul></div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
