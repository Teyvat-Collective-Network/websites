import { ApplicationCommandType, type ApplicationCommandData, ApplicationCommandOptionType } from "discord.js";

export default [
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
] satisfies ApplicationCommandData[];
