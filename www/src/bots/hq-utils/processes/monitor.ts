import { TCN } from "$lib/api.js";
import type { MonitorAlert } from "$lib/types.js";
import type { User } from "discord.js";
import bot from "../../../core/bot.js";
import { channels, hq } from "../../../core/resources.js";
import { DB } from "../../../db.js";
import { MONITOR_DELAY } from "$env/static/private";

export default async function monitor() {
    const alerts: MonitorAlert[] = [];

    const guilds = await TCN.guilds();

    for (const guild of guilds)
        try {
            const invite = await bot.fetchInvite(guild.invite);
            if (invite.guild?.id !== guild.id) throw 0;
        } catch {
            alerts.push({ key: "invite", id: guild.id, item: guild });
        }

    const expected = new Set<string>();

    guilds.forEach(({ owner, advisor }) => [owner && expected.add(owner), advisor && expected.add(advisor)]);

    for (const [, member] of await hq.members.fetch())
        if (!member.user.bot && !expected.has(member.id)) {
            try {
                const user = await TCN.user(member.id);
                if (!user.roles.includes("guest")) throw 0;
            } catch {
                alerts.push({ key: "unauthorized", id: member.id, item: member });
            }
        }

    const rep: Record<string, { user: User; positions: string[] }> = {};

    for (const guild of guilds) {
        if (!guild.owner) alerts.push({ key: "missing-owner", id: guild.id, item: guild });
        if (!guild.voter) alerts.push({ key: "missing-voter", id: guild.id, item: guild });
        if (guild.voter !== guild.owner && guild.voter !== guild.advisor)
            alerts.push({ key: "invalid-voter", id: guild.id, item: guild });

        for (const [id, role] of [
            [guild.owner, "server owner"],
            [guild.advisor, "council advisor"],
        ] as const)
            if (id) {
                try {
                    if (!rep[id]) {
                        const user = await bot.users.fetch(id);
                        rep[id] = { user, positions: [] };
                    }

                    rep[id].positions.push(`${guild.name} (\`${guild.id}\`) ${role}`);
                } catch {}

                try {
                    await hq.members.fetch(id);
                } catch {
                    try {
                        const user = await bot.users.fetch(id);
                        alerts.push({ key: "missing", id, item: { guild, user, role } });
                    } catch {
                        alerts.push({ key: "invalid-id", id, item: { guild, id, role } });
                    }
                }
            }
    }

    for (const id of Object.keys(rep))
        if (rep[id].positions.length > 1) alerts.push({ key: "duplicate", id, item: rep[id] });

    const lines = [];

    for (const { key, id, item } of alerts)
        if (await DB.Alerts.check(key, id)) {
            switch (key) {
                case "invite":
                    lines.push(
                        `- invalid invite / invite points elsewhere for ${item.name} (\`${item.id}\`): https://discord.gg/${item.invite}`,
                    );
                    break;
                case "unauthorized":
                    lines.push(`- member in the server is not in the council or a guest: ${item} (\`${item.id}\`)`);
                    break;
                case "missing-owner":
                    lines.push(`- ${item.name} (\`${item.id}\`) is missing a server owner`);
                    break;
                case "missing-voter":
                    lines.push(`- ${item.name} (\`${item.id}\`) is missing a voter`);
                    break;
                case "invalid-voter":
                    lines.push(`- voter for ${item.name} (\`${item.id}\`) is neither its owner nor its advisor`);
                    break;
                case "missing":
                    lines.push(
                        `- ${item.role} for ${item.guild.name} is missing from the server: ${item.user} (\`${item.user.id}\`)`,
                    );
                    break;
                case "invalid-id":
                    lines.push(`- ${item.role} for ${item.guild.name} corresponds to an invalid ID: \`${item.id}\``);
                    break;
                case "duplicate":
                    lines.push(
                        `- ${item.user} (\`${item.user.id}\`) has multiple council positions: ${item.positions.join(
                            ", ",
                        )}`,
                    );
                    break;
            }
        }

    if (lines.length === 0) return;

    let texts = ["Server/API issues or discrepancies detected:"];

    for (const line of lines) {
        if (texts.at(-1)!.length + line.length + 1 <= 2000) texts[texts.length - 1] += `\n${line}`;
        else texts.push(line);
    }

    for (const text of texts) await channels.exec.send({ content: text, allowedMentions: { parse: [] } });

    setTimeout(monitor, +MONITOR_DELAY);
}
