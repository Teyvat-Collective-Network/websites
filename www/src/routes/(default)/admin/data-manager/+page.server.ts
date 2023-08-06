import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../db.js";
import type { InternalData } from "$lib/types.js";

export const load: ServerLoad = async () => {
    const data = await DB.InternalData.get();
    for (const key of Object.keys(data) as (keyof InternalData)[]) data[key] = fix(data[key]);
    return data;
};
