import type { ButtonInteraction, User } from "discord.js";
import bot from "../../../../core/bot.js";
import get_banshare from "../../utils/get_banshare.js";
import { confirm, fetching_users } from "../../utils/components.js";

export default async function (button: ButtonInteraction) {
    const banshare = await get_banshare(button, button.message.id);
    if (!banshare) return;

    await button.reply(fetching_users);

    const users: User[] = [];

    for (const id of banshare.id_list as string[])
        try {
            users.push(await bot.users.fetch(id));
        } catch {}

    try {
        await button.editReply({
            content: users.join(", "),
            components: confirm(false, "-ban"),
        });
    } catch {
        await button.editReply({
            files: [
                {
                    attachment: Buffer.from(users.map((user) => `${user.tag} (${user.id})`).join(", "), "utf-8"),
                    name: "user-list.txt",
                },
            ],
            components: confirm(false, "-ban"),
        });
    }
}
