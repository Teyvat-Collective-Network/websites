import { DISCORD_TOKEN } from "$env/static/private";
import { Client } from "discord.js";

const bot = new Client({ intents: [] });

await bot.login(DISCORD_TOKEN);

export default bot;
