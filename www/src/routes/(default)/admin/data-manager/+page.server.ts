import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => {
    return {
        guild_map: fix(await db.guild_map.find().toArray()),
        user_map: fix(await db.user_map.find().toArray()),
    };
};
