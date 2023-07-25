import type { ServerLoad } from "@sveltejs/kit";
import db from "../../../db.js";
import { fix } from "$lib/util.js";
import bot from "../../../bot.js";

export const load: ServerLoad = async ({ params, locals }) => {
    const { id } = params;
    const doc = await db.docs.findOne({ id });
    if (!doc || (doc.deleted && !(locals as any).observer)) return { missing: true, id };

    const reader = (locals as any).user;

    if (
        doc.allow_everyone ||
        (locals as any).observer ||
        reader?.id === doc.author ||
        ((locals as any).council && doc.allow_council) ||
        (reader && doc.allow_logged_in) ||
        doc.allowlist.match(new RegExp(`\b${reader.id}\b`))
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
        while ((match = doc.parsed.match(regex))) {
            let inner: string;

            try {
                const user = await bot.users.fetch(match[1]);
                inner = `<i class="material-icons">alternate_email</i> <b>${user.username}</b>${
                    user.discriminator === "0" ? "" : `#${user.discriminator}`
                }`;
            } catch {
                inner = `<i class="material-icons">pin</i> &nbsp; ${match[1]}`;
            }

            doc.parsed = doc.parsed.replace(
                regex,
                `<span class="mention" data-id="${match[1]}">${inner}</span>`,
            );
        }

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

    return { unauthorized: true };
};
