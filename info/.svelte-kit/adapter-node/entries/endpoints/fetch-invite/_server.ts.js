import { b as bot } from "../../../chunks/bot.js";
const GET = async ({ url }) => {
  const code = url.searchParams.get("code");
  if (!code?.match(/^(?<code>[\w-]{2,255})$/i))
    return new Response(null, { status: 404 });
  try {
    const invite = await bot.fetchInvite(code);
    return new Response(
      JSON.stringify({ ...invite, expires: invite.expiresTimestamp, guild: invite.guild })
    );
  } catch {
    return new Response(null, { status: 404 });
  }
};
export {
  GET
};
