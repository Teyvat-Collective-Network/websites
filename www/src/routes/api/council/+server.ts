import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../core/bot.js";
import { TCN } from "$lib/api.js";
import type { UserTagEntry } from "$lib/types.js";

export const GET: RequestHandler = async () => {
    const users: UserTagEntry[] = [];

    for (const user of await TCN.users())
        if (user.roles.includes("owner") || user.roles.includes("advisor"))
            try {
                users.push({ id: user.id, tag: (await bot.users.fetch(user.id)).tag });
            } catch {}

    return new Response(JSON.stringify(users));
};
