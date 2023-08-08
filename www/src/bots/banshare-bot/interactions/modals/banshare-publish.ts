import { Events } from "discord.js";
import bot from "../../../../core/bot.js";
import { TCN } from "$lib/api.js";
import { PUBLIC_ALLOWLIST } from "$env/static/public";
import { DB } from "../../../../db.js";

bot.on(Events.InteractionCreate, async (modal) => {
    if (!modal.isModalSubmit() || modal.customId !== "banshare-publish") return;

    await modal.deferReply({ ephemeral: true });

    const guilds: string[] = (await TCN.guilds())
        .map((server: { id: string }) => server.id)
        .concat(PUBLIC_ALLOWLIST.split(/\s+/));

    const message = modal.fields.getTextInputValue("message");

    for (const entry of await DB.BanshareSettings.get_outputs()) {
        if (!guilds.includes(entry.guild)) continue;
        const channel = await bot.channels.fetch(entry.channel);
        if (channel?.isTextBased()) await channel.send(message);
    }
});
