import { ThreadAutoArchiveDuration, type ChatInputCommandInteraction } from "discord.js";
import { channels } from "../../../core/resources.js";
import { NOMINATING_TAG } from "$env/static/private";

export default async function (command: ChatInputCommandInteraction) {
    const wave = command.options.getInteger("wave", true);
    const seats = command.options.getInteger("seats", true);

    const short_reason = command.options.getString("short-reason", true);

    const long_reason = command.options.getString("long-reason", true);

    const nom_window = command.options.getNumber("nomination-window", false) ?? 7;
    const vote_window = command.options.getNumber("voting-window", false) ?? 2;

    await command.deferReply({ ephemeral: true });

    const now_ = new Date();
    const mid_ = new Date();
    const end_ = new Date();

    mid_.setDate(mid_.getDate() + nom_window);
    end_.setDate(end_.getDate() + nom_window + vote_window);

    const now = Math.floor(now_.getTime() / 1000);
    const mid = Math.floor(mid_.getTime() / 1000);
    const end = Math.floor(end_.getTime() / 1000);

    const channel = await channels.elections.threads.create({
        name: `Wave ${wave} Election`,
        autoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
        message: {
            content: `## Election Information

**Wave**: ${wave}
**Reason**: ${short_reason}
**Seats**: ${seats}
**Window**: Nominations and statements scheduled for <t:${now}:F> - <t:${mid}:F>, voting scheduled for <t:${mid}:F> - <t:${end}:F>`,
            allowedMentions: { parse: [] },
        },
    });

    await channel.send(`<@&804177768837283900> <@&804186763424825376>

Another wave of elections is upon us! ${long_reason}

Please nominate people who you would like to be candidates for the upcoming election. Only one nomination is needed for someone to run for a position, so please avoid repeating nominations and feel free to add reactions to others' nominations if you agree with their choices.

Additionally, you are welcome to nominate yourself.

Nominations and statements will be open for one week (until <t:${mid}:F>). If you are nominated, please respond here indicating whether or not you are accepting, and if you accept the nomination, please post your statement here. There is no template or list of requirements, but you may want to include a basic introduction of yourself, campaign promises, defining qualities/traits, etc.

**Important:** To discuss anything related to the election that is not a nomination, statement, or nomination response, please use the pinned discussion post (<#1081829781139623976>).

Thanks!`);

    await channel.setAppliedTags([NOMINATING_TAG]);

    await command.editReply(`${channel}`);
}
