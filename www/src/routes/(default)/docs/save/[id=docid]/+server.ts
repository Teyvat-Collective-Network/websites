import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../../db.js";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { marked } from "marked";

export const POST: RequestHandler = async ({ params, request, locals }) => {
    const doc = (await request.json()).doc;
    let id = params.id;

    try {
        if (!(locals as any).auth) throw "You are not authorized to use the TCN Documents feature.";
        if (!doc.name) throw "No name provided.";
        if (doc.name.length > 100) throw "Name cannot exceed 100 characters.";
        if (doc.embed_color && !doc.embed_color.match(/^[0-9a-f]{6}$/i))
            throw "Embed color must be a 6-digit hex number.";

        doc.embed_title ||= doc.anon ? "TCN Document" : doc.name;
        doc.embed_body ||= doc.anon
            ? "Sign in to view this document."
            : `${(locals as any).user.username}${
                  (locals as any).user.discriminator === "0"
                      ? ""
                      : `#${(locals as any).user.discriminator}`
              }`;
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
        } else {
            const data = await db.docs.findOne({ id });
            if (!data) throw "This document no longer exists.";
            if (data.author !== (locals as any).user.id)
                throw "You may only edit your own documents.";
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
