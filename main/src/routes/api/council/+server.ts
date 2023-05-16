import { PUBLIC_TCN_API } from "$env/static/public";
import type { RequestHandler } from "@sveltejs/kit";
import { vote_bot } from "../../../bot.js";

export const GET: RequestHandler = async ({ fetch }) => {
    const request = await fetch(`${PUBLIC_TCN_API}/users`);
    const response = await request.json();

    const users = [];

    for (const user of response)
        if (user.roles.includes("owner") || user.roles.includes("advisor"))
            try {
                users.push({ id: user.id, tag: (await vote_bot.users.fetch(user.id)).tag });
            } catch {}

    return new Response(JSON.stringify(users));
};
