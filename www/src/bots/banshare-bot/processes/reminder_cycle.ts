import { DB } from "../../../db.js";
import bot from "../../../core/bot.js";
import { NON_URGENT_DELAY, URGENT_DELAY } from "$env/static/private";
import { channels, roles } from "../../../core/resources.js";

export default async function () {
    const pending = await DB.Banshares.get_pending();

    const now = new Date().getTime();
    let notice = false;

    for (const { message: id, url, urgent, reminded } of pending)
        try {
            const channel = await bot.channels.fetch(url.split("/").at(-2)!);
            if (!channel?.isTextBased()) throw 0;

            const message = await channel.messages.fetch(id);

            if (now - (reminded ?? message.createdTimestamp) > (urgent ? +URGENT_DELAY : +NON_URGENT_DELAY)) {
                notice = true;
                await DB.Banshares.remind(id);
            }
        } catch {
            await DB.Banshares.reject(id);
        }

    if (!notice) return;

    try {
        await channels.exec.send(
            `${roles.urgent} One or more banshares has exceeded the allowed pending time. Please check the list of all pending banshares in ${channels.banshare_dashboard}.`,
        );
    } catch {}
}
