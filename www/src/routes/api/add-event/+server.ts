import { marked as parse } from "marked";
import type { RequestHandler } from "@sveltejs/kit";
import bot from "../../../core/bot.js";
import { DB } from "../../../db.js";
import type { CalendarEvent } from "$lib/types.js";
import sanitize from "$lib/sanitize.js";
import { channels } from "../../../core/resources.js";

export const POST: RequestHandler = async ({ request, locals }) => {
    if (!locals.council) return new Response("Permission denied.", { status: 403 });

    let data = (await request.json()) as CalendarEvent;

    if (!data.start || !data.end || !data.light || !data.dark || !data.title || !data.body)
        return new Response("All fields except invites are required.", { status: 400 });

    const invites = (data.invites ?? "").split(/\s+/).filter((x) => x);

    if (![data.light, data.dark].every((x) => x.match(/^([0-9A-Fa-f]{3}){1,2}$/)))
        return new Response("Color codes must be 3- or 6-digit hex codes.", { status: 400 });

    if (data.title.length > 100)
        return new Response("Please choose a shorter title (100 character limit).", {
            status: 400,
        });

    try {
        data.body = sanitize(parse(data.body));
    } catch (error) {
        console.error("[PARSE EVENT CONTENT BODY]", error);

        return new Response(
            "An unexpected error occurred parsing your content body. Make sure your markdown is valid.",
            { status: 400 },
        );
    }

    try {
        data.invite_data = (
            await Promise.all(invites.filter((x: string) => x).map((code: string) => bot.fetchInvite(code)))
        ).map((x) => ({
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

    const tracks = await DB.Events.get_tracks<false>();
    let index = 1;

    while (
        index < tracks.length &&
        tracks[index].events.some((event) => event.start < data.end && event.end > data.start)
    )
        index++;

    while (index >= tracks.length) tracks.push({ events: [] });
    tracks[index].events.push(data);

    await DB.Events.set_tracks(tracks);

    await channels.exec.send({
        embeds: [
            {
                title: "Calendar Event Created",
                description: `<@${locals.user.id}> just added an event to the calendar with title "${data.title}".`,
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

    return new Response();
};
