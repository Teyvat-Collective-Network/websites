import type { RequestHandler } from "@sveltejs/kit";
import { results } from "../../(default)/admin/observation-schedule/+page.svelte";
import { DB } from "../../../db.js";
import type { ObservationRecord } from "$lib/types.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    if (!locals.observer) return new Response(null, { status: 403 });

    const entries = (await request.json()) as ObservationRecord[];

    for (const entry of entries) {
        if (
            (results[entry.result] ?? ["", true, true])[2] &&
            entry.start_year != undefined &&
            entry.start_month != undefined &&
            entry.start_date != undefined &&
            (entry.end_year == undefined || entry.end_month == undefined || entry.end_date == undefined)
        ) {
            const normal_end = new Date(entry.start_year, entry.start_month - 1, entry.start_date + 28);

            entry.end_year = normal_end.getFullYear();
            entry.end_month = normal_end.getMonth() + 1;
            entry.end_date = normal_end.getDate();
        }
    }

    await DB.HistoricalRecords.set_observation_schedule(entries);

    return new Response();
};
