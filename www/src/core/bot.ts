import { TOKEN } from "$env/static/private";
import { Client, Events, IntentsBitField } from "discord.js";

const bot = new Client({
    intents:
        IntentsBitField.Flags.Guilds |
        IntentsBitField.Flags.GuildMembers |
        IntentsBitField.Flags.GuildInvites |
        IntentsBitField.Flags.MessageContent,
});

await bot.login(TOKEN);

await new Promise((r) =>
    bot.on(Events.ClientReady, () => {
        console.log("[BOT] Ready!");
        r(null);
    }),
);

export default bot;
