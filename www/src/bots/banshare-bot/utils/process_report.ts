import type { ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js";
import { DB } from "../../../db.js";
import { channels } from "../../../core/resources.js";

export default async function (interaction: ModalSubmitInteraction | StringSelectMenuInteraction, reason: string) {
    await interaction.deferReply({ ephemeral: true });

    const entry = await DB.Banshares.get_crosspost(interaction.message!.id);
    if (!entry) throw "Report: missing crosspost entry";

    const banshare = await DB.Banshares.get(entry.banshare);
    if (!banshare) throw "Report: missing banshare";

    await channels.exec.send({
        content: `${interaction.user} reported a banshare: <${banshare.url}>:\n\n${reason}`,
        allowedMentions: { parse: [] },
    });
    await interaction.editReply("Your report has been submitted and will be reviewed by the observers.");
}
