import { PUBLIC_TCN_API } from "$env/static/public";
import { vote_bot } from "../../../bot.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    const data = { id: params.id };

    const request = await fetch(`${PUBLIC_TCN_API}/users/${params.id}`);
    if (request.ok) data.api = await request.json();

    try {
        const user = await vote_bot.users.fetch(params.id);
        data.discord = {
            tag: user.discriminator === "0" ? `@${user.username}` : user.tag,
        };
    } catch {}

    return data;
};
