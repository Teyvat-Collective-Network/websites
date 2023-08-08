import type { ChatInputCommandInteraction } from "discord.js";
import bot from "../../../core/bot.js";
import { TCN } from "$lib/api.js";
import { DB } from "../../../db.js";
import { PUBLIC_DOMAIN } from "$env/static/public";
import { tag } from "$lib/util.js";

export default async function (command: ChatInputCommandInteraction) {
    await command.reply({ content: "Generating, please be patient...", ephemeral: true });

    const guilds = await TCN.guilds();
    guilds.sort((x, y) => x.name.localeCompare(y.name));

    const characters = await DB.Characters.display_map();

    while (guilds.length > 0) {
        await command.channel!.send({
            embeds: await Promise.all(
                guilds.splice(0, 10).map(async (guild) =>
                    ((owner, advisor) => ({
                        title: guild.name,
                        description: `${characters[guild.character]}\n\n**Owner:** ${owner} (${tag(owner)})${
                            advisor ? `\n**Advisor:** ${advisor} (${tag(advisor)})` : ""
                        }`,
                        color: 0x2b2d31,
                        thumbnail: {
                            url: `${PUBLIC_DOMAIN}/images/characters/${guild.character}.png`,
                        },
                        image: { url: "https://i.imgur.com/U9Wqlug.png" },
                        footer: { text: guild.id },
                    }))(await bot.users.fetch(guild.owner), guild.advisor && (await bot.users.fetch(guild.advisor))),
                ),
            ),
        });
    }

    await command.channel!.send(
        "https://embeds.leaf.moe/TCN_partners\n\n**Autosync Guide:** https://teyvatcollective.network/info/partner-list#autosync",
    );

    await command.followUp({ content: "Done!", ephemeral: true });
}
