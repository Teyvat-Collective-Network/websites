import { fail, type Actions } from "@sveltejs/kit";
import { escape } from "svelte/internal";
import bot from "../../../core/bot.js";
import { create_gist } from "../../../gists.js";
import { escapeMarkdown } from "discord.js";
import type { BanshareFormData, TCNUser } from "$lib/types.js";
import { TCN } from "$lib/api.js";
import { DB } from "../../../db.js";
import { controls } from "../../../bots/banshare-bot/utils/components.js";
import sync_dashboard from "../../../bots/banshare-bot/processes/sync_dashboard.js";
import { channels, roles } from "../../../core/resources.js";
import { tag } from "$lib/util.js";

function compare(a: string, b: string): number {
    if (!a.match(/^\d+$/))
        if (!b.match(/^\d+$/)) return a.localeCompare(b);
        else return -1;
    else if (!b.match(/^\d+$/)) return 1;

    const diff = BigInt(a) - BigInt(b);
    return diff > 0 ? 1 : diff < 0 ? -1 : 0;
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData();
        const user = locals.user;

        if (!user) return fail(500, { error: "Not Authenticated" });

        const ids = (data.get("ids") as string).trim();
        const reason = (data.get("reason") as string).trim();
        const evidence = (data.get("evidence") as string).trim();
        const server = data.get("server") as string;
        const severity = data.get("severity") as string;
        const urgent = data.has("urgent");

        const action = (data.get("submit") as string) ?? "Submit";

        const values: BanshareFormData = {
            ids,
            reason,
            evidence,
            server,
            severity,
            urgent,
        };

        const abort = (code: number, message: string) =>
            fail(code, {
                error: message,
                ...values,
            });

        if (ids.length === 0) return abort(400, "You must enter at least one user to banshare.");

        if (!reason) return abort(400, "You must enter a non-empty reason.");
        if (!evidence) return abort(400, "You must enter some evidence.");
        if (!server) return abort(400, "You must select the server.");
        if (!severity) return abort(400, "You must select the severity.");

        if (!severity.match(/^p[0-2]|dm$/)) return abort(400, "Invalid severity selection.");

        if (reason.length > 498) return abort(400, "Maximum reason length is 498.");

        if (evidence.length > 1200)
            return abort(
                400,
                "Maximum evidence length is 1200. If you need more space, please create and link a document and include some basic information about it in the evidence field.",
            );

        let api_user: TCNUser;

        try {
            api_user = await TCN.user(user.id);
        } catch {
            return abort(
                400,
                "You do not appear to be a staff member of any TCN servers. Contact your server owner or a TCN observer if you believe this is a mistake.",
            );
        }

        if (!api_user.guilds.includes(server))
            return abort(400, "You are not a staff member on the server you selected.");

        const server_name = (await TCN.guild(server)).name;

        if (!bot.user)
            return abort(500, "Banshare bot is not ready to handle your request yet. Please wait for a few seconds.");

        let id_list: string[] = [];
        const tags: string[] = [];

        let ids_output: string = ids;

        if (action === "Submit" || action === "Submit Without Validation") {
            id_list = [...new Set(ids.trim().split(/\s+/))].sort(compare);

            for (const id of id_list)
                if (!id.match(/^[1-9][0-9]{16,19}$/))
                    return abort(400, `Invalid ID: <code>${escape(id)}</code> is not a valid Discord ID.`);

            if (action === "Submit")
                for (const id of id_list)
                    try {
                        tags.push((await bot.users.fetch(id)).tag);
                    } catch {
                        return abort(400, `Invalid ID: <code>${escape(id)}</code> did not correspond to a valid user.`);
                    }

            ids_output = id_list.join(" ");
        }

        const format = (ids: string, tags: string) => ({
            embeds: [
                {
                    title: "**Banshare**",
                    color: 0x2b2d31,
                    fields: [
                        { name: "ID(s)", value: ids },
                        ...(tags.length > 0 ? [{ name: "Username(s)", value: tags }] : []),
                        { name: "Reason", value: reason },
                        { name: "Evidence", value: evidence },
                        { name: "Submitted by", value: `${tag(user)} (\`${user.id}\`) from ${server_name}` },
                        { name: "Severity", value: severity[0].toUpperCase() + severity.slice(1) },
                    ],
                },
            ],
        });

        let send_data = format(id_list.join(" "), escapeMarkdown(tags.join(" ")));

        if (
            send_data.embeds[0].title.length +
                send_data.embeds[0].fields
                    .map((field) => field.name.length + field.value.length)
                    .reduce((x, y) => x + y) >
                6000 ||
            send_data.embeds[0].fields.some((field) => field.value.length > 1024)
        ) {
            const iso = new Date().toISOString();

            try {
                send_data = format(
                    `<${await create_gist(`banshare-ids-${iso}`, `IDs for the banshare on ${iso}`, ids_output)}>`,
                    "",
                );
            } catch {
                return abort(500, "Uploading your ID list / user tag list as a gist failed.");
            }
        }

        const post = await channels.banshare_main.send({ ...send_data, components: controls(false, severity) });

        await DB.Banshares.submit({
            message: post.id,
            url: post.url,
            user: user.id,
            server,
            id_list,
            reason,
            evidence,
            severity,
            urgent,
        });

        try {
            await channels.exec.send(
                `${(urgent ? roles.urgent : roles.non_urgent) ?? ""} A banshare was just posted in ${
                    channels.banshare_main
                } for review${
                    urgent ? " (**urgent**)" : ""
                }. If you wish to alter the severity, use the buttons below the banshare **before** publishing.`,
            );
        } catch {}

        try {
            await sync_dashboard();
        } catch {}

        return { success: true };
    },
};
