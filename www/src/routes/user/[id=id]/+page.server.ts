import { PUBLIC_TCN_API } from "$env/static/public";
import { vote_bot } from "../../../bot.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
    const data = { id: params.id };

    const request = await fetch(`${PUBLIC_TCN_API}/users/${params.id}`);

    if (request.ok) {
        data.api = await request.json();

        const guilds = await (await fetch(`${PUBLIC_TCN_API}/guilds`)).json();

        data.api.owns = guilds.filter((x) => x.owner == params.id);
        data.api.advises = guilds.filter((x) => x.advisor == params.id);
        data.api.staff = guilds.filter(
            (x) =>
                x.owner !== params.id && x.advisor !== params.id && data.api.guilds.includes(x.id),
        );
    }

    try {
        const user = await vote_bot.users.fetch(params.id);
        data.discord = {
            icon: user.displayAvatarURL({ dynamic: true }),
            tag: user.discriminator === "0" ? `@${user.username}` : user.tag,
        };
    } catch {}

    return data;
};
