import { Events } from "discord.js";
import bot from "../../../../core/bot.js";
import { DB } from "../../../../db.js";
import { rescinded } from "../../utils/components.js";
import { TCN } from "$lib/api.js";

bot.on(Events.InteractionCreate, async (modal) => {
    if (!modal.isModalSubmit() || modal.customId !== "confirm-rescind" || !(await TCN.is_observer(modal.user))) return;

    await modal.deferReply({ ephemeral: true });

    const lock = await DB.Banshares.rescind(modal.message!.id);

    if (!lock) {
        await modal.editReply("This does not appear to be a banshare.");
        return;
    }

    if (lock?.rescinded) {
        await modal.editReply("This banshare is already being rescinded by someone else.");
        return;
    }

    await modal.message!.edit({ components: rescinded });
    await modal.editReply("This banshare is being rescinded. You may dismiss this message.");

    const explanation =
        "This banshare has been rescinded by an observer. The explanation given is below:\n\n" +
        modal.fields.getTextInputValue("explanation");

    await modal.message!.reply(explanation);

    for (const post of await DB.Banshares.get_crossposts(modal.message!.id)) {
        try {
            const channel = await bot.channels.fetch(post.channel);
            if (!channel?.isTextBased()) throw 0;

            const message = await channel.messages.fetch(post.message);
            await message.edit({ components: rescinded }).catch(() => {});
            await message.reply(explanation);
        } catch {}
    }
});
