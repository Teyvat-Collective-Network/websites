import { TCN } from "$lib/api.js";
import type { Banshare } from "$lib/types.js";
import type { ButtonInteraction } from "discord.js";
import { DB } from "../../../db.js";

export default async function (
    interaction: ButtonInteraction,
    message: string,
): Promise<Banshare | void> {
    if (!(await TCN.is_tcn(interaction.guild))) {
        await interaction.reply({
            content:
                "This server is not in the TCN. You can ban these users manually at your own judgement.",
            ephemeral: true,
        });

        return;
    }

    const post = await DB.Banshares.get_crosspost(message);

    if (!post) {
        await interaction.reply({
            content: "This message is missing from the database.",
            ephemeral: true,
        });

        return;
    }

    const banshare = await DB.Banshares.get(post.banshare);

    if (!banshare) {
        await interaction.reply({
            content: "This banshare is missing from the database.",
            ephemeral: true,
        });

        return;
    }

    if (banshare.rescinded) {
        await interaction.reply({
            content:
                "This banshare has been rescinded. You may still ban these users manually at your own judgement.",
            ephemeral: true,
        });

        return;
    }

    return banshare;
}
