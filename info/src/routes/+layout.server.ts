import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = ({ locals }) => {
    return { dark: (locals as any).dark };
};
