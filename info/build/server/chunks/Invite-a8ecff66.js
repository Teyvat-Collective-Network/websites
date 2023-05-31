import { c as create_ssr_component, e as escape, d as add_attribute } from './index2-4b0ff9cf.js';

/* empty css                                      */const css = {
  code: '#invite.svelte-1ehda4r{display:grid;grid-template-columns:1fr 5fr 1fr;grid-template-rows:3fr 2fr;grid-template-areas:"a a a" "b c d";gap:1em;border-radius:5px;align-items:center;background-color:rgb(var(--pure-rgb), 50%);width:min(100%, max(40%, 400px))}#banner.svelte-1ehda4r{grid-area:a;height:100%;background-size:cover;background-position:center;border-radius:5px 5px 0 0}#icon.svelte-1ehda4r{grid-area:b;max-width:100%;margin:0 0 1em 1em;border-radius:10px}#title.svelte-1ehda4r{grid-area:c;padding:0 0 1em 1em}#join.svelte-1ehda4r{grid-area:d;margin:0 1em 1em 0}',
  map: null
};
const Invite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banner = null } = $$props;
  let { icon } = $$props;
  let { title } = $$props;
  let { code } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  $$result.css.add(css);
  return `<div id="${"invite"}" class="${"svelte-1ehda4r"}">${banner ? `<div id="${"banner"}" style="${"background-image: url(" + escape(banner, true) + ")"}" class="${"svelte-1ehda4r"}"></div>` : `<div id="${"banner"}" style="${"background-color: rgb(var(--pure-rgb), 50%)"}" class="${"svelte-1ehda4r"}"></div>`}
    <img id="${"icon"}"${add_attribute("src", icon, 0)} alt="${"icon"}" class="${"svelte-1ehda4r"}">
    <b id="${"title"}" class="${"svelte-1ehda4r"}">${escape(title)}</b>
    <a id="${"join"}" href="${"https://discord.gg/" + escape(code, true)}" class="${"button svelte-1ehda4r"}">JOIN</a>
</div>`;
});

export { Invite as I };
//# sourceMappingURL=Invite-a8ecff66.js.map
