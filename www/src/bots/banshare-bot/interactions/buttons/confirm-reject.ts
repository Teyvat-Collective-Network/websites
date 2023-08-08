import { ComponentType, type ButtonInteraction, ButtonStyle } from "discord.js";
import { DB } from "../../../../db.js";
import sync_dashboard from "../../processes/sync_dashboard.js";

export default async function (button: ButtonInteraction) {
    const message = await button.message.fetchReference();
    await DB.Banshares.reject(message.id);

    const embed = message.embeds[0].toJSON();
    embed.fields = embed.fields!.slice(0, -1);

    await message.edit({
        embeds: [embed],
        components: [
            {
                type: ComponentType.ActionRow,
                components: [
                    {
                        type: ComponentType.Button,
                        style: ButtonStyle.Secondary,
                        customId: ".",
                        label: "REJECTED",
                        disabled: true,
                    },
                ],
            },
        ],
    });

    try {
        await sync_dashboard();
    } catch {}

    await button.update({ content: "This banshare has been rejected.", components: [] });
}
