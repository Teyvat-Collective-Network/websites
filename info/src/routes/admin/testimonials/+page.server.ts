import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix } from "../../../lib/util.js";

export const load: ServerLoad = async ({ locals }) => {
    if (!(locals as any).user) return { noaccess: true };
    return { testimonials: fix(await db.testimonials.find().toArray()) };
};
