import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    const data = await request.json();

    await db.guild_map.deleteMany();
    if (data.guild_map.length > 0) await db.guild_map.insertMany(data.guild_map);

    await db.user_map.deleteMany();
    if (data.user_map.length > 0) await db.user_map.insertMany(data.user_map);

    return new Response();
};
