import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => {
    return { events: fix((await db.events.find().toArray()).map(({ events }) => events)) };
};
