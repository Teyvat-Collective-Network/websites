import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../../db.js";

export const load: ServerLoad = async ({ locals, params, url }) => {
    if (!(locals as any).user) return {};

    const form = await DB.Forms.get(params.id!);
    if (!form || (form.deleted && !(locals as any).observer))
        return { missing: true, id: params.id };

    if (
        form.author !== (locals as any).user.id &&
        !(form.editable_observers && (locals as any).observer) &&
        !(form.editable_council && (locals as any).council)
    )
        return { unauthorized: true };

    return {
        form: fix(form),
        submissions: fix(await DB.Forms.get_submissions(params.id!)),
        id: params.id,
        sid: url.searchParams.get("sub"),
    };
};
