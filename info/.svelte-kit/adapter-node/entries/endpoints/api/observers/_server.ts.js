import { P as PUBLIC_TCN_API } from "../../../../chunks/public.js";
import { b as bot } from "../../../../chunks/bot.js";
const GET = async () => {
  const request = await fetch(`${PUBLIC_TCN_API}/users`);
  if (!request.ok)
    return new Response(
      '[null, "TCN API returned an error; contact an observer (you can find a list in the TCN Hub)."]'
    );
  const response = await request.json();
  const api_users = response.filter((user) => user.roles.includes("observer"));
  const users = [];
  let error = null;
  for (const api_user of api_users)
    try {
      const user = await bot.users.fetch(api_user.id);
      users.push({ id: user.id, tag: user.tag });
    } catch {
      error = "One or more observer IDs were found to be invalid!";
    }
  return new Response(JSON.stringify([users.sort((a, b) => a.tag.localeCompare(b.tag)), error]));
};
export {
  GET
};
