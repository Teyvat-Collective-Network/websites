import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../db.js";
import { results } from "../../(default)/admin/observation-schedule/+page.svelte";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    await db.observation_schedule.deleteMany();

    const entries = await request.json();

    for (const entry of entries) {
        if (
            (results[entry.result] ?? ["", true, true])[2] &&
            entry.start_year != undefined &&
            entry.start_month != undefined &&
            entry.start_date != undefined &&
            (entry.end_year == undefined ||
                entry.end_month == undefined ||
                entry.end_date == undefined)
        ) {
            const normal_end = new Date(
                entry.start_year,
                entry.start_month - 1,
                entry.start_date + 28,
            );

            entry.end_year = normal_end.getFullYear();
            entry.end_month = normal_end.getMonth() + 1;
            entry.end_date = normal_end.getDate();
        }
    }

    if (entries.length > 0) await db.observation_schedule.insertMany(entries);

    return new Response();
};
