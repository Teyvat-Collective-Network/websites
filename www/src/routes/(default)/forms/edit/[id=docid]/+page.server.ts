import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async ({ locals, params }) => {
    if (!(locals as any).user) return {};
    if (params.id === "new") return { id: "new" };

    const form = await db.forms.findOne({ id: params.id });
    if (!form || form.deleted) return { missing: true, id: params.id };

    if (
        form.author !== (locals as any).user.id &&
        !(form.editable_observers && (locals as any).observer) &&
        !(form.editable_council && (locals as any).council)
    )
        return { unauthorized: true };

    return { form: fix(form), id: params.id };
};
