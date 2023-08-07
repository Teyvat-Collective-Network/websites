import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../../db.js";

export const load: ServerLoad = async ({ locals, params, url }) => {
    if (!locals.user) return {};

    const form = await DB.Forms.get(params.id!);
    if (!form || (form.deleted && !locals.observer)) return { missing: true, id: params.id };

    if (
        form.author !== locals.user.id &&
        !(form.editable_observers && locals.observer) &&
        !(form.editable_council && locals.council)
    )
        return { unauthorized: true };

    return {
        form: fix(form),
        submissions: fix(await DB.Forms.get_submissions(params.id!)),
        id: params.id,
        sid: url.searchParams.get("sub"),
    };
};
