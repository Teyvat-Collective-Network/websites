import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix, markdown_postprocess } from "$lib/util.js";

export const load: ServerLoad = async ({ params, locals }) => {
    const { id } = params;
    const form = await db.forms.findOne({ id });

    if (!form || (form.deleted && !(locals as any).observer))
        return {
            missing: true,
            id,
            form: {
                embed_title: "Missing Form",
                embed_body: "This form either does not exist or was deleted.",
                embed_color: "f35b5b",
                id,
            },
        };

    const min = {
        embed_title: form.embed_title,
        embed_body: form.embed_body,
        embed_color: form.embed_color,
        id: form.id,
        embed_image: form.embed_image,
        thumbnail: form.thumbnail,
    };

    const reader = (locals as any).user;

    if (
        form.allow_everyone ||
        (locals as any).observer ||
        reader?.id === form.author ||
        ((locals as any).council && form.allow_council) ||
        (reader && (form.allow_logged_in || form.allowlist.match(new RegExp(`\b${reader.id}\b`))))
    ) {
        for (const page of form.pages) {
            page.description = markdown_postprocess(page.parsed_description, reader);

            for (const question of page.questions) {
                question.description = markdown_postprocess(question.parsed_description, reader);
            }
        }

        return { form: fix(form) };
    }

    return { unauthorized: true, form: min };
};
