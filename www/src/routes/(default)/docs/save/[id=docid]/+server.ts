import type { RequestHandler } from "@sveltejs/kit";
import { marked } from "marked";
import { DB } from "../../../../../db.js";
import type { Doc } from "$lib/types.js";
import sanitize from "$lib/sanitize.js";

export const POST: RequestHandler = async ({ params, request, locals }) => {
    const doc = (await request.json()).doc as Partial<Doc>;
    let id = params.id!;

    const data = id !== "new" ? await DB.Docs.get(id) : null;

    try {
        if (!locals.council) throw "You are not authorized to use the TCN Documents feature.";
        if (id !== "new") {
            if (!data || data.deleted) throw "This document no longer exists.";
            else if (
                data.author !== locals.user.id &&
                !(data.editable_observers && locals.observer) &&
                !(data.editable_council && locals.council)
            )
                throw "You are not authorized to edit this document.";

            if (data.author !== locals.user.id) {
                delete doc.allow_council;
                delete doc.allow_logged_in;
                delete doc.editable_observers;
                delete doc.editable_council;
                delete doc.allow_everyone;
                delete doc.allowlist;
            }
        }
        if (!locals.observer) doc.official = false;
        if (!doc.name) throw "No name provided.";
        if (doc.name.length > 100) throw "Name cannot exceed 100 characters.";
        if (doc.embed_color && !doc.embed_color.match(/^[0-9a-f]{6}$/i))
            throw "Embed color must be a 6-digit hex number.";

        doc.embed_title ||= doc.allow_everyone ? doc.name : "TCN Document";
        doc.embed_body ||= doc.allow_everyone
            ? doc.anon
                ? ""
                : `Author: ${locals.user.username}${
                      locals.user.discriminator === "0" ? "" : `#${locals.user.discriminator}`
                  }`
            : "Sign in to view this document.";
        doc.embed_color ||= "2b2d31";

        if (id === "new") {
            while (true) {
                id = new Array(32)
                    .fill(0)
                    .map(
                        (x) =>
                            "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 36)],
                    )
                    .join("");
                if (!(await DB.Docs.get(id))) break;
            }
        }

        try {
            doc.parsed = sanitize(marked.parse(doc.content!));
        } catch (error) {
            console.error(error);
            throw "An error occurred parsing your document's markdown.";
        }
    } catch (error) {
        return new Response(JSON.stringify({ error }));
    }

    await DB.Docs.save(id, { ...doc, author: locals.user.id });
    return new Response(JSON.stringify({ id }));
};
