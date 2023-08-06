import { redirect, type RequestHandler } from "@sveltejs/kit";
import { DB } from "../../../../../db.js";

export const GET: RequestHandler = async ({ params, locals }) => {
    if ((locals as any).observer) await DB.Docs.demote(params.id!);

    throw redirect(302, `/doc/${params.id}`);
};
