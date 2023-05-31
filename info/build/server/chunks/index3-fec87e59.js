import { c as create_ssr_component, e as escape, d as add_attribute, h as createEventDispatcher, i as spread, j as escape_object } from './index2-4b0ff9cf.js';

const css$2 = {
  code: "div.svelte-1fwfwly{display:inline-flex;flex-direction:row;align-items:center}@keyframes svelte-1fwfwly-spin{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}#large.svelte-1fwfwly{transform-origin:50% 50%;animation:2500ms svelte-1fwfwly-spin cubic-bezier(0.75, 0.25, 0.25, 0.75) infinite}#small.svelte-1fwfwly{transform-origin:50% 50%;animation:7500ms svelte-1fwfwly-spin linear infinite reverse}",
  map: null
};
const LoadingSpinner$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { foreground = "#009688" } = $$props;
  let { background = "#00968860" } = $$props;
  let { small_stroke = 5 } = $$props;
  let { large_stroke = 4 } = $$props;
  let { size = 100 } = $$props;
  let { text = ["Loading", "Loading.", "Loading..", "Loading..."] } = $$props;
  const length = () => typeof text === "string" ? 1 : text.length;
  let index = 0;
  function advance() {
    setTimeout(
      () => {
        index = (index + 1) % length();
        advance();
      },
      2500 / length()
    );
  }
  advance();
  if ($$props.foreground === void 0 && $$bindings.foreground && foreground !== void 0)
    $$bindings.foreground(foreground);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.small_stroke === void 0 && $$bindings.small_stroke && small_stroke !== void 0)
    $$bindings.small_stroke(small_stroke);
  if ($$props.large_stroke === void 0 && $$bindings.large_stroke && large_stroke !== void 0)
    $$bindings.large_stroke(large_stroke);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div class="${"svelte-1fwfwly"}"><svg viewBox="${"0 0 100 100"}" style="${"width: " + escape(size, true) + "px; height: " + escape(size, true) + "px"}"><polygon id="${"small"}" points="${"50,86 81.2,32 18.6,32"}"${add_attribute("stroke", background, 0)}${add_attribute("stroke-width", small_stroke, 0)} fill="${"none"}" class="${"svelte-1fwfwly"}"></polygon><polygon id="${"large"}" points="${"50,95 89,27.5 11,27.5"}"${add_attribute("stroke", foreground, 0)}${add_attribute("stroke-width", large_stroke, 0)} fill="${"none"}" class="${"svelte-1fwfwly"}"></polygon></svg>
    <span style="${"font-size: " + escape(size * 0.8, true) + "px; padding-left: " + escape(size * 0.2, true) + "px"}">${escape(typeof text === "string" ? text : text[index])}</span>
</div>`;
});
const css$1 = {
  code: "div.modal.svelte-ov2ez9{position:fixed;z-index:300;top:20%;left:20%;right:20%;max-height:50%;border-radius:5px;transition:200ms ease-in-out;overflow-y:scroll;padding:2% 5%}div.modal.closed.svelte-ov2ez9{transform:scale(75%) translateY(-20%);opacity:0%;pointer-events:none}@media screen and (max-width: 1000px){div.modal.svelte-ov2ez9{left:5%;right:5%}}div.overlay.svelte-ov2ez9{position:fixed;z-index:200;inset:0;transition:200ms ease-in-out}div.overlay.closed.svelte-ov2ez9{opacity:0%;pointer-events:none}",
  map: null
};
const Modal$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { background_color = "white" } = $$props;
  let { overlay_color = "#00000077" } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.background_color === void 0 && $$bindings.background_color && background_color !== void 0)
    $$bindings.background_color(background_color);
  if ($$props.overlay_color === void 0 && $$bindings.overlay_color && overlay_color !== void 0)
    $$bindings.overlay_color(overlay_color);
  $$result.css.add(css$1);
  return `

<div class="${"modal " + escape(open ? "" : "closed", true) + " svelte-ov2ez9"}" style="${"background-color: " + escape(background_color, true) + ";"}">${slots.default ? slots.default({}) : ``}</div>

<div class="${"overlay " + escape(open ? "" : "closed", true) + " svelte-ov2ez9"}" style="${"background-color: " + escape(overlay_color, true) + ";"}"></div>`;
});
const css = {
  code: "textarea.svelte-xm9m2s{resize:none}",
  map: null
};
const Textarea$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { min_height = "0px" } = $$props;
  createEventDispatcher();
  function update() {
    return;
  }
  let element;
  let { value = "" } = $$props;
  if ($$props.min_height === void 0 && $$bindings.min_height && min_height !== void 0)
    $$bindings.min_height(min_height);
  if ($$props.update === void 0 && $$bindings.update && update !== void 0)
    $$bindings.update(update);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<textarea${spread([escape_object($$props)], { classes: "svelte-xm9m2s" })}${add_attribute("this", element, 0)}>${value || ""}</textarea>`;
});
const LoadingSpinner = LoadingSpinner$1;
const Modal = Modal$1;
const Textarea = Textarea$1;

export { LoadingSpinner as L, Modal as M, Textarea as T };
//# sourceMappingURL=index3-fec87e59.js.map
