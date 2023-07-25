import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix } from "$lib/util.js";
import bot from "../../../bot.js";

export const load: ServerLoad = async ({ params, locals }) => {
    const { id } = params;
    const doc = await db.docs.findOne({ id });

    if (!doc || (doc.deleted && !(locals as any).observer))
        return {
            missing: true,
            id,
            doc: {
                embed_title: "Missing Document",
                embed_body: "This document either does not exist or was deleted.",
                embed_color: "f35b5b",
                id: doc.id,
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

    const reader = (locals as any).user;

    if (
        doc.allow_everyone ||
        (locals as any).observer ||
        reader?.id === doc.author ||
        ((locals as any).council && doc.allow_council) ||
        (reader && (doc.allow_logged_in || doc.allowlist.match(new RegExp(`\b${reader.id}\b`))))
    ) {
        if (doc.anon && reader?.id !== doc.author && !(locals as any).observer) delete doc.author;
        else
            try {
                const user = await bot.users.fetch(doc.author);
                doc.author = {
                    username: user.username,
                    discriminator: user.discriminator,
                    id: doc.author,
                };
            } catch {
                doc.author = { missing: true, id: doc.author };
            }

        let match: RegExpMatchArray, regex: RegExp;

        regex = /\[@(\d+)\]/;
        while ((match = doc.parsed.match(regex)))
            doc.parsed = doc.parsed.replace(
                regex,
                `<span class="mention user" data-id=${match[1]}><i class="material-icons">pending</i> &nbsp; Loading User...</span>`,
            );

        regex = /\[(\d*)&amp;((\\]|[^\]])+)\]/;
        while ((match = doc.parsed.match(regex)))
            doc.parsed = doc.parsed.replace(
                regex,
                `<span class="mention"${
                    match[1] ? ` data-id="${match[1]}"` : ""
                }><i class="material-icons">group</i> &nbsp; ${match[2]}</span>`,
            );

        regex = /\[(\d+\/\d+(\/\d+)?)?([tavfsc]?)#((\\]|[^\]])+)\]/;
        while ((match = doc.parsed.match(regex)))
            doc.parsed = doc.parsed.replace(
                regex,
                `${
                    match[1]
                        ? `<a href="https://discord.com/channels/${match[1]}" target="_blank" rel="noreferrer">`
                        : ""
                }<span class="mention"><i class="material-icons">${
                    {
                        t: "tag",
                        a: "campaign",
                        v: "volume_up",
                        f: "forum",
                        s: "podcasts",
                        c: "folder",
                    }[match[3] || "t"]
                }</i>&nbsp;${match[4]}</span>${match[1] ? "</a>" : ""}`,
            );

        regex = /\[:(\d+)\]/;
        while ((match = doc.parsed.match(regex)))
            doc.parsed = doc.parsed.replace(
                regex,
                `<span class="mention" data-id="${match[1]}"><i class="material-icons">schedule</i> &nbsp; <span class="time" data-timestamp="${match[1]}" /></span>`,
            );

        regex = /\[:(\d+\-\d+\-\d+)\]/;
        while ((match = doc.parsed.match(regex)))
            doc.parsed = doc.parsed.replace(
                regex,
                `<span class="mention"><i class="material-icons">schedule</i> &nbsp; ${match[1]}</span>`,
            );

        doc.parsed = doc.parsed.replace(
            /\[reader\]/g,
            `<span class="mention"${reader ? ` data-id="${reader.id}"` : ""}>${
                reader
                    ? `<i class="material-icons">alternate_email</i> <b>${reader.username}</b>${
                          reader.discriminator === "0" ? "" : `#${reader.discriminator}`
                      }`
                    : "<i class='material-icons'>account_circle</i> &nbsp; anonymous reader"
            }</span>`,
        );

        return { doc: fix(doc) };
    }

    return { unauthorized: true, doc: min };
};
