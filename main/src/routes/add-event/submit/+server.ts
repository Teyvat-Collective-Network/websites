import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { marked as parse } from "marked";
import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../bot.js";
import db from "../../../db.js";
import { OBSERVER_CHANNEL } from "$env/static/private";

const window: any = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST: RequestHandler = async ({ request, locals }) => {
    if (!(locals as any).council) return new Response("Permission denied.", { status: 403 });

    let data = await request.json();

    if (!data.start || !data.end || !data.light || !data.dark || !data.title || !data.body)
        return new Response("All fields except invites are required.", { status: 400 });

    data.invites ??= "";

    data = {
        start: data.start,
        end: data.end,
        light: data.light,
        dark: data.dark,
        name: data.title,
        body: data.body,
        invites: data.invites.trim().split(/\s+/),
    };

    if (![data.light, data.dark].every((x) => x.match(/^([0-9A-Fa-f]{3}){1,2}$/)))
        return new Response("Color codes must be 3- or 6-digit hex codes.", { status: 400 });

    if (data.name.length > 100)
        return new Response("Please choose a shorter title (100 character limit).", {
            status: 400,
        });

    try {
        data.body = purify.sanitize(parse(data.body));
    } catch (error) {
        console.error(error);

        return new Response(
            "An unexpected error occurred parsing your content body. Make sure your markdown is valid.",
            { status: 400 },
        );
    }

    try {
        data.invite_data = (
            await Promise.all(
                data.invites.filter((x: string) => x).map((code: string) => bot.fetchInvite(code)),
            )
        ).map((x: any) => ({
            code: x.code,
            name: x.guild!.name,
            banner: x.guild!.bannerURL({ size: 2048 }),
            icon: x.guild!.iconURL({ size: 256 }),
        }));

        delete data.invites;
    } catch {
        return new Response(
            "An error occurred fetching your invites. Please ensure that they are all valid and have not expired.",
            { status: 400 },
        );
    }

    const tracks: any[] = (await db.events.find().toArray()).map((x) => ({ events: x.events }));
    let index = 1;

    while (
        index < tracks.length &&
        tracks[index].events.some((event: any) => event.start < data.end && event.end > data.start)
    )
        index++;

    while (index >= tracks.length) tracks.push({ events: [] });
    tracks[index].events.push(data);

    await db.events.deleteMany();
    await db.events.insertMany(tracks);

    try {
        const channel = await bot.channels.fetch(OBSERVER_CHANNEL);
        if (!channel?.isTextBased()) throw 0;
        await channel.send({
            embeds: [
                {
                    title: "Calendar Event Created",
                    description: `<@${(locals as any).user.id
                        }> just added an event to the calendar with title "${data.name}".`,
                    color: 0x2b2d31,
                    fields: [
                        {
                            name: data.body.length > 1024 ? "Body (Truncated)" : "Body",
                            value: data.body.substring(0, 1024),
                        },
                    ],
                },
            ],
        });
    } catch { }

    return new Response();
};
