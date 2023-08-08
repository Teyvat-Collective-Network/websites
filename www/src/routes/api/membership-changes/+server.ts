import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";
import type { MembershipChange } from "$lib/types.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    if (!locals.observer) return new Response(null, { status: 403 });

    const entries = (await request.json()) as MembershipChange[];

    entries.forEach((x) => (x.date = new Date(x.date)));
    entries.sort((x, y) => x.date.getTime() - y.date.getTime());

    await DB.HistoricalRecords.set_membership_changes(entries);
    return new Response();
};
