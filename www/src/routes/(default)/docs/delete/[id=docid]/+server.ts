import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../../../db.js";

export const POST: RequestHandler = async ({ params, locals }) => {
    try {
        if (!(locals as any).council)
            throw "You are not authorized to use the TCN Documents feature.";

        const data = await DB.Docs.get(params.id!);
        if (!data) throw "This document no longer exists.";
        if (data.author !== (locals as any).user.id && !data.observer)
            throw "You may only delete your own documents unless you are an observer.";
    } catch (error: any) {
        return new Response(JSON.stringify({ error }));
    }

    await DB.Docs.del(params.id!, locals.user.id);
    return new Response(JSON.stringify({}));
};
