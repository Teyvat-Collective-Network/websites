import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals }) => {
    if (!(locals as any).auth) return { noaccess: true };
    return {};
};
