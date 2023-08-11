import { channels, hq } from "../../../core/resources.js";

export default async function () {
    for (const [, invite] of hq.invites.cache)
        if (invite.uses && invite.uses > 0)
            try {
                await invite.delete();

                await channels.bot_logs.send({
                    content: `Deleted invite with code ${invite.code} (${
                        invite.inviter ?? "unknown creator"
                    }) since it has been used.`,
                    allowedMentions: { parse: [] },
                });
            } catch {}
}
