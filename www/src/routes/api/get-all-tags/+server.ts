import { hq_bot } from "../../../bot.js";
import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const GET: RequestHandler = async () => {
    return new Response(
        JSON.stringify([
            ...(await db.user_map.find().toArray()).map((entry: any) => ({
                id: entry.id,
                tag: entry.name,
                fake: true,
            })),
            ...hq_bot.users.cache.toJSON().map((x: any) => ({ id: x.id, tag: x.tag })),
        ]),
    );
};
