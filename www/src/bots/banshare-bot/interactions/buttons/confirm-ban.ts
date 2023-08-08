import type { ButtonInteraction, Message } from "discord.js";
import get_banshare from "../../utils/get_banshare.js";
import { DB } from "../../../../db.js";
import execute from "../../utils/execute.js";
import { finished, report } from "../../utils/components.js";

export default async function (button: ButtonInteraction) {
    let message: Message;

    try {
        message = await button.message.fetchReference();
    } catch {
        await button.update({
            content: "The banshare being referred to has been deleted, so it cannot be executed.",
            files: [],
            components: [],
        });

        return;
    }

    const banshare = await get_banshare(button, button.message.reference?.messageId ?? "");

    if (!banshare) return;

    if (await DB.Banshares.lock(button.message.id)) {
        await button.update({
            content: "This banshare is already being executed by someone else.",
            files: [],
            components: [],
        });

        return;
    }

    await button.update({
        content: "Executing...",
        files: [],
        components: [],
    });

    await execute(banshare, await DB.BanshareSettings.get(button.guild!.id), button.guild!, message, button.member!);

    await button.editReply("Banshare executed!");
    await message.edit({ components: [...finished, ...report] });
}
