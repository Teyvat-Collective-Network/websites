import { e as escape } from "../../../chunks/index2.js";
import { a as aborted } from "../../../chunks/abort.js";
import { b as bot } from "../../../chunks/bot.js";
const POST = async ({ request, url }) => {
  const session = url.searchParams.get("session");
  aborted.delete(session);
  if (!session)
    return new Response('{"error":"Missing Session"}', { status: 400 });
  const seen = /* @__PURE__ */ new Set();
  const tags = [];
  for (const id of await request.json()) {
    if (seen.has(id))
      continue;
    seen.add(id);
    if (aborted.has(session))
      return new Response('{"error":"Aborted"}', { status: 400 });
    try {
      tags.push([(await bot.users.fetch(id)).tag, id]);
    } catch {
      return new Response(
        JSON.stringify({
          error: `Invalid ID: <code>${escape(
            id
          )}</code> did not correspond to a valid user.`
        })
      );
    }
  }
  return new Response(JSON.stringify(tags));
};
export {
  POST
};
