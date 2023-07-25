import { hq_bot } from "../../../../bot.js";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
    return new Response((await hq_bot.users.fetch(params.id!)).tag);
};
