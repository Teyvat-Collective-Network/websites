import { c as create_ssr_component, e as escape, l as each, v as validate_component } from "../../../chunks/index2.js";
import { I as Invite } from "../../../chunks/Invite.js";
import { M as Modal } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#calendar-box.svelte-j4whj9.svelte-j4whj9{position:relative;width:100%;overflow-x:scroll;background-color:var(--background-2);border-radius:5px;padding:90px 20px 20px 20px}#calendar.svelte-j4whj9.svelte-j4whj9{display:flex;flex-direction:column;gap:5px;border-radius:5px;width:5495px;height:210px}.svelte-j4whj9.svelte-j4whj9::-webkit-scrollbar-thumb{background-color:var(--background-1);border:4px solid var(--background-2);border-radius:5px}.svelte-j4whj9.svelte-j4whj9::-webkit-scrollbar-thumb:hover{background-color:var(--background-X)}.track.svelte-j4whj9.svelte-j4whj9{position:relative;height:50px}.event.svelte-j4whj9.svelte-j4whj9{all:unset;position:absolute;display:flex;flex-direction:row;align-items:center;cursor:pointer;height:40px;width:calc(100% - 10px);padding:5px;border-radius:5px;z-index:1;font-weight:400;transition:background-color 250ms}.event.svelte-j4whj9>div.svelte-j4whj9{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.event.svelte-j4whj9.svelte-j4whj9:hover{background-color:var(--hover-background) !important}.vline.svelte-j4whj9.svelte-j4whj9{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;pointer-events:none;line-height:16px}.dateline.svelte-j4whj9.svelte-j4whj9{background-color:rgb(var(--invert-rgb), 15%);width:1px;padding-top:30px}.dateline.svelte-j4whj9>span.svelte-j4whj9{padding:0;height:20px;font-size:16px}.timeline.svelte-j4whj9.svelte-j4whj9{background-color:rgb(var(--accent-rgb), 75%);width:3px;z-index:2}.timeline.svelte-j4whj9>span.svelte-j4whj9{margin-top:4px;padding:3px 3px 0 3px;height:20px;font-size:16px}.less.svelte-j4whj9.svelte-j4whj9{opacity:40%}.more.svelte-j4whj9.svelte-j4whj9{opacity:80%}.current.svelte-j4whj9.svelte-j4whj9{background-color:var(--background-1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const open = {};
  let sx = 0;
  let x = 100;
  setInterval(() => x += 0.02, 10);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-j4whj9"}"><div id="${"main"}" class="${"svelte-j4whj9"}"><h3 class="${"svelte-j4whj9"}">Events &amp; Other Dates</h3><div id="${"calendar-box"}" class="${"svelte-j4whj9"}"><div id="${"calendar"}" class="${"svelte-j4whj9"}"><div class="${"track svelte-j4whj9"}"><button class="${"unset event svelte-j4whj9"}" style="${"left: 220px; width: 150px; background-color: #456; --hover-background: #567"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 240px)"}" class="${"svelte-j4whj9"}">Saccharine Confections</div></button></div><div class="${"track svelte-j4whj9"}"><button class="${"unset event svelte-j4whj9"}" style="${"left: 110px; width: 1085px; background-color: #111; --hover-background: #123"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 130px)"}" class="${"svelte-j4whj9"}">Event Banner</div></button><button class="${"unset event svelte-j4whj9"}" style="${"left: 1210px; width: 1085px; background-color: #111; --hover-background: #123"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 1230px)"}" class="${"svelte-j4whj9"}">Event Banner</div></button></div><div class="${"track svelte-j4whj9"}"><button class="${"unset event svelte-j4whj9"}" style="${"left: 110px; width: 1030px; background-color: #444; --hover-background: #555"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 130px)"}" class="${"svelte-j4whj9"}">Spiral Abyss</div></button><button class="${"unset event svelte-j4whj9"}" style="${"left: 1210px; width: 1030px; background-color: #444; --hover-background: #555"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 1230px)"}" class="${"svelte-j4whj9"}">Spiral Abyss</div></button></div><div class="${"track svelte-j4whj9"}"><button class="${"unset event svelte-j4whj9"}" style="${"left: 275px; width: 535px; background-color: #534; --hover-background: #645"}"><div style="${"padding-left: calc(" + escape(sx, true) + "px - 295px)"}" class="${"svelte-j4whj9"}">Wave 19 Election</div></button></div>${each([...new Array(101).keys()], (i) => {
      return `<div class="${"vline dateline svelte-j4whj9"}" style="${"left: " + escape(17 + 55 * i, true) + "px"}"><span class="${"plain less svelte-j4whj9"}">Fr</span><span class="${"plain more svelte-j4whj9"}">32</span></div>`;
    })}<div class="${"vline timeline svelte-j4whj9"}" style="${"left: " + escape(100 + x, true) + "px"}"><span class="${"plain current svelte-j4whj9"}">1:23:45</span></div></div></div></div></div>${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["saccharine-confections"]
      },
      {
        open: ($$value) => {
          open["saccharine-confections"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Join Dehya Mains to participate in our latest art event!<br class="${"svelte-j4whj9"}"><br class="${"svelte-j4whj9"}">${validate_component(Invite, "Invite").$$render(
            $$result,
            {
              banner: "https://images-ext-1.discordapp.net/external/xqHth8CbuCxM777Lk3o4LEdoBibPs8LxK_pgoEft7Dk/%3Fsize%3D4096/https/cdn.discordapp.com/banners/992162190163451984/d4dec85d82d6ca967010ab40b2b5f410.webp?width=2296&height=1292",
              icon: "https://images-ext-2.discordapp.net/external/EBcjXzaIpsSJSShcrWY5HxBVmHomDD3zHkcq64gv_aQ/%3Fsize%3D256/https/cdn.discordapp.com/icons/992162190163451984/3dfabe30687e32e8b05af0a7bf0f4b8c.webp",
              title: "Dehya Mains",
              code: "dehya"
            },
            {},
            {}
          )}`;
        }
      }
    )}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["event-banner-1"]
      },
      {
        open: ($$value) => {
          open["event-banner-1"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Alhaitham &amp; Xiao!`;
        }
      }
    )}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["event-banner-2"]
      },
      {
        open: ($$value) => {
          open["event-banner-2"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Hu Tao &amp; Yelan!`;
        }
      }
    )}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["spiral-abyss-1"]
      },
      {
        open: ($$value) => {
          open["spiral-abyss-1"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Spiral abyss.`;
        }
      }
    )}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["spiral-abyss-2"]
      },
      {
        open: ($$value) => {
          open["spiral-abyss-2"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Spiral abyss.`;
        }
      }
    )}${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        background_color: "var(--background-1)",
        overlay_color: "rgb(var(--pure-rgb), 80%)",
        open: open["election-19"]
      },
      {
        open: ($$value) => {
          open["election-19"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Wave 19 Election.`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
