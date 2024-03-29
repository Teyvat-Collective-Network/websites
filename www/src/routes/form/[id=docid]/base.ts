import { fix, markdown_postprocess } from "$lib/util.js";
import db from "../../../db.js";

export async function load_data({ params, locals }: any) {
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

    let access =
        form.allow_everyone ||
        reader?.id === form.author ||
        ((locals as any).observer && form.allow_observers) ||
        ((locals as any).council && form.allow_council) ||
        (reader && (form.allow_logged_in || form.allowlist.match(new RegExp(`\b${reader.id}\b`))));

    if (form.external && !form.allow_everyone && form.external_access) {
        try {
            const request = await fetch(`${form.external_url}/access?user=${reader.id}`);
            if (!request.ok) throw 0;

            const response = await request.json();
            if (!response) access = false;
        } catch {
            return {
                unauthorized: true,
                form: min,
                ext_fault:
                    "External access check failed; this is an issue with the form creator's API.",
            };
        }
    }

    if (access || (locals as any).observer) {
        for (const page of form.pages) {
            page.description = markdown_postprocess(page.parsed_description, reader);

            for (const question of page.questions) {
                question.description = markdown_postprocess(question.parsed_description, reader);
            }
        }

        return { form: fix(form), access };
    }

    return { unauthorized: true, form: min };
}
