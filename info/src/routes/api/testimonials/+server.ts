import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    await db.testimonials.deleteMany();
    await db.testimonials.insertMany(await request.json());

    return new Response();
};
