import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { marked } from "marked";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    const items = await request.json();

    const purify = DOMPurify(new JSDOM("").window as any);

    for (const item of items) {
        try {
            item.parsed = purify.sanitize(marked.parse(item.body));
        } catch (error) {
            console.error(error);
            return new Response(null, { status: 500 });
        }
    }

    await db.announcements.deleteMany();

    if (items.length > 0) await db.announcements.insertMany(items);

    return new Response();
};
