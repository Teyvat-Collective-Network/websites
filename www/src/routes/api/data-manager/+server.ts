import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    if (!locals.observer) return new Response(null, { status: 403 });
    await DB.InternalData.set(await request.json());
    return new Response();
};
