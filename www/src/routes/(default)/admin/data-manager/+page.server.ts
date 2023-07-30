import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => {
    const cache: Record<string, any[]> = {};

    for (const key of ["guild_map", "user_map", "elements", "weapons", "regions", "characters"])
        cache[key] = fix(await db[key].find().toArray());

    return cache;
};
