import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../db.js";

export const load: ServerLoad = async ({ locals }) => ({
    events: fix(await DB.Events.get_event_matrix()),
    ...locals,
});
