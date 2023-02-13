import { aborted } from "../../abort.js";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
    const session = url.searchParams.get("session");
    if (!session) return new Response(null, { status: 400 });

    aborted.add(session);
    setTimeout(() => aborted.delete(session), 30000);

    return new Response(null, { status: 204 });
};
