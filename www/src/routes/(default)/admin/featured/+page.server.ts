import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../db.js";

export const load: ServerLoad = async () => {
    return { announcements: fix(await DB.Announcements.get()) };
};
