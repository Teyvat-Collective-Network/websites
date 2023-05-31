import { c as create_ssr_component } from './index2-4b0ff9cf.js';

const css = {
  code: ".announcement.svelte-jxpi0n.svelte-jxpi0n{display:flex;flex-direction:column;padding:1.5em;border-radius:5px}.announcement.svelte-jxpi0n div.svelte-jxpi0n:first-of-type{display:flex;flex-direction:row;align-items:center;gap:1em}.announcement.svelte-jxpi0n div:first-of-type span.svelte-jxpi0n{font-weight:400;font-size:120%}.announcement.svelte-jxpi0n.svelte-jxpi0n:not(.highlight){background-color:var(--background-2)}.announcement.highlight.svelte-jxpi0n.svelte-jxpi0n{background-color:var(--accent-less)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}"><div id="${"main"}"><h1>Featured Content</h1><div class="${"announcement highlight svelte-jxpi0n"}"><div class="${"svelte-jxpi0n"}"><i class="${"material-icons"}">campaign</i><span class="${"svelte-jxpi0n"}">New Banshare System</span></div><div class="${"svelte-jxpi0n"}"><p>We are rolling out our new banshare system over the next few weeks. Instead of just publishing them through an announcement channel, it will now be posted by a bot. This lets us ensure banshares are only being used in TCN servers but also allows for automated actions. Servers can now set a threshold to automatically ban users or have a button to execute a banshare with one simple click.</p><p>To get started, go to <a href="${"/info/banshares"}">the banshare help page</a>.</p></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dbd41593.js.map
