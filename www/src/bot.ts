import { ALERT, DDL_TOKEN, HQ, LOG, TOKEN, VOTE_BOT_TOKEN } from "$env/static/private";
import { PUBLIC_ALLOWLIST, PUBLIC_DDL_API, PUBLIC_TCN_API } from "$env/static/public";
import {
    type ButtonInteraction,
    ButtonStyle,
    Client,
    ComponentType,
    type Guild,
    IntentsBitField,
    type Message,
    type ModalSubmitInteraction,
    PermissionFlagsBits,
    type StringSelectMenuInteraction,
    TextInputStyle,
    type User,
    type StringSelectMenuComponentData,
    type APIEmbed,
    GuildMember,
    type APIGuildMember,
} from "discord.js";
import { banshares } from "./db.js";
import { components } from "./lib.js";

process.on("uncaughtException", (error) => console.error("[TOP-LEVEL]", error));

const bot = new Client({
    intents: IntentsBitField.Flags.Guilds | IntentsBitField.Flags.MessageContent,
});

export const vote_bot = new Client({
    intents: IntentsBitField.Flags.Guilds | IntentsBitField.Flags.GuildMembers,
});

await vote_bot.login(VOTE_BOT_TOKEN);

const finished = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                customId: "/",
                label: "Banshare Executed",
                disabled: true,
            },
        ],
    },
] as any;

const rescinded = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                customId: "/",
                label: "Banshare Rescinded",
                disabled: true,
            },
        ],
    },
] as any;

const report = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.StringSelect,
                customId: "report-preset",
                minValues: 1,
                maxValues: 3,
                options: [
                    "Appears unintended.",
                    "Targeted users are wrong.",
                    "Reason does not justify a banshare.",
                    "Evidence is insufficient.",
                    "Evidence is forged.",
                    "Severity should be increased.",
                ].map((text) => ({ label: text, value: text })),
                placeholder: "Report This Banshare",
            } satisfies StringSelectMenuComponentData,
        ],
    },
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Danger,
                customId: "report",
                label: "Report (Custom Reason)",
            },
        ],
    },
] as any;

const autoban_scheduled = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                customId: "-",
                label: "Auto-ban scheduled",
                disabled: true,
            },
        ],
    },
] as any;

const autobanning = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                customId: "/",
                label: "Auto-banning...",
                disabled: true,
            },
        ],
    },
] as any;

const published = new Set<string>();

bot.once("ready", async () => {
    console.log("[BOT] ready!");
});

bot.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (!["banshare", "banshare-publish"].includes(interaction.commandName)) return;

        if (interaction.commandName === "banshare-publish") {
            if (interaction.guild?.id !== HQ) {
                await interaction.reply({
                    content: "This command can only be called by observers in HQ.",
                    ephemeral: true,
                });

                return;
            }

            await interaction.showModal({
                title: "Post Message",
                customId: "banshare-publish",
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.TextInput,
                                style: TextInputStyle.Paragraph,
                                customId: "message",
                                label: "Message",
                                maxLength: 2000,
                                required: true,
                            },
                        ],
                    },
                ],
            });
        }

        await interaction.deferReply({ ephemeral: true });

        if (!interaction.inGuild()) return;
        if (!(await allowed(interaction.guild!))) {
            await interaction.editReply("This is not a TCN server.");
            return;
        }

        if (interaction.commandName === "banshare") {
            const subgroup = interaction.options.getSubcommandGroup(false);
            const subcommand = interaction.options.getSubcommand(false);

            if (subgroup === "post" || subgroup === "log") {
                const collection = subgroup === "post" ? banshares.channels : banshares.logging;

                if (subcommand === "here") {
                    if (
                        !interaction
                            .channel!.permissionsFor(interaction.guild!.members.me!)
                            .has(
                                PermissionFlagsBits.ViewChannel |
                                    PermissionFlagsBits.SendMessages |
                                    PermissionFlagsBits.EmbedLinks |
                                    PermissionFlagsBits.AttachFiles,
                            )
                    ) {
                        await interaction.editReply(
                            "Please grant the bot permission to view this channel and send messages, embed links, and attach files.",
                        );
                        return;
                    }

                    await collection.findOneAndUpdate(
                        { guild: interaction.guild!.id },
                        { $set: { channel: interaction.channel!.id } },
                        { upsert: true },
                    );

                    await interaction.editReply(
                        `${subgroup === "post" ? "Banshares" : "Logs"} will now be posted here.`,
                    );
                } else if (subcommand === "none") {
                    await collection.findOneAndDelete({
                        guild: interaction.guild!.id,
                    });

                    await interaction.editReply(
                        subgroup === "post"
                            ? "You will no longer receive banshares."
                            : "Logs will no longer be posted.",
                    );
                }
            } else if (!subgroup) {
                if (subcommand === "ban-button") {
                    const enable = interaction.options.getBoolean("enable", true);

                    await banshares.settings.findOneAndUpdate(
                        { guild: interaction.guild!.id },
                        { $set: { no_button: !enable } },
                        { upsert: true },
                    );

                    await interaction.editReply(
                        `${enable ? "Enabled" : "Disabled"} the ban button.`,
                    );
                } else if (subcommand === "daedalus-integration") {
                    const enable = interaction.options.getBoolean("enable", true);

                    await banshares.settings.findOneAndUpdate(
                        { guild: interaction.guild!.id },
                        { $set: { daedalus: enable } },
                        { upsert: true },
                    );

                    await interaction.editReply(
                        `${enable ? "Enabled" : "Disabled"} Daedalus integration.`,
                    );
                } else if (subcommand === "autoban") {
                    const non_member_threshold = interaction.options.getString(
                        "default-threshold",
                        true,
                    );
                    
                    const member_threshold = interaction.options.getString(
                        "member-threshold",
                        true,
                    );

                    const autoban_dm_scams = interaction.options.getBoolean("autoban-dm-scams", true);

                    await banshares.settings.findOneAndUpdate(
                        { guild: interaction.guild!.id },
                        {
                            $set: {
                                autoban: non_member_threshold,
                                autoban_member: member_threshold,
                                autoban_dm_scams,
                            },
                        },
                        { upsert: true },
                    );

                    const k = {
                        none: "none",
                        crit: "P0 only",
                        med: "P0 and P1",
                        all: "P0, P1, and P2",
                    } as { [key: string]: string };

                    await interaction.editReply(
                        `Set the autoban threshold to ${k[non_member_threshold]} (${k[member_threshold]} will apply to server members). DM scams will ${autoban_dm_scams ? "" : "not "}be automatically banned.`,
                    );
                } else if (subcommand === "receive-dm-scams") {
                    const enable = interaction.options.getBoolean("enable", true);

                    await banshares.settings.findOneAndUpdate(
                        { guild: interaction.guild!.id },
                        { $set: { suppress_dm_scams: !enable } },
                        { upsert: true },
                    );

                    await interaction.editReply(
                        `${enable ? "Enabled" : "Disabled"} scam DM banshares.`,
                    );
                }
            }
        }
    } else if (interaction.isButton()) {
        if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers)) return;
        else if (interaction.customId === "ban") {
            const banshare = await get_banshare(interaction, interaction.message.id);
            if (!banshare) return;

            await interaction.reply({
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.Button,
                                style: ButtonStyle.Secondary,
                                customId: "/",
                                label: "Fetching users...",
                                disabled: true,
                            },
                        ],
                    },
                ],
                ephemeral: true,
            });

            const users: User[] = [];

            for (const id of banshare.id_list as string[])
                try {
                    users.push(await bot.users.fetch(id));
                } catch {}

            try {
                await interaction.editReply({
                    content: users.join(", "),
                    components: confirm(false, "-ban"),
                });
            } catch {
                await interaction.editReply({
                    files: [
                        {
                            attachment: Buffer.from(
                                users.map((user) => `${user.tag} (${user.id})`).join(", "),
                                "utf-8",
                            ),
                            name: "user-list.txt",
                        },
                    ],
                    components: confirm(false, "-ban"),
                });
            }
        } else if (interaction.customId === "report") {
            if (!bot.channels.cache.has(ALERT)) {
                await interaction.reply({
                    content:
                        "The output channel does not appear to be set up correctly, so your report would not be able to be sent.",
                });

                return;
            }

            await interaction.showModal({
                title: "Report Banshare",
                customId: "confirm-report",
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.TextInput,
                                style: TextInputStyle.Paragraph,
                                customId: "reason",
                                label: "Reason",
                                placeholder:
                                    "Explain why you believe this banshare is problematic and should be rescinded.",
                                maxLength: 1800,
                                required: true,
                            },
                        ],
                    },
                ],
            });
        } else if (interaction.customId === "cancel-ban")
            await interaction.update({
                content: null,
                files: [],
                components: confirm(true, "-ban"),
            });
        else if (interaction.customId === "confirm-ban") {
            let message: Message;

            try {
                message = await interaction.message.fetchReference();
            } catch {
                await interaction.update({
                    content:
                        "The banshare being referred to has been deleted, so it cannot be executed.",
                    files: [],
                    components: [],
                });

                return;
            }

            const banshare = await get_banshare(
                interaction,
                interaction.message.reference?.messageId ?? "",
            );

            if (!banshare) return;

            const lock = await banshares.executed.findOneAndUpdate(
                { post: interaction.message.id },
                { $set: { executed: true } },
                { upsert: true },
            );

            if (lock.value?.executed) {
                await interaction.update({
                    content: "This banshare is already being executed by someone else.",
                    files: [],
                    components: [],
                });

                return;
            }

            await interaction.update({
                content: "Executing...",
                files: [],
                components: [],
            });

            await execute(
                banshare,
                await banshares.settings.findOne({ guild: interaction.guild!.id }),
                interaction.guild!,
                message,
                interaction.member!,
            );

            await interaction.editReply("Banshare executed!");
            await message.edit({ components: finished.concat(report) });
        } else if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) return;
        else if (interaction.customId.startsWith("sev:")) {
            const severity = interaction.customId.substring(4);

            await banshares.banshares.findOneAndUpdate(
                { message: interaction.message.id },
                { $set: { severity } },
            );

            await interaction.update({
                embeds: [
                    {
                        title: "**Banshare**",
                        color: 0x2b2d31,
                        fields: [
                            ...interaction.message.embeds[0].fields.slice(0, -1),
                            {
                                name: "Severity",
                                value: severity.toUpperCase(),
                            },
                        ],
                    },
                ],
                components: components(false, severity),
            });
        } else if (interaction.customId.startsWith("escalate:")) {
            const severity = interaction.customId.substring(9);

            const banshare = await banshares.banshares.findOne({ message: interaction.message.id });

            if (!banshare) {
                await interaction.update({
                    content: "This does not appear to be a banshare.",
                    embeds: [],
                    components: [],
                });

                return;
            }

            await interaction.showModal({
                title: "Escalate Banshare",
                customId: `confirm-escalation:${severity}`,
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.TextInput,
                                style: TextInputStyle.Paragraph,
                                customId: "reason",
                                label: "Reason",
                                placeholder: `You are about to escalate this banshare to ${severity} severity. This is not reversible!`,
                            },
                        ],
                    },
                ],
            });
        } else if (interaction.customId === "publish") {
            if (
                published.has(interaction.message.id) ||
                (await banshares.banshares.findOne({
                    message: interaction.message.id,
                    published: true,
                }))
            )
                await interaction.reply({
                    content: "This banshare has been published by someone else already.",
                    ephemeral: true,
                });
            else
                await interaction.reply({
                    components: confirm(),
                    ephemeral: true,
                });
        } else if (interaction.customId === "confirm") {
            await interaction.deferUpdate();
            let guilds: string[];

            try {
                const request = await fetch(`${PUBLIC_TCN_API}/guilds`);

                if (!request.ok) throw 0;

                guilds = (await request.json())
                    .map((server: { id: string }) => server.id)
                    .concat(PUBLIC_ALLOWLIST.split(/\s+/));
            } catch {
                await interaction.editReply("An unexpected issue occurred with the TCN API.");
                return;
            }

            const id = interaction.message.reference?.messageId ?? "";
            const fail = published.has(id);
            published.add(id);
            setTimeout(() => published.delete(id), 10000);

            const banshare = await banshares.banshares.findOneAndUpdate(
                { message: id },
                { $set: { published: true } },
            );

            if (!banshare.value)
                await interaction.editReply({
                    content: "This does not appear to be a banshare.",
                    embeds: [],
                    components: [],
                });
            else if (fail || banshare.value.executed)
                await interaction.editReply({
                    content: "This banshare has been published by someone else already.",
                    embeds: [],
                    components: [],
                });
            else {
                let embeds: APIEmbed[];

                try {
                    const message = await interaction.message.fetchReference();
                    await message.edit({ components: components(true, banshare.value.severity) });
                    embeds = message.embeds.map((e) => e.toJSON());
                } catch {
                    await interaction.editReply({
                        content: "The original banshare could not be found.",
                        components: [],
                    });

                    return;
                }

                await interaction.editReply({
                    content: "Banshare is being published! You may dismiss this message.",
                    components: [],
                });

                const channel = interaction.client.channels.cache.get(LOG ?? "");

                const log = channel?.isTextBased() ? channel.send.bind(channel) : () => {};

                await log({
                    content: `${interaction.user} published <${interaction.message.url}>.`,
                    allowedMentions: { parse: [] },
                });

                const places = (await banshares.channels.find().toArray())
                    .filter(
                        (entry) =>
                            (PUBLIC_ALLOWLIST && PUBLIC_ALLOWLIST.indexOf(entry.guild) !== -1) ||
                            guilds.includes(entry.guild),
                    )
                    .map((entry) => ({
                        guild: entry.guild,
                        channel: bot.channels.cache.get(entry.channel),
                    }))
                    .filter(({ channel }) => channel?.isTextBased());

                await Promise.all(
                    places.map(async ({ guild, channel }) => {
                        try {
                            if (!channel?.isTextBased()) return;

                            const settings = await banshares.settings.findOne({ guild });

                            if (settings?.suppress_dm_scams && banshare.value!.severity === "dm")
                                return;

                            const threshold = settings?.autoban ?? "none";

                            let components: any[] = [];

                            if (!banshare.value!.id_list?.length) {
                                // Submitted without checking IDs, so no automation is possible.
                            } else if (banshare.value!.severity === "dm" && settings?.autoban_dm_scams || autoban(threshold, banshare.value!.severity)) {
                                components = autoban_scheduled;
                            } else if (!settings?.no_button) {
                                components = [
                                    {
                                        type: ComponentType.ActionRow,
                                        components: [
                                            {
                                                type: ComponentType.Button,
                                                style: ButtonStyle.Danger,
                                                customId: "ban",
                                                label: "Ban",
                                            },
                                        ],
                                    },
                                ];
                            }

                            const post = await channel.send({
                                embeds,
                                components: components.concat(report),
                            });

                            await save(banshare, guild, post); 

                            if (!channel?.isTextBased()) return;

                            if (post.components?.[0]?.components?.[0]?.customId !== "-") return;

                            await post.edit({ components: autobanning.concat(report) });

                            await execute(
                                banshare.value,
                                await banshares.settings.findOne({ guild }),
                                post.guild!,
                                post,
                                undefined,
                            );

                            await post.edit({ components: finished.concat(report) });
                        } catch (error) {
                            console.error("[PUBLISH ERROR]", error);
                        }
                    })
                );
            }
        } else if (interaction.customId === "reject") {
            await interaction.reply({
                components: confirm(false, "-reject"),
                ephemeral: true,
            });
        } else if (interaction.customId === "confirm-reject") {
            const message = await interaction.message.fetchReference();

            const embed = message.embeds[0].toJSON();
            embed.fields = embed.fields.slice(0, -1);

            await message.edit({
                embeds: [embed],
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.Button,
                                style: ButtonStyle.Secondary,
                                customId: ".",
                                label: "REJECTED",
                                disabled: true,
                            },
                        ],
                    },
                ],
            });

            await interaction.update({
                content: "This banshare has been rejected.",
                components: [],
            });
        } else if (interaction.customId === "cancel-reject")
            await interaction.update({ components: confirm(true, "-reject") });
        else if (interaction.customId === "cancel") {
            await interaction.update({ components: confirm(true) });
        } else if (interaction.customId === "rescind") {
            await interaction.showModal({
                title: "Rescind Banshare",
                customId: "confirm-rescind",
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.TextInput,
                                style: TextInputStyle.Paragraph,
                                customId: "explanation",
                                label: "Explanation",
                                maxLength: 1800,
                                required: true,
                                placeholder:
                                    "Why is this banshare being rescinded and why was it published initially?",
                            },
                        ],
                    },
                ],
            });
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "confirm-rescind") {
            await interaction.deferReply({ ephemeral: true });

            const lock = await banshares.banshares.findOneAndUpdate(
                { message: interaction.message!.id },
                { $set: { rescinded: true } },
            );

            if (lock.value?.rescinded) {
                await interaction.editReply(
                    "This banshare is already being rescinded by someone else.",
                );

                return;
            }

            await interaction.message!.edit({
                components: rescinded,
            });

            await interaction.editReply(
                "This banshare is being rescinded. You may dismiss this message.",
            );

            const explanation =
                "This banshare has been rescinded by an observer. The explanation given is below:\n\n" +
                interaction.fields.getTextInputValue("explanation");

            await interaction.message!.reply(explanation);

            for (const post of await banshares.banshare_posts
                .find({ banshare: interaction.message!.id })
                .toArray()) {
                try {
                    const channel = await bot.channels.fetch(post.channel);
                    if (!channel?.isTextBased()) throw 0;

                    const message = await channel.messages.fetch(post.message);
                    await message.edit({ components: rescinded }).catch(() => {});
                    await message.reply(explanation);
                } catch {}
            }
        } else if (interaction.customId === "confirm-report") {
            await process_report(interaction, interaction.fields.getTextInputValue("reason"));
        } else if (interaction.customId.startsWith("confirm-escalation:")) {
            await interaction.deferUpdate();

            const severity = interaction.customId.substring(19);
            const reason = interaction.fields.getTextInputValue("reason");

            const value = severity[0].toUpperCase() + severity.slice(1);

            const banshare = await banshares.banshares.findOneAndUpdate(
                { message: interaction.message!.id },
                { $set: { severity } },
            );

            if (!banshare.value) {
                await interaction.editReply({
                    content: "This does not appear to be a banshare.",
                    embeds: [],
                    components: [],
                });

                return;
            }

            const posts = await banshares.banshare_posts
                .find({ banshare: interaction.message!.id })
                .toArray();

            await Promise.all(
                posts.map(async (post) => {
                    const settings = await banshares.settings.findOne({ guild: post.guild });
                    const threshold = settings?.autoban ?? "none";

                    try {
                        const channel = await bot.channels.fetch(post.channel);
                        if (!channel?.isTextBased()) throw 0;

                        const message = await channel.messages.fetch(post.message);

                        await message.reply(
                            `This banshare was escalated to ${severity} severity. The explanation given is below:\n\n${reason}`,
                        );

                        const embed = message.embeds[0].toJSON();

                        embed.fields?.forEach(
                            (field) => field.name === "Severity" && (field.value = value),
                        );

                        if (
                            autoban(threshold, severity) &&
                            !autoban(threshold, banshare.value!.severity)
                        ) {
                            await message.edit({
                                embeds: [embed],
                                components: autobanning.concat(report),
                            });

                            const lock = await banshares.executed.findOneAndUpdate(
                                { post: message.id },
                                { $set: { executed: true } },
                                { upsert: true },
                            );

                            if (!lock.value?.executed) {
                                await execute(banshare.value, settings, message.guild!, message);
                                await message.edit({ components: finished.concat(report) });
                            }
                        } else await message.edit({ embeds: [embed] });
                    } catch {}
                }),
            );

            const embed = interaction.message!.embeds[0].toJSON();
            embed.fields?.forEach((field) => field.name === "Severity" && (field.value = value));

            await interaction.editReply({
                embeds: [embed],
                components: components(true, severity),
            });

            const channel = interaction.client.channels.cache.get(LOG ?? "");

            const log = channel?.isTextBased() ? channel.send.bind(channel) : () => {};

            await log({
                content: `${interaction.user} escalated ${
                    interaction.message!.url
                } to ${severity} severity:\n\n${reason}`,
                allowedMentions: { parse: [] },
            });
        } else if (interaction.customId === "banshare-publish") {
            await interaction.deferUpdate();
            let guilds: string[];

            try {
                const request = await fetch(`${PUBLIC_TCN_API}/guilds`);

                if (!request.ok) throw 0;

                guilds = (await request.json())
                    .map((server: { id: string }) => server.id)
                    .concat(PUBLIC_ALLOWLIST.split(/\s+/));
            } catch {
                await interaction.editReply("An unexpected issue occurred with the TCN API.");

                return;
            }

            const message = interaction.fields.getTextInputValue("message");

            (await banshares.channels.find().toArray())
                .filter(
                    (entry) =>
                        (PUBLIC_ALLOWLIST && PUBLIC_ALLOWLIST.indexOf(entry.guild) !== -1) ||
                        guilds.includes(entry.guild),
                )
                .map((entry) => ({
                    guild: entry.guild,
                    channel: bot.channels.cache.get(entry.channel),
                }))
                .forEach(({ channel }) => channel?.isTextBased() && channel.send(message));
        }
    } else if (interaction.isStringSelectMenu()) {
        if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers)) return;

        if (interaction.customId === "report-preset") {
            await process_report(interaction, interaction.values.join(" "));
        }
    }
});

async function process_report(
    interaction: ModalSubmitInteraction | StringSelectMenuInteraction,
    reason: string,
) {
    await interaction.deferReply({ ephemeral: true });

    try {
        const entry = await banshares.banshare_posts.findOne({
            message: interaction.message!.id,
        });

        if (!entry) throw 0;

        const banshare = await banshares.banshares.findOne({
            message: entry.banshare,
        });

        if (!banshare) throw 0;

        const channel = await bot.channels.fetch(ALERT);
        if (!channel?.isTextBased()) throw 0;

        await channel.send({
            content: `${interaction.user} reported a banshare: <${banshare.url}>:\n\n${reason}`,
            allowedMentions: { parse: [] },
        });
    } catch {
        await interaction.editReply("Posting your report failed.");
        return;
    }

    await interaction.editReply(
        "Your report has been submitted and will be reviewed by the observers.",
    );
}

async function get_banshare(interaction: ButtonInteraction, message: string) {
    if (!(await allowed(interaction.guild!))) {
        await interaction.reply({
            content:
                "This server is not in the TCN. You can ban these users manually at your own judgement.",
            ephemeral: true,
        });

        return;
    }

    const post = await banshares.banshare_posts.findOne({ message });

    if (!post) {
        await interaction.reply({
            content: "This message is missing from the database.",
            ephemeral: true,
        });

        return;
    }

    const banshare = await banshares.banshares.findOne({
        message: post.banshare,
    });

    if (!banshare) {
        await interaction.reply({
            content: "This banshare is missing from the database.",
            ephemeral: true,
        });

        return;
    }

    if (banshare.rescinded) {
        await interaction.reply({
            content:
                "This banshare has been rescinded. You may still ban these users manually at your own judgement.",
            ephemeral: true,
        });

        return;
    }

    return banshare;
}

async function execute(
    banshare: any,
    settings: any,
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
            if ((executor || settings.autoban_member) && banshare.severity !== "dm")
                try {
                    member = await guild.members.fetch(id);
                } catch {}

            if (member) {
                user = member.user;

                if (
                    settings.autoban_member &&
                    !autoban(settings.autoban_member, banshare.severity)
                ) {
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
                (Array.isArray(executor.roles)
                    ? executor.roles
                    : executor.roles.cache.toJSON()
                ).every((role) => member!.roles.highest.comparePositionTo(role) >= 0)
            )
                throw 0;

            await guild.bans.create(id, {
                reason: "TCN Banshare: " + (banshare.reason ?? "(missing reason)"),
            });
            banned.push(user);

            if (settings?.daedalus) {
                try {
                    const response = await fetch(
                        `${PUBLIC_DDL_API}/moderation/history/${guild.id}/user/${id}`,
                        {
                            method: "post",
                            headers: {
                                Authorization: `Bearer ${DDL_TOKEN}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                type: "ban",
                                duration: 0,
                                origin: message.url,
                                reason: "TCN Banshare: " + (banshare.reason ?? "(missing reason)"),
                                ...mod,
                            }),
                        },
                    );

                    if (!response.ok)
                        console.error("[DAEDALUS API]", response.status, await response.json());
                } catch (error) {
                    console.error("[DAEDALUS API FETCH]", error);
                }
            }
        } catch (error) {
            console.error("[BAN USER]", error);
            failed.push(user);
        }
    }

    const entry = await banshares.logging.findOne({ guild: guild.id });

    if (entry) {
        try {
            const channel = await bot.channels.fetch(entry.channel);
            if (!channel?.isTextBased()) throw 0;

            const prefix = `Banshare Executed; banned ${banned.length} user${
                banned.length === 1 ? "" : "s"
            }.\nOrigin: ${message.url}\nReason: ${banshare.reason}`;

            try {
                await channel.send(
                    `${prefix}\nSuccess: ${banned.join(", ") || "(none)"}\nFailed: ${
                        failed.join(", ") || "(none)"
                    }\nSkipped: ${skipped.join(", ") || "(none)"}\nInvalid IDs: ${
                        missed.join(", ") || "(none)"
                    }`,
                );
            } catch {
                await channel.send({
                    content: prefix,
                    files: [
                        {
                            attachment: Buffer.from(
                                `Success: ${
                                    banned.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"
                                }\nFailed: ${
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

async function save(banshare: any, guild: string, post: Message) {
    await banshares.banshare_posts.insertOne({
        guild,
        banshare: banshare.value.message,
        channel: post.channel.id,
        message: post.id,
    });
}

async function get_post(banshare: any, guild: string) {
    const entry = await banshares.banshare_posts.findOne({
        guild,
        banshare: banshare.value.message,
    });

    if (!entry) return;

    try {
        const channel = await bot.channels.fetch(entry.channel);
        if (!channel?.isTextBased()) return;
        return await channel.messages.fetch(entry.message);
    } catch {}
}

const thresholds = { all: 0, med: 1, crit: 2, none: 3 } as any;
const severities = { p0: 2, p1: 1, p2: 0 } as any;

function autoban(threshold: string, severity: string) {
    return (thresholds[threshold] ?? Infinity) <= (severities[severity] ?? -Infinity);
}

function confirm(disabled: boolean = false, suffix: string = ""): any[] {
    return [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Success,
                    customId: `confirm${suffix}`,
                    label: "Confirm",
                    disabled,
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Danger,
                    customId: `cancel${suffix}`,
                    label: "Cancel",
                    disabled,
                },
            ],
        },
    ];
}

async function allowed(guild: Guild) {
    if (PUBLIC_ALLOWLIST && PUBLIC_ALLOWLIST.indexOf(guild.id) >= 0) return true;

    const request = await fetch(`${PUBLIC_TCN_API}/guilds/${guild.id}`);

    if (!request.ok) return false;
    return true;
}

await bot.login(TOKEN);
export default bot;
