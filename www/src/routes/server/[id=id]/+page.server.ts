import { PUBLIC_TCN_API } from "$env/static/public";
import { hq_bot } from "../../../bot.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    const request = await fetch(`${PUBLIC_TCN_API}/guilds/${params.id}`);
    if (!request.ok) return { id: params.id, missing: true };

    const data = await request.json();

    try {
        const user = await hq_bot.users.fetch(data.owner);
        data.owner_tag = user.discriminator === "0" ? `@${user.username}` : user.tag;
    } catch {}

    if (data.advisor)
        try {
            const user = await hq_bot.users.fetch(data.advisor);
            data.advisor_tag = user.discriminator === "0" ? `@${user.username}` : user.tag;
        } catch {}

    return data;
};
