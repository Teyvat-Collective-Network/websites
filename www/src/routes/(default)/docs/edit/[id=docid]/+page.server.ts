import type { ServerLoad } from "@sveltejs/kit";
import { fix } from "$lib/util.js";
import { DB } from "../../../../../db.js";

export const load: ServerLoad = async ({ locals, params }) => {
    if (!locals.user) return {};
    if (params.id === "new") return { id: "new" };

    const doc = await DB.Docs.get(params.id!);
    if (!doc || doc.deleted) return { missing: true, id: params.id };

    if (
        doc.author !== locals.user.id &&
        !(doc.editable_observers && locals.observer) &&
        !(doc.editable_council && locals.council)
    )
        return { unauthorized: true };

    return { doc: fix(doc), id: params.id };
};
