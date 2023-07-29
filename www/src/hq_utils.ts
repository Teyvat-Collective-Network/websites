import {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    Guild,
    InteractionType,
    type Channel,
    ChannelType,
    Colors,
    ThreadAutoArchiveDuration,
} from "discord.js";
import { hq_bot } from "./bot.js";
import { PUBLIC_DOMAIN, PUBLIC_HQ, PUBLIC_TCN_API } from "$env/static/public";
import {
    ALERT,
    ELECTION_FORUM,
    LANDING,
    LOG,
    MONITOR_DELAY,
    NOMINATING_TAG,
    VOTE_BOT_TOKEN,
} from "$env/static/private";
import { bar, characters } from "./lib/data.js";
import db from "./db.js";

const api = async (route: string) => await (await fetch(`${PUBLIC_TCN_API}${route}`)).json();
let hq: Guild;

async function sweep_invites() {
    let channel: Channel | null = null;

    try {
        channel = await hq_bot.channels.fetch(LOG);
    } catch {}

    for (const [, invite] of hq.invites.cache) {
        if (invite.uses && invite.uses > 0) {
            try {
                if (channel?.isTextBased())
                    await channel.send(
                        `Deleting invite with code ${invite.code} (${
                            invite.inviter ?? "unknown creator"
                        }) since it has been used.`,
                    );

                await invite.delete();
            } catch {}
        }
    }
}

async function monitor() {
    const alerts: [string, string, any][] = [];

    const guilds = await api(`/guilds`);

    for (const guild of guilds)
        try {
            const invite = await hq_bot.fetchInvite(guild.invite);
            if (invite.guild?.id !== guild.id) throw 0;
        } catch {
            alerts.push(["invite", guild.id, guild]);
        }

    const expected = new Set<string>();

    guilds.forEach(({ owner, advisor }: any) => [
        owner && expected.add(owner),
        advisor && expected.add(advisor),
    ]);

    for (const [, member] of await hq.members.fetch())
        if (!member.user.bot && !expected.has(member.id)) {
            try {
                const user = await api(`/users/${member.id}`);
                if (!user.roles.includes("guest")) throw 0;
            } catch {
                alerts.push(["unauthorized", member.id, member]);
            }
        }

    const rep: Record<string, { user: any; positions: string[] }> = {};

    for (const guild of guilds) {
        if (!guild.owner) alerts.push(["missing-owner", guild.id, guild]);
        if (!guild.voter) alerts.push(["missing-voter", guild.id, guild]);
        if (guild.voter !== guild.owner && guild.voter !== guild.advisor)
            alerts.push(["invalid-voter", guild.id, guild]);

        for (const [id, role] of [
            [guild.owner, "server owner"],
            [guild.advisor, "council advisor"],
        ])
            if (id) {
                try {
                    if (!rep[id]) {
                        const user = await hq_bot.users.fetch(id);
                        rep[id] = { user, positions: [] };
                    }

                    rep[id].positions.push(`${guild.name} (\`${guild.id}\`) ${role}`);
                } catch {}

                try {
                    await hq.members.fetch(id);
                } catch {
                    try {
                        const user = await hq_bot.users.fetch(id);
                        alerts.push(["missing", id, { guild, user, role }]);
                    } catch {
                        alerts.push(["invalid-id", id, { guild, id, role }]);
                    }
                }
            }
    }

    for (const id of Object.keys(rep))
        if (rep[id].positions.length > 1) alerts.push(["duplicate", id, rep[id]]);

    const lines = [];
    const now = new Date().getTime();
    const thresh = now - 86400000;

    for (const [key, id, item] of alerts)
        if (!(await db.alerts.findOne({ key, id, time: { $gt: thresh } }))) {
            await db.alerts.findOneAndUpdate(
                { key, id },
                { $set: { time: now } },
                { upsert: true },
            );

            switch (key) {
                case "invite":
                    lines.push(
                        `- invalid invite / invite points elsewhere for ${item.name} (\`${item.id}\`): https://discord.gg/${item.invite}`,
                    );
                    break;
                case "unauthorized":
                    lines.push(
                        `- member in the server is not in the council or a guest: ${item} (\`${item.id}\`)`,
                    );
                    break;
                case "missing-owner":
                    lines.push(`- ${item.name} (\`${item.id}\`) is missing a server owner`);
                    break;
                case "missing-voter":
                    lines.push(`- ${item.name} (\`${item.id}\`) is missing a voter`);
                    break;
                case "invalid-voter":
                    lines.push(
                        `- voter for ${item.name} (\`${item.id}\`) is neither its owner nor its advisor`,
                    );
                    break;
                case "missing":
                    lines.push(
                        `- ${item.role} for ${item.guild.name} is missing from the server: ${item.user} (\`${item.user.id}\`)`,
                    );
                    break;
                case "invalid-id":
                    lines.push(
                        `- ${item.role} for ${item.guild.name} corresponds to an invalid ID: \`${item.id}\``,
                    );
                    break;
                case "duplicate":
                    lines.push(
                        `- ${item.user} (\`${
                            item.user.id
                        }\`) has multiple council positions: ${item.positions.join(", ")}`,
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

    const alert = await hq_bot.channels.fetch(ALERT);

    if (alert?.isTextBased())
        for (const text of texts)
            await alert.send({ content: text, allowedMentions: { parse: [] } });

    setTimeout(monitor, +MONITOR_DELAY);
}

hq_bot.once("ready", async () => {
    hq = await hq_bot.guilds.fetch(PUBLIC_HQ);

    sweep_invites();
    monitor();

    await hq_bot.application!.commands.set([
        {
            type: ApplicationCommandType.ChatInput,
            name: "partner-list",
            description: "generate the long-form partner list",
            defaultMemberPermissions: "0",
        },
        {
            type: ApplicationCommandType.ChatInput,
            name: "election",
            description: "start an election thread",
            defaultMemberPermissions: "0",
            options: [
                {
                    type: ApplicationCommandOptionType.Integer,
                    name: "wave",
                    description: "the wave/ID of the election",
                    required: true,
                    minValue: 1,
                },
                {
                    type: ApplicationCommandOptionType.Integer,
                    name: "seats",
                    description: "the number of seats",
                    required: true,
                    minValue: 1,
                },
                {
                    type: ApplicationCommandOptionType.String,
                    name: "short-reason",
                    description: "the short reason (goes in forum post)",
                    required: true,
                },
                {
                    type: ApplicationCommandOptionType.String,
                    name: "long-reason",
                    description: "the long reason (goes in follow-up message)",
                    required: true,
                },
                {
                    type: ApplicationCommandOptionType.Number,
                    name: "nomination-window",
                    description: "the nomination window in days (default: 7)",
                    required: false,
                    minValue: 7,
                },
                {
                    type: ApplicationCommandOptionType.Number,
                    name: "voting-window",
                    description: "the scheduled window for voting in days (default: 2)",
                    required: false,
                    minValue: 2,
                },
            ],
        },
        {
            type: ApplicationCommandType.ChatInput,
            name: "invite",
            description: "generate a one-week one-use invite",
            defaultMemberPermissions: "0",
        },
    ]);

    console.log("[HQ BOT] ready!");
});

hq_bot.on("interactionCreate", async (interaction) => {
    if (
        interaction.type === InteractionType.ApplicationCommand &&
        interaction.commandType === ApplicationCommandType.ChatInput
    ) {
        if (interaction.commandName === "partner-list") {
            await interaction.reply({
                content: "Generating, please be patient...",
                ephemeral: true,
            });

            const guilds = await api("/guilds");
            guilds.sort((x: any, y: any) => x.name.localeCompare(y.name));

            while (guilds.length > 0) {
                await interaction.channel!.send({
                    embeds: await Promise.all(
                        guilds.splice(0, 10).map(async (guild: any) =>
                            ((owner, advisor) => ({
                                title: guild.name,
                                description: `${characters[guild.character].join(
                                    " ",
                                )}\n\n**Owner:** ${owner} (${
                                    owner.discriminator === "0" ? owner.username : owner.tag
                                })${
                                    advisor
                                        ? `\n**Advisor:** ${advisor} (${
                                              advisor.discriminator === "0"
                                                  ? advisor.username
                                                  : advisor.tag
                                          })`
                                        : ""
                                }`,
                                color: 0x2b2d31,
                                thumbnail: {
                                    url: `${PUBLIC_DOMAIN}/images/characters/${guild.character}.png`,
                                },
                                ...bar,
                                footer: { text: guild.id },
                            }))(
                                await hq_bot.users.fetch(guild.owner),
                                guild.advisor && (await hq_bot.users.fetch(guild.advisor)),
                            ),
                        ),
                    ),
                });
            }

            await interaction.followUp({ content: "Done!", ephemeral: true });
        } else if (interaction.commandName === "election") {
            const wave = interaction.options.getInteger("wave", true);
            const seats = interaction.options.getInteger("seats", true);

            const short_reason = interaction.options.getString("short-reason", true);

            const long_reason = interaction.options.getString("long-reason", true);

            const nom_window = interaction.options.getNumber("nomination-window", false) ?? 7;
            const vote_window = interaction.options.getNumber("voting-window", false) ?? 2;

            const forum = await hq_bot.channels.fetch(ELECTION_FORUM);

            if (forum?.type !== ChannelType.GuildForum) {
                await interaction.reply({
                    embeds: [
                        {
                            title: "Error",
                            description:
                                "ELECTION_FORUM environment variable does not point to a forum channel!",
                            color: Colors.Red,
                        },
                    ],
                    ephemeral: true,
                });

                return;
            }

            await interaction.deferReply({ ephemeral: true });

            const now_ = new Date();
            const mid_ = new Date();
            const end_ = new Date();

            mid_.setDate(mid_.getDate() + nom_window);
            end_.setDate(end_.getDate() + nom_window + vote_window);

            const now = Math.floor(now_.getTime() / 1000);
            const mid = Math.floor(mid_.getTime() / 1000);
            const end = Math.floor(end_.getTime() / 1000);

            const channel = await forum.threads.create({
                name: `Wave ${wave} Election`,
                autoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
                message: {
                    content: `## Election Information

**Wave**: ${wave}
**Reason**: ${short_reason}
**Seats**: ${seats}
**Window**: Nominations and statements scheduled for <t:${now}:F> - <t:${mid}:F>, voting scheduled for <t:${mid}:F> - <t:${end}:F>`,
                    allowedMentions: { parse: [] },
                },
            });

            await channel.send(`<@&804177768837283900> <@&804186763424825376>

Another wave of elections is upon us! ${long_reason}

Please nominate people who you would like to be candidates for the upcoming election. Only one nomination is needed for someone to run for a position, so please avoid repeating nominations and feel free to add reactions to others' nominations if you agree with their choices.

Additionally, you are welcome to nominate yourself.

Nominations and statements will be open for one week (until <t:${mid}:F>). If you are nominated, please respond here indicating whether or not you are accepting, and if you accept the nomination, please post your statement here. There is no template or list of requirements, but you may want to include a basic introduction of yourself, campaign promises, defining qualities/traits, etc.

**Important:** To discuss anything related to the election that is not a nomination, statement, or nomination response, please use the pinned discussion post (<#1081829781139623976>).

Thanks!`);

            await channel.setAppliedTags([NOMINATING_TAG]);

            await interaction.editReply(`${channel}`);
        } else if (interaction.commandName === "invite") {
            const invite = await interaction.guild!.invites.create(LANDING, {
                maxAge: 604800,
                maxUses: 1,
            });

            await interaction.reply({ content: invite.url, ephemeral: true });

            const channel = await hq_bot.channels.fetch(LOG);
            if (!channel?.isTextBased()) return;

            await channel.send({
                content: `${interaction.user} created a one-week one-use invite using \`/invite\``,
                allowedMentions: { parse: [] },
            });
        }
    }
});

hq_bot.on("inviteCreate", async (invite) => {
    if (invite.inviterId === null || invite.inviterId === hq_bot.user!.id) return;

    const channel = await hq_bot.channels.fetch(LOG);
    if (!channel?.isTextBased()) return;

    await channel.send({
        content: `${invite.inviter} created an invite (max age: ${
            invite.maxAge ? `${invite.maxAge} seconds` : "infinite"
        }, max uses: ${invite.maxUses || "unlimited"})`,
        allowedMentions: { parse: [] },
    });
});

hq_bot.on("guildMemberAdd", async (member) => {
    if (member.guild.id === PUBLIC_HQ) sweep_invites();
});

await hq_bot.login(VOTE_BOT_TOKEN);
