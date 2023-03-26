import { TOKEN } from "$env/static/private";
import { PUBLIC_DIS_API, PUBLIC_STAGING, PUBLIC_TCN_AUTH } from "$env/static/public";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    (event.locals as any).dark = event.cookies.get("mode") !== "light";

    if (PUBLIC_STAGING) {
        (event.locals as any).user = {
            id: "242101077061664779",
            username: "Test User",
            discriminator: "0000",
        };

        (event.locals as any).api_user = {
            id: "242101077061664779",
            guilds: ["805458032908959804"],
            roles: ["observer"],
        };

        (event.locals as any).auth = true;
    } else {
        const token = event.cookies.get("token");

        const api_user =
            token &&
            (await fetch(`${PUBLIC_TCN_AUTH}/user`, { headers: { Authorization: token } }).then(
                (res) => res.ok && res.json(),
            ));

        if (api_user) {
            (event.locals as any).user = await fetch(`${PUBLIC_DIS_API}/users/${api_user.id}`, {
                headers: { Authorization: `Bot ${TOKEN}` },
            }).then((res) => res.ok && res.json());

            (event.locals as any).api_user = api_user;

            (event.locals as any).auth = ["observer", "website"].some((x) =>
                api_user.roles?.includes(x),
            );
        }
    }

    return await resolve(event);
};
