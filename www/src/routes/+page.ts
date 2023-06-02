import { PUBLIC_TCN_API } from "$env/static/public";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ data }) => {
    const request = await fetch(`${PUBLIC_TCN_API}/guilds`);
    if (!request.ok) return [];

    const partners = await request.json();
    partners.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));

    return { partners, ...data };
};
