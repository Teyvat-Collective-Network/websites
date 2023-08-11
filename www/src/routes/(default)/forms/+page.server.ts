import { fix } from "$lib/util.js";
import type { ServerLoad } from "@sveltejs/kit";
import { DB } from "../../../db.js";

export const load: ServerLoad = async ({ locals }) => {
    if (!locals.user) return {};
    return { forms: fix(await DB.Forms.list(locals.user.id)) };
};
