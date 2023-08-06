import { TCN } from "$lib/api.js";
import type { TCNGuild } from "$lib/types.js";
import { hq_bot } from "../../../../bot.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    try {
        const guild: TCNGuild & {
            owner_tag?: string;
            advisor_tag?: string;
        } = await TCN.guild(params.id!);

        try {
            const user = await hq_bot.users.fetch(guild.owner);
            guild.owner_tag = user.discriminator === "0" ? `@${user.username}` : user.tag;
        } catch {}

        if (guild.advisor)
            try {
                const user = await hq_bot.users.fetch(guild.advisor);
                guild.advisor_tag = user.discriminator === "0" ? `@${user.username}` : user.tag;
            } catch {}

        return guild;
    } catch {
        return { id: params.id, missing: true };
    }
};
