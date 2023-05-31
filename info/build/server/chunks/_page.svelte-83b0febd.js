import { c as create_ssr_component, d as add_attribute, v as validate_component, h as createEventDispatcher, e as escape } from './index2-4b0ff9cf.js';
import { M as Modal } from './index3-fec87e59.js';

const css$1 = {
  code: "#testimonial.svelte-y1qdeb.svelte-y1qdeb{all:unset;display:inline-flex;flex-direction:row;align-items:center;cursor:pointer;width:500px;height:200px;background-color:var(--background-2);border-radius:5px}img.svelte-y1qdeb.svelte-y1qdeb{padding:15px;width:120px}#right.svelte-y1qdeb.svelte-y1qdeb{display:inline-flex;flex-direction:column}span.svelte-y1qdeb.svelte-y1qdeb{font-size:150%;font-weight:400;width:320px;height:20px;margin:15px}#right.svelte-y1qdeb>div.svelte-y1qdeb{display:inline-block;width:320px;height:5.25em;margin:15px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}#top.svelte-y1qdeb.svelte-y1qdeb{display:flex;flex-direction:row;align-items:center}#bottom.svelte-y1qdeb.svelte-y1qdeb{padding:1em}",
  map: null
};
const Testimonial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { name } = $$props;
  let { open = false } = $$props;
  let element;
  createEventDispatcher();
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<button id="${"testimonial"}" class="${"svelte-y1qdeb"}"${add_attribute("this", element, 0)}><img${add_attribute("src", image, 0)} alt="${escape(name, true) + " Icon"}" class="${"svelte-y1qdeb"}">
    <div id="${"right"}" class="${"svelte-y1qdeb"}"><span class="${"svelte-y1qdeb"}">${escape(name)}</span>
        <div class="${"svelte-y1qdeb"}">${slots.default ? slots.default({}) : ``}</div></div></button>

${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div id="${"top"}" class="${"svelte-y1qdeb"}"><img${add_attribute("src", image, 0)} alt="${escape(name, true) + " Icon"}" class="${"svelte-y1qdeb"}">
        <span class="${"svelte-y1qdeb"}">${escape(name)}</span></div>
    <div id="${"bottom"}" class="${"svelte-y1qdeb"}">${slots.default ? slots.default({}) : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "#box.svelte-vxy5lc.svelte-vxy5lc{display:grid;grid-template-columns:4fr 6fr;gap:20px}@media screen and (max-width: 1000px){#box.svelte-vxy5lc.svelte-vxy5lc{grid-template-columns:1fr;grid-template-rows:auto auto}}#box.svelte-vxy5lc>div.svelte-vxy5lc{padding:20px 40px;display:flex;flex-direction:column;align-items:center;border-radius:5px}#box-1.svelte-vxy5lc.svelte-vxy5lc{background-color:var(--background-2);font-weight:600;font-size:200%;line-height:120%}#box-2.svelte-vxy5lc.svelte-vxy5lc{background-color:var(--accent-less);font-weight:400;font-size:150%;line-height:150%;justify-content:center}#scroll-box.svelte-vxy5lc.svelte-vxy5lc{position:relative}#scroller.svelte-vxy5lc.svelte-vxy5lc{display:flex;flex-direction:row;gap:20px;overflow-x:scroll;border-radius:5px}button.scroller.svelte-vxy5lc.svelte-vxy5lc{all:unset;position:absolute;top:80px;display:grid;align-items:center;justify-items:center;cursor:default;height:40px;width:40px;border-radius:50%;outline:none;background-color:var(--background-1);border:2px solid var(--background-2)}.svelte-vxy5lc.svelte-vxy5lc::-webkit-scrollbar{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroller;
  $$result.css.add(css);
  return `<div class="${"container svelte-vxy5lc"}"><br class="${"svelte-vxy5lc"}"><div id="${"main"}" class="${"svelte-vxy5lc"}"><div id="${"box"}" class="${"svelte-vxy5lc"}"><div id="${"box-1"}" class="${"svelte-vxy5lc"}"><p class="${"svelte-vxy5lc"}">Welcome to the Teyvat Collective Network</p></div><div id="${"box-2"}" class="${"svelte-vxy5lc"}"><p class="${"svelte-vxy5lc"}">The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote collaboration between partners.</p></div></div><h4 class="${"svelte-vxy5lc"}">Testimonials</h4><div id="${"scroll-box"}" class="${"svelte-vxy5lc"}"><div id="${"scroller"}" class="${"svelte-vxy5lc"}"${add_attribute("this", scroller, 0)}>${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 1"
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.`;
      }
    }
  )}${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 2"
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.`;
      }
    }
  )}${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 3"
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.`;
      }
    }
  )}${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 4"
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.`;
      }
    }
  )}${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      image: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
      name: "Shenhe Mains 5"
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.`;
      }
    }
  )}</div><button class="${"scroller svelte-vxy5lc"}" style="${"left: -20px"}"><i class="${"material-icons svelte-vxy5lc"}">keyboard_arrow_left</i></button><button class="${"scroller svelte-vxy5lc"}" style="${"right: -20px"}"><i class="${"material-icons svelte-vxy5lc"}">keyboard_arrow_right</i></button></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-83b0febd.js.map
