import type { ServerLoad } from "@sveltejs/kit";
import { fix, markdown_postprocess } from "$lib/util.js";
import bot from "../../../bot.js";
import { DB } from "../../../db.js";

export const load: ServerLoad = async ({ params, locals }) => {
    const id = params.id!;
    const doc = await DB.Docs.get(id);

    if (!doc || (doc.deleted && !locals.observer))
        return {
            missing: true,
            id,
            doc: {
                embed_title: "Missing Document",
                embed_body: "This document either does not exist or was deleted.",
                embed_color: "f35b5b",
                id,
            },
        };

    const min = {
        embed_title: doc.embed_title,
        embed_body: doc.embed_body,
        embed_color: doc.embed_color,
        id: doc.id,
        embed_image: doc.embed_image,
        thumbnail: doc.thumbnail,
    };

    const reader = locals.user;

    if (
        doc.allow_everyone ||
        locals.observer ||
        reader?.id === doc.author ||
        (locals.council && doc.allow_council) ||
        (reader && (doc.allow_logged_in || doc.allowlist.match(new RegExp(`\b${reader.id}\b`))))
    ) {
        if (doc.anon && reader?.id !== doc.author && !locals.observer) delete doc.author;
        else
            try {
                const user = await bot.users.fetch(doc.author as string);
                doc.author_data = {
                    username: user.username,
                    discriminator: user.discriminator,
                    id: doc.author as string,
                };
            } catch {
                doc.author_data = { missing: true, id: doc.author as string };
            }

        doc.parsed = markdown_postprocess(doc.parsed!, reader);

        return { doc: fix(doc) };
    }

    return { unauthorized: true, doc: min };
};
