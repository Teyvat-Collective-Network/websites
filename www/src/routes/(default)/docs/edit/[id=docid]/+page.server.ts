import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../../../db.js";
import { fix } from "$lib/util.js";

export const load: ServerLoad = async ({ locals, params }) => {
    if (!(locals as any).user) return {};
    if (params.id === "new") return { id: "new" };

    const doc = await db.docs.findOne({ id: params.id });
    if (!doc || doc.deleted) return { missing: true, id: params.id };

    if (
        doc.author !== (locals as any).user.id &&
        !(doc.editable_observers && (locals as any).observer) &&
        !(doc.editable_council && (locals as any).council)
    )
        return { unauthorized: true };

    return { doc: fix(doc), id: params.id };
};
