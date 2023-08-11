import { PUBLIC_HQ } from "$env/static/public";
import bot from "../../../core/bot.js";
import sweep_invites from "../processes/sweep_invites.js";

bot.on("guildMemberAdd", async (member) => {
    if (member.guild.id === PUBLIC_HQ) sweep_invites();
});
