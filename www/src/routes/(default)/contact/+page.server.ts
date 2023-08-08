import { TCN } from "$lib/api.js";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
    return {
        observers: (await TCN.users())
            .filter((user) => user.roles.includes("observer"))
            .map((user) => user.id),
    };
};
