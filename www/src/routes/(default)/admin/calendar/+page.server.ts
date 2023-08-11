import type { ServerLoad } from "@sveltejs/kit";
import { DB } from "../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => ({ events: fix(await DB.Events.get_event_matrix()) });
