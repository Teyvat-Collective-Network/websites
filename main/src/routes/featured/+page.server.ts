import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import db from "../../db.js";

export const load: ServerLoad = async () => {
    return { announcements: fix(await db.announcements.find().toArray()) };
};
