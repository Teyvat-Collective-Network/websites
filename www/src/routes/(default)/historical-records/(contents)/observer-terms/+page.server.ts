import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async ({ locals }) => {
    if ((locals as any).council) {
        return { entries: fix(await db.observer_terms.find().toArray()) };
    }
};
