import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    (event.locals as any).dark = event.cookies.get("mode") !== "light";
    return await resolve(event);
};
