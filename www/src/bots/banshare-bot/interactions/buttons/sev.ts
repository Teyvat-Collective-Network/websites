import type { ButtonInteraction } from "discord.js";
import { DB } from "../../../../db.js";
import { controls } from "../../utils/components.js";

export default async function (button: ButtonInteraction, severity: string) {
    await DB.Banshares.set_severity(button.message.id, severity);

    await button.update({
        embeds: [
            {
                title: "**Banshare**",
                color: 0x2b2d31,
                fields: [
                    ...button.message.embeds[0].fields.slice(0, -1),
                    { name: "Severity", value: severity.toUpperCase() },
                ],
            },
        ],
        components: controls(false, severity),
    });
}
