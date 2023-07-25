import { PUBLIC_TCN_API } from "$env/static/public";
import { hq_bot } from "../../../../bot.js";
import db from "../../../../db.js";
import { fix } from "$lib/util.js";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
    const request = await fetch(`${PUBLIC_TCN_API}/users`);
    const ids = (await request.json())
        .filter((x) => x.id && (x.roles.includes("owner") || x.roles.includes("advisor")))
        .map((x) => x.id);

    return {
        polls: fix(
            (await db.polls.find().toArray()).filter(
                (poll) => poll.closed && poll.required,
            ),
        ),
        votes: fix(await db.poll_votes.find().toArray()),
        ids,
        map: ids.reduce((o, id) => ({ ...o, [id]: hq_bot.users.cache.get(id)?.tag }), {}),
    };
};
