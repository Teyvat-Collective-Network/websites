import type { Load } from "@sveltejs/kit";

export const load: Load = ({ data }) => {
    return { dark: (data as any).dark };
};
