import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../db.js";

export const load: ServerLoad = async () => {
    const data = await DB.InternalData.get();

    data.guild_map = fix(data.guild_map);
    data.user_map = fix(data.user_map);
    data.elements = fix(data.elements);
    data.weapons = fix(data.weapons);
    data.regions = fix(data.regions);
    data.characters = fix(data.characters);

    return data;
};
