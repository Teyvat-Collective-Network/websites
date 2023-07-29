import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    await db.membership_changes.deleteMany();

    const entries = await request.json();
    entries.sort((x: any, y: any) => x.year - y.year || x.month - y.month || x.date - y.date);
    if (entries.length > 0) await db.membership_changes.insertMany(entries);

    return new Response();
};
