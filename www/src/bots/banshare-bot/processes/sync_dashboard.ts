import { SnowflakeUtil } from "discord.js";
import { DB } from "../../../db.js";
import { channels } from "../../../core/resources.js";
import bot from "../../../core/bot.js";

const dashboard = channels.banshare_dashboard;

export default async function () {
    const pending = await DB.Banshares.get_pending();

    const text =
        pending.length > 0
            ? `Pending Banshares:\n\n${pending
                  .map(
                      (x) =>
                          `${x.url} (<t:${Math.floor(
                              SnowflakeUtil.timestampFrom(x.message) / 1000,
                          )}:R>)`,
                  )
                  .join("\n")}`
            : "No pending banshares!";

    await dashboard.messages.fetch();
    const last = dashboard.lastMessage;

    if (last?.author.id === bot.user!.id) await last.edit(text);
    else await dashboard.send(text);
}
