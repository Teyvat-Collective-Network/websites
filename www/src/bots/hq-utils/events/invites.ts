import { Events } from "discord.js";
import bot from "../../../core/bot.js";
import { channels } from "../../../core/resources.js";

bot.on(Events.InviteCreate, async (invite) => {
    if (invite.inviterId === null || invite.inviterId === bot.user!.id) return;

    await channels.bot_logs.send({
        content: `${invite.inviter} created an invite (max age: ${
            invite.maxAge ? `${invite.maxAge} seconds` : "infinite"
        }, max uses: ${invite.maxUses || "unlimited"})`,
        allowedMentions: { parse: [] },
    });
});
