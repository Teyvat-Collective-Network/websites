import { c as create_ssr_component, d as add_attribute, e as escape, l as each, b as null_to_empty, v as validate_component } from './index2-4b0ff9cf.js';

const css$1 = {
  code: "div.outer.svelte-1d7k0k6{justify-content:space-between;background-color:var(--background-2);padding:1em;border-radius:5px}#top.svelte-1d7k0k6,div.outer.svelte-1d7k0k6{display:flex;flex-direction:column;align-items:center;gap:0.5em}img.svelte-1d7k0k6{border-radius:5px}b.svelte-1d7k0k6{font-size:150%;text-align:center}a.button.svelte-1d7k0k6{font-weight:400;padding-left:1.5em;padding-right:1.5em}",
  map: null
};
const Partner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { code = "" } = $$props;
  let { link = `https://discord.gg/${code}` } = $$props;
  let { image } = $$props;
  let { button = "Join" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  $$result.css.add(css$1);
  return `<div class="${"outer svelte-1d7k0k6"}"><div id="${"top"}" class="${"svelte-1d7k0k6"}"><img${add_attribute("src", image, 0)} alt="${escape(name, true) + " Icon"}" width="${"150px"}" height="${"150px"}" class="${"svelte-1d7k0k6"}">
        <b class="${"svelte-1d7k0k6"}">${escape(name)}</b>
        ${slots.default ? slots.default({}) : ``}</div>
    <a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"button svelte-1d7k0k6"}">${escape(button)}</a>
</div>`;
});
const css = {
  code: "#main.svelte-1wgjvfu.svelte-1wgjvfu{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(300px, 100%), 1fr));gap:20px}h1.svelte-1wgjvfu.svelte-1wgjvfu,.wide.svelte-1wgjvfu.svelte-1wgjvfu{grid-column:1/-1}#searchbar.svelte-1wgjvfu.svelte-1wgjvfu{display:flex;flex-direction:row;align-items:center;gap:20px;margin-bottom:40px}.external.svelte-1wgjvfu.svelte-1wgjvfu{display:flex;flex-direction:row;align-items:center;gap:40px;background-color:var(--background-2);padding:20px 40px;border-radius:5px}.external.svelte-1wgjvfu>div.svelte-1wgjvfu{margin-bottom:40px}@media screen and (max-width: 600px){.external.svelte-1wgjvfu.svelte-1wgjvfu{flex-direction:column}}#box.svelte-1wgjvfu.svelte-1wgjvfu{grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(300px, 100%), 1fr));gap:20px;padding-bottom:40px}#box.svelte-1wgjvfu>div.svelte-1wgjvfu{padding:20px 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:5px}#box-1.svelte-1wgjvfu.svelte-1wgjvfu{background-color:var(--background-2);font-size:125%;line-height:175%}#box-2.svelte-1wgjvfu.svelte-1wgjvfu{background-color:var(--background-2);font-size:125%;line-height:175%}.hidden.svelte-1wgjvfu.svelte-1wgjvfu{position:fixed;width:0;height:0;top:100vh;left:100vw;opacity:0;pointer-events:none}",
  map: null
};
function fuzzy(string, query) {
  const lower = query.toLowerCase();
  string = string.toLowerCase();
  let i = 0;
  for (const char of lower) {
    if ((i = string.indexOf(char, i)) === -1)
      return false;
    i++;
  }
  return true;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let query = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"container"}"><div id="${"main"}" class="${"svelte-1wgjvfu"}"><h1 class="${"svelte-1wgjvfu"}">Our Partners</h1><div class="${"wide svelte-1wgjvfu"}" id="${"searchbar"}"><i class="${"material-icons"}">search</i><input type="${"text"}"${add_attribute("value", query, 0)}></div>${`<div id="${"box"}" class="${"svelte-1wgjvfu"}"><div id="${"box-1"}" class="${"svelte-1wgjvfu"}"><p>The TCN is a network of ${escape(data.partners.length)} high-quality Genshin Impact Character Mains-style Discord servers that focus on creating fan communities.</p></div><div id="${"box-2"}" class="${"svelte-1wgjvfu"}"><p>Do you own a Discord server dedicated to a playable Genshin Impact character and want to join the TCN? Apply here!</p><a class="${"button"}" href="${"/join"}">Apply To Join</a></div></div><div class="${"external wide svelte-1wgjvfu"}"><img src="${"https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png"}" alt="${"Genshin Wizard Icon"}"><div class="${"svelte-1wgjvfu"}"><h3>Genshin Wizard</h3><p>The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility bot. Check out their website below!</p><a class="${"button"}" href="${"https://genshinwizard.com"}">Website</a></div></div>`}${each(data.partners, ({ character, name, invite, icon, description }) => {
    return `<div class="${escape(
      null_to_empty(fuzzy(name, query) || fuzzy(character, query) ? "" : "hidden"),
      true
    ) + " svelte-1wgjvfu"}">${validate_component(Partner, "Partner").$$render($$result, { name, code: invite, image: icon }, {}, {
      default: () => {
        return `<p><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>`;
      }
    })}</div>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bef343f6.js.map
