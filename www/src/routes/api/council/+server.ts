import type { RequestHandler } from "@sveltejs/kit";
import { hq_bot } from "../../../bot.js";
import { TCN } from "$lib/api.js";

export const GET: RequestHandler = async () => {
    const users: { id: string; tag: string }[] = [];

    for (const user of await TCN.users())
        if (user.roles.includes("owner") || user.roles.includes("advisor"))
            try {
                users.push({ id: user.id, tag: (await hq_bot.users.fetch(user.id)).tag });
            } catch {}

    return new Response(JSON.stringify(users));
};
