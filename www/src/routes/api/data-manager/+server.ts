import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    const data = await request.json();

    for (const key of ["guild_map", "user_map", "elements", "weapons", "regions", "characters"]) {
        await db[key].deleteMany();
        if (data[key].length > 0) await db[key].insertMany(data[key]);
    }

    return new Response();
};
