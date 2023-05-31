import { c as create_ssr_component, l as each, d as add_attribute, e as escape } from "./index2.js";
const Navigation_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-2bp5xr{background-color:var(--accent-less);padding:0.25em 1em;border-radius:5px;display:flex;flex-direction:row;justify-content:space-between}a.svelte-2bp5xr{color:var(--text-primary)}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { last = null } = $$props;
  let { next = null } = $$props;
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  $$result.css.add(css);
  return `${each([0, 1], (x) => {
    return `<nav class="${"svelte-2bp5xr"}"><div>${last ? `<a${add_attribute("href", last[0], 0)} class="${"svelte-2bp5xr"}">&lt; ${escape(last[1])}</a>` : ``}</div>

        <div>${next ? `<a${add_attribute("href", next[0], 0)} class="${"svelte-2bp5xr"}">${escape(next[1])} &gt;</a>` : ``}
        </div></nav>

    ${x === 0 ? `${slots.default ? slots.default({}) : ``}` : ``}`;
  })}`;
});
export {
  Navigation as N
};
