import type { ButtonInteraction } from "discord.js";
import { confirm } from "../../utils/components.js";

export default async function (button: ButtonInteraction) {
    await button.reply({ components: confirm(false, "-reject"), ephemeral: true });
}
