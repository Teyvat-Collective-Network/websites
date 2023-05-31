import { c as create_ssr_component, e as escape, v as validate_component, b as null_to_empty, d as add_attribute } from './index2-4b0ff9cf.js';
import { c as PUBLIC_TCN_AUTH, d as PUBLIC_DOMAIN } from './public-a46e145d.js';

const css$2 = {
  code: "#bar.svelte-1onat8c.svelte-1onat8c,#spacer.svelte-1onat8c.svelte-1onat8c{top:0;left:0;right:0;height:80px}@media screen and (min-width: 1360px){#bar.svelte-1onat8c.svelte-1onat8c,#spacer.svelte-1onat8c.svelte-1onat8c{display:none}}#bar.svelte-1onat8c.svelte-1onat8c{position:fixed;background-color:var(--background-X)}svg.svelte-1onat8c.svelte-1onat8c{cursor:pointer;position:fixed;width:32px;height:32px;padding:24px;z-index:10}rect.svelte-1onat8c.svelte-1onat8c{fill:var(--accent-more);transition:transform 250ms cubic-bezier(0, 1, 0.6, 1.4), opacity 250ms cubic-bezier(0, 1, 0.6, 1.4)}#top.svelte-1onat8c.svelte-1onat8c{transform-origin:15% 15%}#mid.svelte-1onat8c.svelte-1onat8c{transform-origin:50% 50%}#bot.svelte-1onat8c.svelte-1onat8c{transform-origin:15% 85%}.open.svelte-1onat8c #top.svelte-1onat8c{transform:rotateZ(45deg) scaleX(1.414)}.open.svelte-1onat8c #mid.svelte-1onat8c{transform:translateX(-50%);opacity:0}.open.svelte-1onat8c #bot.svelte-1onat8c{transform:rotateZ(-45deg) scaleX(1.414)}#sidebar.svelte-1onat8c.svelte-1onat8c{position:fixed;display:flex;flex-direction:column;justify-content:space-between;background-color:var(--background-1);width:25%;height:100%;z-index:5;transition:transform 250ms, opacity 250ms}@media screen and (max-width: 1000px){#sidebar.svelte-1onat8c.svelte-1onat8c{width:75%}}#sidebar.svelte-1onat8c.svelte-1onat8c:not(.open){transform:translateX(-100%);opacity:0%;pointer-events:none}#sidebar.open.svelte-1onat8c.svelte-1onat8c{transform:translateX(0);opacity:100%}#backdrop.svelte-1onat8c.svelte-1onat8c{position:fixed;background-color:rgb(var(--pure-rgb), 40%);backdrop-filter:blur(2px);width:100%;height:100%;z-index:4;transition:opacity 250ms}#backdrop.svelte-1onat8c.svelte-1onat8c:not(.open){opacity:0%;pointer-events:none}#backdrop.open.svelte-1onat8c.svelte-1onat8c{opacity:100%}#contents.svelte-1onat8c.svelte-1onat8c{overflow-y:scroll;display:flex;flex-direction:column;padding-top:92px}#footer.svelte-1onat8c.svelte-1onat8c{padding:1em;font-weight:400}.t1.svelte-1onat8c.svelte-1onat8c{font-weight:600;padding-left:1em}.t2.svelte-1onat8c.svelte-1onat8c{font-weight:400;padding-left:2em}.t3.svelte-1onat8c.svelte-1onat8c{font-weight:300;padding-left:3em}a.svelte-1onat8c.svelte-1onat8c{outline:none;display:flex;flex-direction:row;align-items:center;gap:0.5em}a.svelte-1onat8c.svelte-1onat8c:hover,a.svelte-1onat8c.svelte-1onat8c:focus{background-color:rgba(0, 0, 0, 0.0666666667)}a.hidden.svelte-1onat8c.svelte-1onat8c{display:none}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark } = $$props;
  let { user } = $$props;
  let { api_user } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.api_user === void 0 && $$bindings.api_user && api_user !== void 0)
    $$bindings.api_user(api_user);
  $$result.css.add(css$2);
  return `

<svg viewBox="${"0 0 100 100"}" class="${escape(null_to_empty(""), true) + " svelte-1onat8c"}"><rect id="${"top"}" x="${"10"}" y="${"10"}" width="${"80"}" height="${"10"}" class="${"svelte-1onat8c"}"></rect><rect id="${"mid"}" x="${"10"}" y="${"45"}" width="${"80"}" height="${"10"}" class="${"svelte-1onat8c"}"></rect><rect id="${"bot"}" x="${"10"}" y="${"80"}" width="${"80"}" height="${"10"}" class="${"svelte-1onat8c"}"></rect></svg>

<div id="${"bar"}" class="${"svelte-1onat8c"}"></div>
<div id="${"spacer"}" class="${"svelte-1onat8c"}"></div>

<div id="${"sidebar"}" class="${escape(null_to_empty(""), true) + " svelte-1onat8c"}"><div id="${"contents"}" class="${"svelte-1onat8c"}"><a${add_attribute("href", "javascript:void(0)", 0)} class="${"t1 svelte-1onat8c"}"><i class="${"material-icons"}">${escape(dark ? "light_mode" : "dark_mode")}</i>
            Switch to ${escape(dark ? "Light" : "Dark")} Mode
        </a>
        <a href="${"/"}" class="${"t1 svelte-1onat8c"}">Home Page</a>
        <a href="${"/about"}" class="${"t1 svelte-1onat8c"}">About Us</a>
        <a href="${"/partners"}" class="${"t1 svelte-1onat8c"}">Partners</a>
        <a href="${"/calendar"}" class="${"t1 svelte-1onat8c"}">Calendar</a>
        <a href="${"/featured"}" class="${"t1 svelte-1onat8c"}">Featured Content</a>
        <a href="${"/join"}" class="${"t1 svelte-1onat8c"}">Joining the TCN</a>
        <a href="${"/contact"}" class="${"t1 svelte-1onat8c"}">Contact Us</a>
        <a${add_attribute("href", "javascript:void(0)", 0)} class="${"t1 svelte-1onat8c"}">Info Pages
            <i class="${"material-icons"}">${escape("chevron_right")}</i></a>
        <a href="${"/info/rules"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">Rules</a>
        <a href="${"/info/definitions-organization"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">Definitions &amp; Organization</a>
        <a href="${"/info/hq"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">HQ</a>
        <a href="${"/info/directory"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Directory</a>
        <a href="${"/info/voting"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Voting</a>
        <a href="${"/info/procedures"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Procedures</a>
        <a href="${"/info/akasha"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Akasha System</a>
        <a href="${"/info/quickstart"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">Quickstart</a>
        <a href="${"/info/partner-list"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Partner List &amp; Autosync</a>
        <a href="${"/info/banshares"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Banshares</a>
        <a href="${"/info/global"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Global Chat</a>
        <a href="${"/info/staff-link"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Staff Link</a>
        <a href="${"/info/other-bots"}" class="${"t3 " + escape("hidden", true) + " svelte-1onat8c"}">Other Bots</a>
        <a href="${"/info/discord"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">Discord Help</a>
        ${user ? `${api_user?.guilds?.length > 0 ? `<a${add_attribute("href", "javascript:void(0)", 0)} class="${"t1 svelte-1onat8c"}">Staff Area
                    <i class="${"material-icons"}">${escape("chevron_right")}</i></a>
                <a href="${"/banshare"}" class="${"t2 " + escape("hidden", true) + " svelte-1onat8c"}">Submit a Banshare</a>` : ``}
            <a href="${escape(PUBLIC_TCN_AUTH, true) + "/logout?redirect=" + escape(encodeURIComponent(PUBLIC_DOMAIN), true)}" class="${"t1 svelte-1onat8c"}">Log Out
                <i class="${"material-icons"}">logout</i></a>` : `<a href="${escape(PUBLIC_TCN_AUTH, true) + "?redirect=" + escape(encodeURIComponent(PUBLIC_DOMAIN), true)}" class="${"t1 svelte-1onat8c"}">Log In
                <i class="${"material-icons"}">login</i></a>`}</div>
    <div id="${"footer"}" class="${"svelte-1onat8c"}">© 2023 TCN Developers</div></div>

<div id="${"backdrop"}" class="${escape(null_to_empty(""), true) + " svelte-1onat8c"}"></div>`;
});
const css$1 = {
  code: ".container.svelte-jy9qb3,#left.svelte-jy9qb3,#links.svelte-jy9qb3{padding-top:1em;display:flex;flex-direction:row;align-items:center}#left.svelte-jy9qb3{gap:1.5em}.container.svelte-jy9qb3{justify-content:space-between;padding-bottom:2em}@media screen and (max-width: 1200px){#links.svelte-jy9qb3{display:none}}#title.svelte-jy9qb3{font-weight:500;font-size:150%}a.svelte-jy9qb3{color:var(--text-primary);font-weight:400;transition:border-bottom 200ms, color 200ms}a.svelte-jy9qb3:not(.button){margin:1em;border-bottom:3px solid transparent}a.svelte-jy9qb3:not(.button):hover{color:var(--accent);border-bottom:3px solid var(--accent)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-jy9qb3"}"><div id="${"left"}" class="${"svelte-jy9qb3"}"><img src="${"/favicon.png"}" alt="${"Icon"}" width="${"80px"}">
        <span id="${"title"}" class="${"svelte-jy9qb3"}">Teyvat Collective Network</span></div>
    <div id="${"links"}" class="${"svelte-jy9qb3"}"><a href="${"/"}" class="${"svelte-jy9qb3"}">Home</a>
        <a href="${"/about"}" class="${"svelte-jy9qb3"}">About</a>
        <a href="${"/partners"}" class="${"svelte-jy9qb3"}">Partners</a>
        <a href="${"/calendar"}" class="${"svelte-jy9qb3"}">Calendar</a>
        <a href="${"/join"}" class="${"button svelte-jy9qb3"}">Apply Now</a></div>
</div>`;
});
const css = {
  code: "#slot.svelte-s87ey5{margin-bottom:2em}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<html lang="${"en"}"><head><meta charset="${"UTF-8"}">
        <meta name="${"description"}" content="${"Teyvat Collective Network"}">
        <meta name="${"keywords"}" content="${"teyvat, collective, network, tcn, genshin, impact"}">
        <meta name="${"author"}" content="${"TCN Dev Team"}">
        <meta name="${"viewport"}" content="${"width=device-width, initial-scale=1.0"}">

        <meta property="${"og:title"}" content="${"Teyvat Collective Network"}">
        <meta property="${"og:description"}" content="${"The Teyvat Collective Network is a network of high-quality Genshin Impact Discord servers, each dedicated to one character. Our mission is to unite mains servers across Teyvat, provide support, and promote collaboration."}">
        <meta property="${"og:url"}" content="${"https://info.teyvatcollective.network"}">
        <meta property="${"og:image"}" content="${"https://info.teyvatcollective.network/favicon.png"}">
        <meta name="${"theme-color"}" data-react-helmet="${"true"}" content="${"#207868"}">

        <link rel="${"shortcut icon"}" type="${"image/png"}" href="${"/favicon.png"}">

        <link rel="${"stylesheet"}" type="${"text/css"}" href="${"https://fonts.googleapis.com/icon?family=Material+Icons"}">
        <link rel="${"stylesheet"}" type="${"text/css"}" href="${"/styles/" + escape(data.dark ? "dark" : "light", true) + ".css"}">
        <link rel="${"stylesheet"}" type="${"text/css"}" href="${"/styles/stylesheet.css"}">

        <style lang="${"scss"}">@keyframes fade-from-left {
  from {
    opacity: 0%;
    transform: translateX(-1vw);
  }
  to {
    opacity: 100%;
    transform: translateY(0);
  }
}
#main > :nth-child(1) {
  animation: fade-from-left 500ms 25ms backwards;
}

#main > :nth-child(2) {
  animation: fade-from-left 500ms 50ms backwards;
}

#main > :nth-child(3) {
  animation: fade-from-left 500ms 75ms backwards;
}

#main > :nth-child(4) {
  animation: fade-from-left 500ms 100ms backwards;
}

#main > :nth-child(5) {
  animation: fade-from-left 500ms 125ms backwards;
}

#main > :nth-child(6) {
  animation: fade-from-left 500ms 150ms backwards;
}

#main > :nth-child(7) {
  animation: fade-from-left 500ms 175ms backwards;
}

#main > :nth-child(8) {
  animation: fade-from-left 500ms 200ms backwards;
}

#main > :nth-child(9) {
  animation: fade-from-left 500ms 225ms backwards;
}

#main > :nth-child(10) {
  animation: fade-from-left 500ms 250ms backwards;
}

#main > :nth-child(11) {
  animation: fade-from-left 500ms 275ms backwards;
}

#main > :nth-child(12) {
  animation: fade-from-left 500ms 300ms backwards;
}

#main > :nth-child(13) {
  animation: fade-from-left 500ms 325ms backwards;
}

#main > :nth-child(14) {
  animation: fade-from-left 500ms 350ms backwards;
}

#main > :nth-child(15) {
  animation: fade-from-left 500ms 375ms backwards;
}

#main > :nth-child(16) {
  animation: fade-from-left 500ms 400ms backwards;
}

#main > :nth-child(17) {
  animation: fade-from-left 500ms 425ms backwards;
}

#main > :nth-child(18) {
  animation: fade-from-left 500ms 450ms backwards;
}

#main > :nth-child(19) {
  animation: fade-from-left 500ms 475ms backwards;
}

#main > :nth-child(20) {
  animation: fade-from-left 500ms 500ms backwards;
}

#main > :nth-child(21) {
  animation: fade-from-left 500ms 525ms backwards;
}

#main > :nth-child(22) {
  animation: fade-from-left 500ms 550ms backwards;
}

#main > :nth-child(23) {
  animation: fade-from-left 500ms 575ms backwards;
}

#main > :nth-child(24) {
  animation: fade-from-left 500ms 600ms backwards;
}

#main > :nth-child(25) {
  animation: fade-from-left 500ms 625ms backwards;
}

#main > :nth-child(26) {
  animation: fade-from-left 500ms 650ms backwards;
}

#main > :nth-child(27) {
  animation: fade-from-left 500ms 675ms backwards;
}

#main > :nth-child(28) {
  animation: fade-from-left 500ms 700ms backwards;
}

#main > :nth-child(29) {
  animation: fade-from-left 500ms 725ms backwards;
}

#main > :nth-child(30) {
  animation: fade-from-left 500ms 750ms backwards;
}

#main > :nth-child(31) {
  animation: fade-from-left 500ms 775ms backwards;
}

#main > :nth-child(32) {
  animation: fade-from-left 500ms 800ms backwards;
}

#main > :nth-child(33) {
  animation: fade-from-left 500ms 825ms backwards;
}

#main > :nth-child(34) {
  animation: fade-from-left 500ms 850ms backwards;
}

#main > :nth-child(35) {
  animation: fade-from-left 500ms 875ms backwards;
}

#main > :nth-child(36) {
  animation: fade-from-left 500ms 900ms backwards;
}

#main > :nth-child(37) {
  animation: fade-from-left 500ms 925ms backwards;
}

#main > :nth-child(38) {
  animation: fade-from-left 500ms 950ms backwards;
}

#main > :nth-child(39) {
  animation: fade-from-left 500ms 975ms backwards;
}

#main > :nth-child(40) {
  animation: fade-from-left 500ms 1000ms backwards;
}

#main > :nth-child(41) {
  animation: fade-from-left 500ms 1025ms backwards;
}

#main > :nth-child(42) {
  animation: fade-from-left 500ms 1050ms backwards;
}

#main > :nth-child(43) {
  animation: fade-from-left 500ms 1075ms backwards;
}

#main > :nth-child(44) {
  animation: fade-from-left 500ms 1100ms backwards;
}

#main > :nth-child(45) {
  animation: fade-from-left 500ms 1125ms backwards;
}

#main > :nth-child(46) {
  animation: fade-from-left 500ms 1150ms backwards;
}</style>

        <title>TCN</title></head>

    <body>${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        user: data.user,
        api_user: data.api_user,
        dark: data.dark
      },
      {
        dark: ($$value) => {
          data.dark = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
        <div id="${"slot"}" class="${"svelte-s87ey5"}">${slots.default ? slots.default({}) : ``}</div></body>
</html>`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-7a30279a.js.map
