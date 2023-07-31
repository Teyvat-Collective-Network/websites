import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async ({ locals, params, url }) => {
    if (!(locals as any).user) return {};

    const form = await db.forms.findOne({ id: params.id });
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
        submissions: fix(await db.form_submissions.find({ id: params.id }).toArray()),
        id: params.id,
        sid: url.searchParams.get("sub"),
    };
};
