import { c as create_ssr_component, d as add_attribute, k as is_void, e as escape } from './index2-4b0ff9cf.js';

const css = {
  code: "a.svelte-ji3h6o{float:left;padding-right:0.5em}",
  map: null
};
const Linkable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { e } = $$props;
  let { id } = $$props;
  let { value } = $$props;
  if ($$props.e === void 0 && $$bindings.e && e !== void 0)
    $$bindings.e(e);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `${((tag) => {
    return tag ? `<${e}${add_attribute("id", id, 0)} class="${"svelte-ji3h6o"}">${is_void(tag) ? "" : `<a href="${"#" + escape(id, true)}" class="${"svelte-ji3h6o"}"><i class="${"material-icons"}">link</i></a>
    <span><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></span>
`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(e)}`;
});

export { Linkable as L };
//# sourceMappingURL=Linkable-15397560.js.map
