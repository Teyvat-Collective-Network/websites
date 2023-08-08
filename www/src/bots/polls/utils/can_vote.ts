import { TCN } from "$lib/api.js";
import type { Poll } from "$lib/types.js";

export async function can_vote(poll: Poll, user: string) {
    const data = await TCN.user(user);
    return (poll.restricted ? ["voter"] : ["owner", "advisor"]).some((x) => data.roles.includes(x));
}
