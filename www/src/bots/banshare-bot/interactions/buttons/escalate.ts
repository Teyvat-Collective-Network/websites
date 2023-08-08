import { ComponentType, type ButtonInteraction, TextInputStyle } from "discord.js";
import { DB } from "../../../../db.js";

export default async function (interaction: ButtonInteraction, severity: string) {
    const banshare = await DB.Banshares.get(interaction.message.id);

    if (!banshare) {
        await interaction.update({ content: "This does not appear to be a banshare.", embeds: [], components: [] });
        return;
    }

    await interaction.showModal({
        title: "Escalate Banshare",
        customId: `confirm-escalation:${severity}`,
        components: [
            {
                type: ComponentType.ActionRow,
                components: [
                    {
                        type: ComponentType.TextInput,
                        style: TextInputStyle.Paragraph,
                        customId: "reason",
                        label: "Reason",
                        placeholder: `You are about to escalate this banshare to ${severity} severity. This is not reversible!`,
                    },
                ],
            },
        ],
    });
}
