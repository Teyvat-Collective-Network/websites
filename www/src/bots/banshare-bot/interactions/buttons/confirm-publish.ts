import { PUBLIC_ALLOWLIST } from "$env/static/public";
import { TCN } from "$lib/api.js";
import { ComponentType, type APIEmbed, type ButtonInteraction, ButtonStyle } from "discord.js";
import { published } from "./publish.js";
import { DB } from "../../../../db.js";
import { autoban_scheduled, autobanning, controls, finished, report } from "../../utils/components.js";
import sync_dashboard from "../../processes/sync_dashboard.js";
import bot from "../../../../core/bot.js";
import type { ActionRow } from "$lib/types.js";
import autoban from "../../utils/autoban.js";
import execute from "../../utils/execute.js";
import { channels } from "../../../../core/resources.js";

export default async function (button: ButtonInteraction) {
    await button.deferUpdate();

    const guilds: string[] = (await TCN.guilds())
        .map((server: { id: string }) => server.id)
        .concat(PUBLIC_ALLOWLIST.split(/\s+/));

    const id = button.message.reference?.messageId ?? "";
    const fail = published.has(id);
    published.add(id);
    setTimeout(() => published.delete(id), 10000);

    const banshare = await DB.Banshares.publish(id);

    if (!banshare)
        await button.editReply({ content: "This does not appear to be a banshare.", embeds: [], components: [] });
    else if (fail || banshare.published)
        await button.editReply({
            content: "This banshare has been published by someone else already.",
            embeds: [],
            components: [],
        });
    else {
        let embeds: APIEmbed[];

        try {
            const message = await button.message.fetchReference();
            await message.edit({ components: controls(true, banshare.severity) });
            embeds = message.embeds.map((e) => e.toJSON());
        } catch {
            await button.editReply({ content: "The original banshare could not be found.", components: [] });
            return;
        }

        try {
            await sync_dashboard();
        } catch {}

        await button.editReply({
            content: "Banshare is being published! You may dismiss this message.",
            components: [],
        });

        await channels.bot_logs.send({
            content: `${button.user} published <${button.message.url}>`,
            allowedMentions: { parse: [] },
        });

        const places = (await DB.BanshareSettings.get_outputs())
            .filter(
                ({ guild }) => (PUBLIC_ALLOWLIST && PUBLIC_ALLOWLIST.indexOf(guild) !== -1) || guilds.includes(guild),
            )
            .map(({ guild, channel }) => ({ guild, channel: bot.channels.cache.get(channel) }))
            .filter(({ channel }) => channel?.isTextBased());

        await Promise.all(
            places.map(async ({ guild, channel }) => {
                try {
                    if (!channel?.isTextBased()) return;

                    const settings = await DB.BanshareSettings.get(guild);
                    if (settings?.suppress_dm_scams && banshare.severity === "dm") return;

                    const threshold = settings?.autoban ?? "none";

                    let components: ActionRow[] = [];

                    if (!banshare.id_list.length) {
                        // Submitted without checking IDs, so no automation is possible.
                    } else if (
                        (banshare.severity === "dm" && settings?.autoban_dm_scams) ||
                        autoban(threshold, banshare.severity)
                    ) {
                        components = autoban_scheduled;
                    } else if (!settings?.no_button) {
                        components = [
                            {
                                type: ComponentType.ActionRow,
                                components: [
                                    {
                                        type: ComponentType.Button,
                                        style: ButtonStyle.Danger,
                                        custom_id: "ban",
                                        label: "Ban",
                                    },
                                ],
                            },
                        ];
                    }

                    const post = await channel.send({ embeds, components: components.concat(report) });
                    await DB.Banshares.add_crosspost(banshare, guild, post);

                    if (!channel?.isTextBased()) return;

                    if (post.components?.[0]?.components?.[0]?.customId !== "-") return;

                    await post.edit({ components: autobanning.concat(report) });

                    await execute(banshare, settings, post.guild!, post, undefined);

                    await post.edit({ components: [...finished, ...report] });
                } catch (error) {
                    console.error("[PUBLISH ERROR]", error);
                }
            }),
        );
    }
}
