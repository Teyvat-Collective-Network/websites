import type { Banshare, BanshareSettings } from "$lib/types.js";
import type { APIGuildMember, Guild, GuildMember, Message, User } from "discord.js";
import autoban from "./autoban.js";
import bot from "../../../core/bot.js";
import { PUBLIC_DDL_API } from "$env/static/public";
import { DDL_TOKEN } from "$env/static/private";
import { DB } from "../../../db.js";

export default async function (
    banshare: Banshare,
    settings: BanshareSettings | null,
    guild: Guild,
    message: Message,
    executor?: GuildMember | APIGuildMember,
) {
    const mod = executor ? { mod: executor.user!.id } : {};

    const missed: string[] = [];
    const banned: User[] = [];
    const failed: User[] = [];
    const skipped: User[] = [];

    for (const id of banshare.id_list as string[]) {
        let member: GuildMember | null = null;
        let user: User;

        try {
            if ((executor || settings?.autoban_member) && banshare.severity !== "dm")
                try {
                    member = await guild.members.fetch(id);
                } catch {}

            if (member) {
                user = member.user;

                if (settings?.autoban_member && !autoban(settings.autoban_member, banshare.severity)) {
                    skipped.push(user);
                    continue;
                }
            } else user = await bot.users.fetch(id);
        } catch {
            missed.push(id);
            continue;
        }

        try {
            if (
                executor &&
                member &&
                (Array.isArray(executor.roles) ? executor.roles : executor.roles.cache.toJSON().map((x) => x.id)).every(
                    (role: string) => member!.roles.highest.comparePositionTo(role) >= 0,
                )
            )
                throw 0;

            await guild.bans.create(id, { reason: "TCN Banshare: " + banshare.reason });

            banned.push(user);

            if (settings?.daedalus) {
                try {
                    const response = await fetch(`${PUBLIC_DDL_API}/moderation/history/${guild.id}/user/${id}`, {
                        method: "post",
                        headers: {
                            Authorization: `Bearer ${DDL_TOKEN}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            type: "ban",
                            duration: 0,
                            origin: message.url,
                            reason: "TCN Banshare: " + banshare.reason,
                            ...mod,
                        }),
                    });

                    if (!response.ok) console.error("[DAEDALUS API]", response.status, await response.json());
                } catch (error) {
                    console.error("[DAEDALUS API FETCH]", error);
                }
            }
        } catch (error) {
            console.error("[BAN USER]", error);
            failed.push(user);
        }
    }

    const channel_id = await DB.BanshareSettings.get_log(guild.id);

    if (channel_id) {
        try {
            const channel = await bot.channels.fetch(channel_id);
            if (!channel?.isTextBased()) throw 0;

            const prefix = `Banshare Executed; banned ${banned.length} user${
                banned.length === 1 ? "" : "s"
            }.\nOrigin: ${message.url}\nReason: ${banshare.reason}`;

            try {
                await channel.send(
                    `${prefix}\nSuccess: ${banned.join(", ") || "(none)"}\nFailed: ${
                        failed.join(", ") || "(none)"
                    }\nSkipped: ${skipped.join(", ") || "(none)"}\nInvalid IDs: ${missed.join(", ") || "(none)"}`,
                );
            } catch {
                await channel.send({
                    content: prefix,
                    files: [
                        {
                            attachment: Buffer.from(
                                `Success: ${banned.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"}\nFailed: ${
                                    failed.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"
                                }\nSkipped: ${
                                    skipped.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"
                                }\nInvalid IDs: ${missed.join(", ") || "(none)"}`,
                                "utf-8",
                            ),
                            name: "banshare.txt",
                        },
                    ],
                });
            }
        } catch {}
    }
}
