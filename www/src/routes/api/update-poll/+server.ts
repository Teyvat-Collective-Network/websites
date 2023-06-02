import { VOTE_BOT_TOKEN } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { vote_bot } from "../../../bot.js";
import db from "../../../db.js";
import { render } from "$lib/polls.js";

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    if (data.token !== VOTE_BOT_TOKEN) return new Response();

    const { id } = data;
    const poll = await db.polls.findOne({ id });
    if (!poll) return new Response();

    const channel = await vote_bot.channels.fetch(poll.channel);
    if (!channel?.isTextBased()) return new Response();

    const message = await channel.messages.fetch(poll.message);

    await message.edit(await render(poll));
    return new Response();
};
