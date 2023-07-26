import { redirect, type RequestHandler } from "@sveltejs/kit";
import db from "../../../../../db.js";

export const GET: RequestHandler = async ({ params, locals }) => {
    if ((locals as any).observer)
        await db.docs.findOneAndUpdate({ id: params.id }, { $set: { official: false } });

    throw redirect(302, `/doc/${params.id}`);
};
