import { Events } from "discord.js";
import bot from "../../../../core/bot.js";
import { DB } from "../../../../db.js";
import autoban from "../../utils/autoban.js";
import { autobanning, controls, finished, report } from "../../utils/components.js";
import execute from "../../utils/execute.js";
import { channels } from "../../../../core/resources.js";

bot.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isModalSubmit() || !interaction.customId.startsWith("confirm-escalation:")) return;

    await interaction.deferUpdate();

    const severity = interaction.customId.substring(19);
    const reason = interaction.fields.getTextInputValue("reason");
    const value = severity[0].toUpperCase() + severity.slice(1);
    const banshare = await DB.Banshares.set_severity(interaction.message!.id, severity);

    if (!banshare) {
        await interaction.editReply({ content: "This does not appear to be a banshare.", embeds: [], components: [] });
        return;
    }

    const posts = await DB.Banshares.get_crossposts(interaction.message!.id);

    await Promise.all(
        posts.map(async (post) => {
            const settings = await DB.BanshareSettings.get(post.guild);
            const threshold = settings?.autoban ?? "none";

            try {
                const channel = await bot.channels.fetch(post.channel);
                if (!channel?.isTextBased()) throw 0;

                const message = await channel.messages.fetch(post.message);

                await message.reply(
                    `This banshare was escalated to ${severity} severity. The explanation given is below:\n\n${reason}`,
                );

                const embed = message.embeds[0].toJSON();

                embed.fields?.forEach((field) => field.name === "Severity" && (field.value = value));

                if (autoban(threshold, severity) && !autoban(threshold, banshare.severity)) {
                    await message.edit({ embeds: [embed], components: autobanning.concat(report) });

                    if (await DB.Banshares.execute(message.id)) {
                        await execute(banshare, settings, message.guild!, message);
                        await message.edit({ components: [...finished, ...report] });
                    }
                } else await message.edit({ embeds: [embed] });
            } catch {}
        }),
    );

    const embed = interaction.message!.embeds[0].toJSON();
    embed.fields?.forEach((field) => field.name === "Severity" && (field.value = value));

    await interaction.editReply({ embeds: [embed], components: controls(true, severity) });

    await channels.bot_logs.send({
        content: `${interaction.user} escalated ${interaction.message!.url} to ${severity} severity:\n\n${reason}`,
        allowedMentions: { parse: [] },
    });
});
