import { c as create_ssr_component, f as subscribe, e as escape, g as getContext } from './index2-4b0ff9cf.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"container"}"><div id="${"main"}"><h1><b>${escape($page.status)}</b> ${escape($page.error?.message)}</h1>
        <p><a href="${"/"}">&lt; Return to Home Page</a></p>
        ${$page.status === 404 ? `<p>If you arrived at this page from a link on this website, please report it as an
                error to HyperNeutrino#1759. Otherwise, please check the spelling of the URL
                (including capitalization) and try again.
            </p>` : ``}</div></div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-82d2395e.js.map
