import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../../db.js";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { marked } from "marked";

export const POST: RequestHandler = async ({ params, request, locals }) => {
    const doc = (await request.json()).doc;
    let id = params.id;

    const data = id !== "new" ? await db.docs.findOne({ id }) : null;

    try {
        if (!(locals as any).council)
            throw "You are not authorized to use the TCN Documents feature.";
        if (id !== "new") {
            if (!data || data.deleted) throw "This document no longer exists.";
            else if (
                data.author !== (locals as any).user.id &&
                !(data.editable_observers && (locals as any).observer) &&
                !(data.editable_council && (locals as any).council)
            )
                throw "You are not authorized to edit this document.";

            if (data.author !== (locals as any).user.id) {
                delete doc.allow_council;
                delete doc.allow_logged_in;
                delete doc.editable_observers;
                delete doc.editable_council;
                delete doc.allow_everyone;
                delete doc.allowlist;
            }
        }
        if (!(locals as any).observer) doc.official = false;
        if (!doc.name) throw "No name provided.";
        if (doc.name.length > 100) throw "Name cannot exceed 100 characters.";
        if (doc.embed_color && !doc.embed_color.match(/^[0-9a-f]{6}$/i))
            throw "Embed color must be a 6-digit hex number.";

        doc.embed_title ||= doc.allow_everyone ? doc.name : "TCN Document";
        doc.embed_body ||= doc.allow_everyone
            ? doc.anon
                ? ""
                : `Author: ${(locals as any).user.username}${
                      (locals as any).user.discriminator === "0"
                          ? ""
                          : `#${(locals as any).user.discriminator}`
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
                if (!(await db.docs.findOne({ id }))) break;
            }
        }

        try {
            const window: any = new JSDOM("").window;
            doc.parsed = DOMPurify(window).sanitize(marked.parse(doc.content));
        } catch (error) {
            console.error(error);
            throw "An error occurred parsing your document's markdown.";
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ error }));
    }

    await db.docs.findOneAndUpdate(
        { id },
        { $set: { ...doc, author: (locals as any).user.id } },
        { upsert: true },
    );

    return new Response(JSON.stringify({ id }));
};
