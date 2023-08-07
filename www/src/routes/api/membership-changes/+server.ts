import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";
import type { MembershipChange } from "$lib/types.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = locals.api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    const entries = (await request.json()) as MembershipChange[];
    entries.sort((x, y) => x.year - y.year || x.month - y.month || x.date - y.date);

    await DB.HistoricalRecords.set_membership_changes(entries);
    return new Response();
};
