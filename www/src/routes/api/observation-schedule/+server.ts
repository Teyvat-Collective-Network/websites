import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../db.js";
import type { ObservationRecord } from "$lib/types.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    if (!locals.observer) return new Response(null, { status: 403 });

    const entries = (await request.json()) as ObservationRecord[];
    entries.forEach((x) => ((x.start &&= new Date(x.start)), (x.end &&= new Date(x.end))));

    await DB.HistoricalRecords.set_observation_schedule(entries);
    return new Response();
};
