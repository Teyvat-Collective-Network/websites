import { Events, PermissionFlagsBits } from "discord.js";
import bot from "../../../../core/bot.js";
import process_report from "../../utils/process_report.js";

bot.on(Events.InteractionCreate, async (modal) => {
    if (
        !modal.isModalSubmit() ||
        modal.customId !== "confirm-report" ||
        !modal.memberPermissions?.has(PermissionFlagsBits.BanMembers)
    )
        return;

    await process_report(modal, modal.fields.getTextInputValue("reason"));
});
