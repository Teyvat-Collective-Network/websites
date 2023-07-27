import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix } from "$lib/util.js";

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify(fix(await db.guild_map.find().toArray())));
};
