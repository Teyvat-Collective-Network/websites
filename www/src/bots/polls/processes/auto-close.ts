import { PUBLIC_HQ } from "$env/static/public";
import { MessageFlags } from "discord.js";
import bot from "../../../core/bot.js";
import { channels, hq } from "../../../core/resources.js";
import { DB } from "../../../db.js";
import get_required from "../utils/get_required.js";
import { render } from "../utils/components.js";

setInterval(async () => {
    const threshold = new Date();
    threshold.setHours(threshold.getHours() + 24);

    for (const poll of await DB.Polls.get_polls_to_close()) {
        const required = await get_required(poll);
        await DB.Polls.close(poll._id, required);

        try {
            const channel = await bot.channels.fetch(poll.channel);
            if (!channel?.isTextBased()) throw "Channel is not text-based.";
            const message = await channel.messages.fetch(poll.message);
            await message.edit(await render(poll, required));
        } catch (error) {
            console.error("[AUTO-CLOSE POLL]", error);
        }
    }

    for (const poll of await DB.Polls.get_polls_to_dm()) {
        try {
            const channel = await bot.channels.fetch(poll.channel);
            if (!channel?.isTextBased()) throw 0;
            await channel.messages.fetch(poll.message);
        } catch {
            // The poll message is deleted, so don't DM.
            continue;
        }

        const required = await get_required(poll);
        const votes = new Set(await DB.Polls.who_has_voted(poll.id));

        const failed = [];

        for (const id of required) {
            if (votes.has(id)) continue;

            try {
                const user = await hq.members.fetch(id);
                await user.send({
                    embeds: [
                        {
                            title: "Waiting for your vote",
                            description: `Hello,\nYou have not yet voted on a TCN poll [here](https://discord.com/channels/${PUBLIC_HQ}/${poll.channel}/${poll.message}). Please do so within the next 24 hours.`,
                            color: 0x2b2d31,
                        },
                    ],
                });

                await channels.bot_logs.send({
                    content: `Sent DM reminder to ${user} regarding poll #${poll.id}.`,
                    allowedMentions: { parse: [] },
                });
            } catch {
                failed.push(id);
                await channels.bot_logs.send({ content: `Failed to DM <@${id}>.`, allowedMentions: { parse: [] } });
            }
        }

        if (failed.length > 0) {
            await channels.vote_here.send({
                content: `${failed.map((id) => `<@${id}>`).join(" ")} You have not yet voted on poll #${
                    poll.id
                } (https://discord.com/channels/${PUBLIC_HQ}/${poll.channel}/${
                    poll.message
                }). Please do so within the next 24 hours. If you enable DMs in this server, you will receive a DM reminder instead of being pinged.`,
                allowedMentions: { users: failed },
                flags: [MessageFlags.SuppressEmbeds],
            });
        }
    }
}, 10000);
