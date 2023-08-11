import type { ChatInputCommandInteraction } from "discord.js";
import { channels } from "../../../core/resources.js";

export default async function (command: ChatInputCommandInteraction) {
    const invite = await command.guild!.invites.create(channels.landing, { maxAge: 604800, maxUses: 1 });
    await command.reply({ content: invite.url, ephemeral: true });

    await channels.bot_logs.send({
        content: `${command.user} created a one-week one-use invite using \`/invite\``,
        allowedMentions: { parse: [] },
    });
}
