import { hq_bot } from "../../../bot.js";
import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const GET: RequestHandler = async () => {
    const has = new Set<string>();
    const cache: { id: string; tag: string; fake?: boolean }[] = [];

    for (const user of await db.user_map.find().toArray()) {
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
