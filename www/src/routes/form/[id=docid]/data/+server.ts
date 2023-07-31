import type { RequestHandler } from "@sveltejs/kit";
import { load } from "../+page.server.js";
import { load_data } from "../base.js";

export const GET: RequestHandler = async ({ params, locals }) => {
    return new Response(JSON.stringify(await load_data({ params, locals })));
};
