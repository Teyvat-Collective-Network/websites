import { PUBLIC_TCN_API } from "$env/static/public";
import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../bot.js";

export const GET: RequestHandler = async () => {
    const request = await fetch(`${PUBLIC_TCN_API}/users`);
    if (!request.ok)
        return new Response(
            '[null, "TCN API returned an error; contact an observer (you can find a list in the TCN Hub)."]',
        );

    const response = await request.json();
    const api_users = response.filter((user: any) => user.roles.includes("observer"));
    const users: { id: string; tag: string }[] = [];
    let error: string | null = null;

    for (const api_user of api_users)
        try {
            const user = await bot.users.fetch(api_user.id);
            users.push({ id: user.id, tag: user.tag });
        } catch {
            error = "One or more observer IDs were found to be invalid!";
        }

    return new Response(JSON.stringify([users.sort((a, b) => a.tag.localeCompare(b.tag)), error]));
};
