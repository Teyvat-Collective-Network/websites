import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../../db.js";

export const load: ServerLoad = async ({ locals }) => {
    if ((locals as any).council)
        return { entries: fix(await DB.HistoricalRecords.get_observation_schedule()) };
};
