import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../core/bot.js";
import { DB } from "../../../db.js";
import { TOKEN } from "$env/static/private";
import { render } from "../../../bots/polls/utils/components.js";

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();
    if (data.token !== TOKEN) return new Response();

    const { id } = data;
    const poll = await DB.Polls.get(id);
    if (!poll) return new Response();

    const channel = await bot.channels.fetch(poll.channel);
    if (!channel?.isTextBased()) return new Response();

    const message = await channel.messages.fetch(poll.message);

    await message.edit(await render(poll));
    return new Response();
};
