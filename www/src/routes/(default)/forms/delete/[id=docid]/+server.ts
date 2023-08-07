import type { RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../../../db.js";

export const POST: RequestHandler = async ({ params, locals }) => {
    try {
        if (!locals.council) throw "You are not authorized to use the TCN Forms feature.";

        const data = await DB.Forms.get(params.id!);
        if (!data) throw "This form no longer exists.";
        if (data.author !== locals.user.id && !locals.observer)
            throw "You may only delete your own forms unless you are an observer.";
    } catch (error) {
        return new Response(JSON.stringify({ error }));
    }

    await DB.Forms.del(params.id!, locals.user.id);
    return new Response(JSON.stringify({}));
};
