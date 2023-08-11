import bot from "../../../../core/bot.js";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
    try {
        return new Response((await bot.users.fetch(params.id!)).tag);
    } catch {
        return new Response("", { status: 404 });
    }
};
