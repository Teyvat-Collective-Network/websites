import type { RequestHandler } from "@sveltejs/kit";
import { marked } from "marked";
import { DB } from "../../../db.js";
import type { Announcement } from "$lib/types.js";
import sanitize from "$lib/sanitize.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = locals.api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    const announcements = (await request.json()) as Announcement[];

    for (const item of announcements) {
        try {
            item.parsed = sanitize(marked.parse(item.body));
        } catch (error) {
            console.error(error);
            return new Response(null, { status: 500 });
        }
    }

    await DB.Announcements.set(announcements);
    return new Response();
};
