import { Events } from "discord.js";
import bot from "../../../core/bot.js";
import partner_list from "./partner-list.js";
import election from "./election.js";
import invite from "./invite.js";

bot.on(Events.InteractionCreate, async (command) => {
    if (!command.isChatInputCommand()) return;

    switch (command.commandName) {
        case "partner-list":
            await partner_list(command);
            break;
        case "election":
            await election(command);
            break;
        case "invite":
            await invite(command);
    }
});
