import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => {
    return { entries: fix(await db.election_history.find().toArray()) };
};
