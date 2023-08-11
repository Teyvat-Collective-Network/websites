import { Events, PermissionFlagsBits } from "discord.js";
import bot from "../../../../core/bot.js";
import ban from "./ban.js";
import { confirm, report_banshare, rescind_banshare } from "../../utils/components.js";
import confirm_ban from "./confirm-ban.js";
import sev from "./sev.js";
import escalate from "./escalate.js";
import publish from "./publish.js";
import confirm_publish from "./confirm-publish.js";
import reject from "./reject.js";
import confirm_reject from "./confirm-reject.js";
import { TCN } from "$lib/api.js";

bot.on(Events.InteractionCreate, async (button) => {
    if (!button.isButton() || !button.memberPermissions?.has(PermissionFlagsBits.BanMembers)) return;

    const id = button.customId;

    if (id === "ban") await ban(button);
    else if (id === "report") await button.showModal(report_banshare);
    else if (id === "confirm-ban") await confirm_ban(button);
    // observer-only
    else if (!(await TCN.is_observer(button.user))) return;
    else if (id === "publish") await publish(button);
    else if (id === "confirm") await confirm_publish(button);
    else if (id === "reject") await reject(button);
    else if (id === "confirm-reject") await confirm_reject(button);
    else if (id === "rescind") await button.showModal(rescind_banshare);
    else if (id.startsWith("sev:")) await sev(button, id.slice(4));
    else if (id.startsWith("escalate:")) await escalate(button, id.slice(9));
    else if (id.startsWith("cancel"))
        await button.update({ content: null, files: [], components: confirm(true, button.customId.slice(6)) });
});
