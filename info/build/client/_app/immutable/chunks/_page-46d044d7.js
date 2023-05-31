import { b as PUBLIC_TCN_API } from "./public-962e99ca.js";
const load = async () => {
  const request = await fetch(`${PUBLIC_TCN_API}/guilds`);
  if (!request.ok)
    return [];
  const partners = await request.json();
  partners.sort((a, b) => a.name.localeCompare(b.name));
  return { partners };
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _page as _,
  load as l
};
