import { Events } from "discord.js";
import bot from "../../../../core/bot.js";
import { PUBLIC_HQ } from "$env/static/public";
import { TCN } from "$lib/api.js";
import { post_message } from "../../utils/components.js";

bot.on(Events.InteractionCreate, async (command) => {
    if (!command.isChatInputCommand() || command.commandName !== "banshare-publish") return;

    await command.deferReply({ ephemeral: true });

    if (command.guildId !== PUBLIC_HQ || !(await TCN.is_observer(command.user)))
        await command.editReply("This command may only be used by observers and in HQ.");
    else await command.showModal(post_message);
});
