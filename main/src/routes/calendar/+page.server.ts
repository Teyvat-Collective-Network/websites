import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import db from "../../db.js";

export const load: ServerLoad = async () => ({
    events: fix((await db.events.find().toArray()).map(({ events }) => events)),
});
