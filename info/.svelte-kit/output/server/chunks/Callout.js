import { c as create_ssr_component, e as escape } from "./index2.js";
const Callout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-cfiyg1{padding:1em;border-radius:5px;display:flex;flex-direction:row}i.svelte-cfiyg1{padding-top:1.05em;padding-right:1em}",
  map: null
};
const styles = {
  green: {
    icon: "check",
    color: "var(--green-callout)"
  },
  info: {
    icon: "info",
    color: "var(--blue-callout)"
  },
  warn: {
    icon: "warning",
    color: "var(--yellow-callout)"
  },
  red: {
    icon: "report",
    color: "var(--red-callout)"
  }
};
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div style="${"background-color: " + escape(styles[style].color, true)}" class="${"svelte-cfiyg1"}"><i class="${"material-icons svelte-cfiyg1"}">${escape(styles[style].icon)}</i>
    <span>${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
export {
  Callout as C
};
