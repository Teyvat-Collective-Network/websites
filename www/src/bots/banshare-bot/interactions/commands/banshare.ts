import { TCN } from "$lib/api.js";
import { Events, PermissionFlagsBits } from "discord.js";
import bot from "../../../../core/bot.js";
import { DB } from "../../../../db.js";

const REQUIRED_PERMISSIONS =
    PermissionFlagsBits.ViewChannel |
    PermissionFlagsBits.SendMessages |
    PermissionFlagsBits.EmbedLinks |
    PermissionFlagsBits.AttachFiles;

const thresholds = {
    none: "none",
    crit: "P0 only",
    med: "P0 and P1",
    all: "P0, P1, and P2",
} as Record<string, string>;

bot.on(Events.InteractionCreate, async (command) => {
    if (!command.isChatInputCommand() || command.commandName !== "banshare") return;
    if (!command.inGuild()) return;

    if (!(await TCN.is_tcn(command.guild))) {
        await command.reply({ content: "This is not a TCN server.", ephemeral: true });
        return;
    }

    await command.deferReply({ ephemeral: true });

    const subgroup = command.options.getSubcommandGroup(false);
    const subcommand = command.options.getSubcommand(false);

    if (subgroup === "post" || subgroup === "log") {
        const apply = DB.BanshareSettings[subgroup === "post" ? "set_output" : "set_log"];

        if (subcommand === "here") {
            if (!command.channel!.permissionsFor(command.guild!.members.me!).has(REQUIRED_PERMISSIONS)) {
                await command.editReply(
                    "Please grant the bot permission to view this channel, send messages, embed links, and attach files.",
                );

                return;
            }

            await apply(command.guildId, command.channelId);

            await command.editReply(`${subgroup === "post" ? "Banshares" : "Logs"} will now be posted here.`);
        } else if (subcommand === "none") {
            await apply(command.guildId);

            await command.editReply(
                subgroup === "post" ? "You will no longer receive banshares." : "Logs will no longer be posted.",
            );
        }
    } else if (!subgroup) {
        if (subcommand === "ban-button") {
            const enable = command.options.getBoolean("enable", true);
            await DB.BanshareSettings.set_button(command.guildId, enable);
            await command.editReply(`${enable ? "Enabled" : "Disabled"} the ban button.`);
        } else if (subcommand === "daedalus-integration") {
            const enable = command.options.getBoolean("enable", true);
            await DB.BanshareSettings.set_daedalus(command.guildId, enable);
            await command.editReply(`${enable ? "Enabled" : "Disabled"} Daedalus integration.`);
        } else if (subcommand === "autoban") {
            const non_member_threshold = command.options.getString("default-threshold", true);
            const member_threshold = command.options.getString("member-threshold", true);
            const autoban_dm_scams = command.options.getBoolean("autoban-dm-scams", true);

            await DB.BanshareSettings.set_autoban_thresholds(
                command.guildId,
                non_member_threshold,
                member_threshold,
                autoban_dm_scams,
            );

            await command.editReply(
                `Set the autoban threshold to ${thresholds[non_member_threshold]} (${
                    thresholds[member_threshold]
                } will apply to server members). DM scams will ${
                    autoban_dm_scams ? "" : "not "
                }be automatically banned.`,
            );
        } else if (subcommand === "receive-dm-scams") {
            const enable = command.options.getBoolean("enable", true);
            await DB.BanshareSettings.set_receive_dm_scams(command.guildId, enable);
            await command.editReply(`${enable ? "Enabled" : "Disabled"} DM scam banshares.`);
        }
    }
});
