import type { ButtonInteraction } from "discord.js";
import { DB } from "../../../../db.js";
import { confirm } from "../../utils/components.js";

export const published = new Set<string>();

export default async function (button: ButtonInteraction) {
    if (published.has(button.message.id) || (await DB.Banshares.get(button.message.id))?.published)
        await button.reply({ content: "This banshare has been published by someone else already.", ephemeral: true });
    else await button.reply({ components: confirm(), ephemeral: true });
}
