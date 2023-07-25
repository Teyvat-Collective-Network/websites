import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../db.js";

export const POST: RequestHandler = async ({ params, request, locals }) => {
    try {
        if (!(locals as any).auth) throw "You are not authorized to use the TCN Documents feature.";

        const data = await db.docs.findOne({ id: params.id });
        if (!data) throw "This document no longer exists.";
        if (data.author !== (locals as any).user.id)
            throw "You may only delete your own documents.";
    } catch (error: any) {
        return new Response(JSON.stringify({ error }));
    }

    await db.docs.findOneAndUpdate({ id: params.id }, { $set: { deleted: true } });
    return new Response(JSON.stringify({}));
};
