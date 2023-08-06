import type { ServerLoad } from "@sveltejs/kit";
import { fix, markdown_postprocess } from "$lib/util.js";
import { DB } from "../../../db.js";

export const load: ServerLoad = async ({ locals }) => {
    return {
        announcements: fix(await DB.Announcements.get()).map((item) => ({
            ...item,
            parsed: markdown_postprocess(item.parsed, (locals as any).user),
        })),
    };
};
