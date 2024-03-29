import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import type { RequestHandler } from "./$types.js";

export const GET: RequestHandler = () =>
    new Response(
        JSON.stringify([
            {
                type: ApplicationCommandType.ChatInput,
                name: "banshare",
                description: "control banshare settings",
                defaultMemberPermissions: "16",
                dmPermission: false,
                options: [
                    {
                        type: ApplicationCommandOptionType.SubcommandGroup,
                        name: "post",
                        description: "control banshare posting settings",
                        options: [
                            {
                                type: ApplicationCommandOptionType.Subcommand,
                                name: "here",
                                description:
                                    "set the banshare output channel to the current channel",
                            },
                            {
                                type: ApplicationCommandOptionType.Subcommand,
                                name: "none",
                                description:
                                    "unset the banshare output channel and stop receiving banshares",
                            },
                        ],
                    },
                    {
                        type: ApplicationCommandOptionType.SubcommandGroup,
                        name: "log",
                        description: "control banshare logging settings",
                        options: [
                            {
                                type: ApplicationCommandOptionType.Subcommand,
                                name: "here",
                                description: "set the banshare log channel to the current channel",
                            },
                            {
                                type: ApplicationCommandOptionType.Subcommand,
                                name: "none",
                                description: "unset the banshare log channel and stop logging",
                            },
                        ],
                    },
                    {
                        type: ApplicationCommandOptionType.Subcommand,
                        name: "ban-button",
                        description: "enable/disable the manual ban button",
                        options: [
                            {
                                type: ApplicationCommandOptionType.Boolean,
                                name: "enable",
                                description: "whether or not the ban button is enabled",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: ApplicationCommandOptionType.Subcommand,
                        name: "daedalus-integration",
                        description: "enable/disable the Daedalus integration",
                        options: [
                            {
                                type: ApplicationCommandOptionType.Boolean,
                                name: "enable",
                                description: "whether or not the Daedalus integration is enabled",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: ApplicationCommandOptionType.Subcommand,
                        name: "autoban",
                        description: "set the autoban thresholds",
                        options: [
                            {
                                type: ApplicationCommandOptionType.String,
                                name: "default-threshold",
                                description: "the autoban threshold for non-members",
                                choices: [
                                    { name: "None", value: "none" },
                                    { name: "P0", value: "crit" },
                                    { name: "P0 + P1", value: "med" },
                                    { name: "P0, P1, and P2", value: "all" },
                                ],
                                required: true,
                            },
                            {
                                type: ApplicationCommandOptionType.String,
                                name: "member-threshold",
                                description: "the autoban threshold for members",
                                choices: [
                                    { name: "None", value: "none" },
                                    { name: "P0", value: "crit" },
                                    { name: "P0 + P1", value: "med" },
                                    { name: "P0, P1, and P2", value: "all" },
                                ],
                                required: true,
                            },
                            {
                                type: ApplicationCommandOptionType.Boolean,
                                name: "autoban-dm-scams",
                                description: "whether or not to autoban DM scammers (disregards membership)",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: ApplicationCommandOptionType.Subcommand,
                        name: "receive-dm-scams",
                        description: "set whether or not to receive DM scam banshares",
                        options: [
                            {
                                type: ApplicationCommandOptionType.Boolean,
                                name: "enable",
                                description: "whether or not to receive DM scam banshares",
                                required: true,
                            }
                        ]
                    }
                ],
            },
            {
                type: ApplicationCommandType.ChatInput,
                name: "banshare-publish",
                description: "publish an arbitrary message through the banshare channels",
                defaultMemberPermissions: "0",
                dmPermission: false,
            }
        ])
    );
