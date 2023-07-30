import type { Invite } from "discord.js";
import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../bot.js";
import db from "../../../db.js";

export const POST: RequestHandler = async ({ locals, request }) => {
    const user = (locals as any).api_user;
    if (!user) return new Response(null, { status: 403 });
    if (!user.roles.includes("observer")) new Response(null, { status: 403 });

    await db.events.updateMany({}, { $set: { mark: true } });

    const items = await request.json();

    for (const track of items) {
        for (const event of track) {
            try {
                const invites: Invite[] = await Promise.all(
                    (event.invites ?? "")
                        .split(/\s+/)
                        .filter((x: string) => x)
                        .map((code: string) => bot.fetchInvite(code)),
                );

                event.invite_data = invites.map((x) => ({
                    code: x.code,
                    name: x.guild!.name,
                    banner: x.guild!.bannerURL({ size: 2048 }),
                    icon: x.guild!.iconURL({ size: 256 }),
                }));
            } catch (error) {
                console.error("[POST CALENDAR EVENT]", error);
                return new Response(null, { status: 400 });
            }
        }
    }

    if (items.length > 0) await db.events.insertMany(items.map((events: any) => ({ events })));

    await db.events.deleteMany({ mark: true });

    return new Response();
};
