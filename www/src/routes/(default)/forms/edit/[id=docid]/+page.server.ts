import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../../db.js";

export const load: ServerLoad = async ({ locals, params }) => {
    if (!locals.user) return {};
    if (params.id === "new") return { id: "new" };

    const form = await DB.Forms.get(params.id!);
    if (!form || form.deleted) return { missing: true, id: params.id };

    if (
        form.author !== locals.user.id &&
        !(form.editable_observers && locals.observer) &&
        !(form.editable_council && locals.council)
    )
        return { unauthorized: true };

    return { form: fix(form), id: params.id };
};
