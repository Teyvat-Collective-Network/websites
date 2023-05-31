import { P as PUBLIC_TCN_API } from './public-a46e145d.js';

const load = async () => {
  const request = await fetch(`${PUBLIC_TCN_API}/guilds`);
  if (!request.ok)
    return [];
  const partners = await request.json();
  partners.sort((a, b) => a.name.localeCompare(b.name));
  return { partners };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 32;
const component = async () => (await import('./_page.svelte-bef343f6.js')).default;
const file = '_app/immutable/components/pages/partners/_page.svelte-28155196.js';
const imports = ["_app/immutable/components/pages/partners/_page.svelte-28155196.js","_app/immutable/chunks/index-c4baf36c.js","_app/immutable/modules/pages/partners/_page.ts-2315fc69.js","_app/immutable/chunks/public-962e99ca.js","_app/immutable/chunks/_page-46d044d7.js"];
const stylesheets = ["_app/immutable/assets/_page-097ab7a6.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=32-8542f181.js.map
