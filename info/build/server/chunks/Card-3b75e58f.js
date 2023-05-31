import { c as create_ssr_component, e as escape } from './index2-4b0ff9cf.js';

const css = {
  code: "div.svelte-121f4ox button.svelte-121f4ox{cursor:pointer;all:unset;width:100%;padding:0 1em;margin-bottom:-1em;user-select:none;-moz-user-select:none;-webkit-user-select:none}div.svelte-121f4ox>div.svelte-121f4ox{padding:0 1em 1em 1em}div.expandable.svelte-121f4ox>div.svelte-121f4ox{overflow-y:hidden;transition:max-height 500ms;max-height:500px}div.expandable.svelte-121f4ox:not(.open)>div.svelte-121f4ox{max-height:0}h5.svelte-121f4ox.svelte-121f4ox{display:flex;flex-direction:row;align-items:center}h5.svelte-121f4ox span.svelte-121f4ox{margin-left:1em}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = null } = $$props;
  let { title } = $$props;
  let { expandable = false } = $$props;
  let { open = false } = $$props;
  let { icon_color = "inherit" } = $$props;
  let open_;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.icon_color === void 0 && $$bindings.icon_color && icon_color !== void 0)
    $$bindings.icon_color(icon_color);
  $$result.css.add(css);
  open_ = !expandable || open;
  return `<div class="${escape(expandable ? "expandable" : "", true) + " " + escape(open_ ? "open" : "", true) + " svelte-121f4ox"}"><button class="${"svelte-121f4ox"}"><h5 class="${"svelte-121f4ox"}">${icon ? `<i class="${"material-icons"}" style="${"color: " + escape(icon_color, true)}">${escape(icon)}</i>` : ``}
            <span class="${"svelte-121f4ox"}">${escape(title)}</span></h5></button>
    <div id="${"slot"}" class="${"svelte-121f4ox"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

export { Card as C };
//# sourceMappingURL=Card-3b75e58f.js.map
