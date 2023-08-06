import { VOTE_BOT_TOKEN } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { hq_bot } from "../../../bot.js";
import { render } from "$lib/polls.js";
import { DB } from "../../../db.js";

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    if (data.token !== VOTE_BOT_TOKEN) return new Response();

    const { id } = data;
    const poll = await DB.Polls.get(id);
    if (!poll) return new Response();

    const channel = await hq_bot.channels.fetch(poll.channel);
    if (!channel?.isTextBased()) return new Response();

    const message = await channel.messages.fetch(poll.message);

    await message.edit(await render(poll));
    return new Response();
};
