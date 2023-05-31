import { c as create_ssr_component, e as escape, d as add_attribute, b as null_to_empty } from "./index2.js";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-15xczsp.svelte-15xczsp{display:inline-block}.lightbox.svelte-15xczsp.svelte-15xczsp{display:inline-grid;align-items:center;justify-items:center;position:fixed;inset:0;z-index:25;background-color:rgb(var(--pure-rgb), 80%);backdrop-filter:blur(1px);transition:opacity 200ms}.lightbox.svelte-15xczsp img.svelte-15xczsp{transition:transform 200ms}.lightbox.svelte-15xczsp img.svelte-15xczsp:not(.transparent){background-color:var(--background-X)}.lightbox.svelte-15xczsp.svelte-15xczsp:not(.open){opacity:0%;pointer-events:none}.lightbox.svelte-15xczsp:not(.open) img.svelte-15xczsp{transform:scale(1)}.lightbox.open.svelte-15xczsp.svelte-15xczsp{opacity:100%}.lightbox.open.svelte-15xczsp img.svelte-15xczsp{transform:scale(1.2)}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { transparent = false } = $$props;
  let { open = false } = $$props;
  let { classes = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.transparent === void 0 && $$bindings.transparent && transparent !== void 0)
    $$bindings.transparent(transparent);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  return `

<div class="${"box svelte-15xczsp"}"><img class="${"base " + escape(classes, true) + " svelte-15xczsp"}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} style="${"max-width: 100%"}">
    <div class="${"lightbox " + escape(open ? "open" : "", true) + " svelte-15xczsp"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${escape(null_to_empty(transparent ? "transparent" : ""), true) + " svelte-15xczsp"}" style="${"max-width: 75%; max-height: 75%"}"></div>
</div>`;
});
export {
  Image as I
};
