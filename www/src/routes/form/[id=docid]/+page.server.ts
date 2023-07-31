import type { ServerLoad } from "@sveltejs/kit";
import { load_data } from "./base.js";

export const load: ServerLoad = async ({ params, locals }) => {
    return await load_data({ params, locals });
};
