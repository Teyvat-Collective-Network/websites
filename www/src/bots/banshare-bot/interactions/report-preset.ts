import { Events, PermissionFlagsBits } from "discord.js";
import bot from "../../../core/bot.js";
import process_report from "../utils/process_report.js";

bot.on(Events.InteractionCreate, async (menu) => {
    if (
        !menu.isStringSelectMenu() ||
        menu.customId !== "report-preset" ||
        !menu.memberPermissions?.has(PermissionFlagsBits.BanMembers)
    )
        return;

    await process_report(menu, menu.values.join(" "));
});
