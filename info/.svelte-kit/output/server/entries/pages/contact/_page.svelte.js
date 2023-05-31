import { c as create_ssr_component, v as validate_component, o as is_promise, n as noop, e as escape, l as each } from "../../../chunks/index2.js";
import { o as onMount } from "../../../chunks/ssr.js";
import { C as Callout } from "../../../chunks/Callout.js";
import { I as Invite } from "../../../chunks/Invite.js";
import { L as Linkable } from "../../../chunks/Linkable.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><div id="${"main"}"><h1>Contact us</h1>${validate_component(Linkable, "Linkable").$$render($$result, { id: "hub", e: "h2", value: "TCN Hub" }, {}, {})}<p>Join the TCN Hub to contact observers and other server staff and ask questions or give feedback about the TCN!</p><br>${validate_component(Invite, "Invite").$$render(
    $$result,
    {
      banner: "https://i.imgur.com/DXyVcRR.png",
      icon: "/favicon.png",
      title: "TCN Hub",
      code: "FG2wpbywSx"
    },
    {},
    {}
  )}${validate_component(Linkable, "Linkable").$$render(
    $$result,
    {
      id: "observers",
      e: "h2",
      value: "Observers"
    },
    {},
    {}
  )}<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `<p>Loading observers...</p>`;
    }
    return function(_) {
      return `${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return `<p>Loading observers...</p>`;
        }
        return function(response) {
          return `${function(__value3) {
            if (is_promise(__value3)) {
              __value3.then(null, noop);
              return `<p>Loading observers...</p>`;
            }
            return function([observers, error]) {
              return `${error ? `${validate_component(Callout, "Callout").$$render($$result, { style: "red" }, {}, {
                default: () => {
                  return `<p>${escape(error)}</p>`;
                }
              })}` : ``}${observers ? `<ul>${each(observers, (observer) => {
                return `<li><a href="${"https://discord.com/users/" + escape(observer.id, true)}">${escape(observer.tag)}</a> - <code>${escape(observer.id)}</code></li>`;
              })}</ul>` : ``}`;
            }(__value3);
          }(response.json())}`;
        }(__value2);
      }(fetch("/api/observers"))}`;
    }();
  }(new Promise((r) => onMount()))}</div></div></div>`;
});
export {
  Page as default
};
