import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = locals.api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    await DB.HistoricalRecords.set_observer_terms(await request.json());
    return new Response();
};
