import { TCN } from "$lib/api.js";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ data }) => {
    const partners = await TCN.guilds();
    partners.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
    return { partners, ...data };
};
