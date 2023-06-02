import type { ServerLoad } from "@sveltejs/kit";
import db from "../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async () => ({
    testimonials: fix(await db.testimonials.find().toArray()),
});
