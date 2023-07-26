import { hq_bot } from "../../../bot.js";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const cache: Record<string, string> = {};
    return new Response(
        JSON.stringify(hq_bot.users.cache.toJSON().map((x: any) => ({ id: x.id, tag: x.tag }))),
    );
};
