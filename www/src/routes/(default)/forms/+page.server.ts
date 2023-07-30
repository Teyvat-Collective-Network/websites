import { fix } from "$lib/util.js";
import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";

export const load: ServerLoad = async ({ locals }) => {
    if (!(locals as any).user) return {};
    return {
        forms: fix(
            await db.forms
                .find({ author: (locals as any).user.id, deleted: { $ne: true } })
                .toArray(),
        ),
    };
};
