import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../../db.js";

export const POST: RequestHandler = async ({ params, locals }) => {
    try {
        if (!(locals as any).council) throw "You are not authorized to use the TCN Forms feature.";

        const data = await db.forms.findOne({ id: params.id });
        if (!data) throw "This form no longer exists.";
        if (data.author !== (locals as any).user.id && !data.observer)
            throw "You may only delete your own forms unless you are an observer.";
    } catch (error: any) {
        return new Response(JSON.stringify({ error }));
    }

    await db.forms.findOneAndUpdate(
        { id: params.id },
        { $set: { deleted: true, deleter: (locals as any).user.id } },
    );
    return new Response(JSON.stringify({}));
};
