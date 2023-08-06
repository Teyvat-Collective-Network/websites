import { fix } from "$lib/util.js";
import type { ServerLoad } from "@sveltejs/kit";
import { TCN } from "$lib/api.js";
import { DB } from "../../../../db.js";

export const load: ServerLoad = async () => {
    const ids = (await TCN.users())
        .filter((x) => x.id && (x.roles.includes("owner") || x.roles.includes("advisor")))
        .map((x) => x.id);

    return {
        polls: fix((await DB.Polls.get_all()).filter((poll) => poll.closed && poll.required)),
        votes: fix(await DB.Votes.get_all()),
        ids,
    };
};
