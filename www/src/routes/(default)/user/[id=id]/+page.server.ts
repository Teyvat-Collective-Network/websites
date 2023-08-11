import { TCN } from "$lib/api.js";
import type { UserRouteData } from "$lib/types.js";
import { tag } from "$lib/util.js";
import bot from "../../../../core/bot.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    const data: UserRouteData = { id: params.id! };

    try {
        const user = await TCN.user(params.id!);
        const guilds = await TCN.guilds();

        data.api = { owns: [], advises: [], staff: [] };

        for (const guild of guilds) {
            if (guild.owner === user.id) data.api.owns.push(guild);
            else if (guild.advisor === user.id) data.api.advises.push(guild);
            else if (user.guilds.includes(user.id)) data.api.staff.push(guild);
        }
    } catch {}

    try {
        const user = await bot.users.fetch(params.id!);
        data.discord = { icon: user.displayAvatarURL(), tag: tag(user) };
    } catch {}

    return data;
};
