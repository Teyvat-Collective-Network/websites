import { P as PUBLIC_TCN_API } from "../../../chunks/public.js";
const load = async () => {
  const request = await fetch(`${PUBLIC_TCN_API}/guilds`);
  if (!request.ok)
    return [];
  const partners = await request.json();
  partners.sort((a, b) => a.name.localeCompare(b.name));
  return { partners };
};
export {
  load
};
