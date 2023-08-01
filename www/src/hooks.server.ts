import { TOKEN } from "$env/static/private";
import { PUBLIC_DIS_API, PUBLIC_STAGING, PUBLIC_TCN_AUTH } from "$env/static/public";
import type { Handle } from "@sveltejs/kit";

import "./lib/polls.js";
import "./hq_utils.js";

export const handle: Handle = async ({ event, resolve }) => {
    const locals = event.locals as any;

    locals.dark = event.cookies.get("mode") !== "light";

    if (PUBLIC_STAGING) {
        locals.user = {
            id: "242101077061664779",
            username: "Test User",
            discriminator: "0000",
        };

        locals.api_user = {
            id: "242101077061664779",
            guilds: ["805458032908959804"],
            roles: ["observer"],
        };

        locals.observer = true;
        locals.owner = true;
        locals.advisor = false;
        locals.council = true;
    } else {
        const token = event.cookies.get("token");

        const api_user =
            token &&
            (await fetch(`${PUBLIC_TCN_AUTH}/user`, { headers: { Authorization: token } }).then(
                (res) => res.ok && res.json(),
            ));

        if (api_user) {
            locals.user = await fetch(`${PUBLIC_DIS_API}/users/${api_user.id}`, {
                headers: { Authorization: `Bot ${TOKEN}` },
            }).then((res) => res.ok && res.json());

            locals.api_user = api_user;

            locals.observer = api_user.roles?.includes("observer");
            locals.owner = api_user.roles?.includes("owner");
            locals.advisor = api_user.roles?.includes("advisor");

            locals.council = locals.observer || locals.owner || locals.advisor;
        }
    }

    return await resolve(event);
};
