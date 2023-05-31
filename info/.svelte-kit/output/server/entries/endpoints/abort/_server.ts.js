import { a as aborted } from "../../../chunks/abort.js";
const GET = async ({ url }) => {
  const session = url.searchParams.get("session");
  if (!session)
    return new Response(null, { status: 400 });
  aborted.add(session);
  setTimeout(() => aborted.delete(session), 3e4);
  return new Response(null, { status: 204 });
};
export {
  GET
};
