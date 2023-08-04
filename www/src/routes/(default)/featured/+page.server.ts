import type { ServerLoad } from "@sveltejs/kit";
import { fix, markdown_postprocess } from "$lib/util.js";
import db from "../../../db.js";

export const load: ServerLoad = async ({ locals }) => {
    return {
        announcements: fix(await db.announcements.find().toArray()).map((item: any) => ({
            ...item,
            parsed: markdown_postprocess(item.parsed, (locals as any).user),
        })),
    };
};
