import type { RequestHandler } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../db.js";

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify(fix(await DB.InternalData.guild_map())));
};
