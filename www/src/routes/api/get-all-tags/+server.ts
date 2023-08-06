import { hq_bot } from "../../../bot.js";
import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";
import type { UserTagEntry } from "$lib/types.js";

export const GET: RequestHandler = async () => {
    const has = new Set<string>();
    const cache: UserTagEntry[] = [];

    for (const user of await DB.InternalData.user_map()) {
        if (has.has(user.id)) continue;
        has.add(user.id);
        cache.push({ id: user.id, tag: user.name, fake: true });
    }

    for (const user of hq_bot.users.cache.toJSON()) {
        if (has.has(user.id)) continue;
        has.add(user.id);
        cache.push({ id: user.id, tag: user.tag });
    }

    return new Response(JSON.stringify(cache));
};
