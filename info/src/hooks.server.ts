import { TOKEN } from "$env/static/private";
import { PUBLIC_DIS_API, PUBLIC_STAGING, PUBLIC_TCN_AUTH } from "$env/static/public";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    (event.locals as any).dark = event.cookies.get("mode") !== "light";

    if (PUBLIC_STAGING) {
        if (event.url.searchParams.has("logged-in"))
            (event.locals as any).user = {
                id: "242101077061664779",
                username: "Test User",
                discriminator: "0000"
            };
    } else {
        const api_user =
            event.cookies.get("token") &&
            (await fetch(`${PUBLIC_TCN_AUTH}/user`, {
                headers: { Authorization: event.cookies.get("token")! }
            }).then((res) => res.ok && res.json()));

        if (api_user) {
            (event.locals as any).user = await fetch(`${PUBLIC_DIS_API}/users/${api_user.id}`, {
                headers: { Authorization: `Bot ${TOKEN}` }
            }).then((res) => res.ok && res.json());
        }
    }

    return await resolve(event);
};
