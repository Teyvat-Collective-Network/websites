import { PUBLIC_TCN_API } from "$env/static/public";
import type { Actions, ServerLoad } from "@sveltejs/kit";
import { vote_bot } from "../../../../bot.js";
import db, { autoinc } from "../../../../db.js";
import { render } from "$lib/polls.js";
import { VOTE_CHANNEL } from "$env/static/private";

export const load: ServerLoad = async ({ params }) => {
    return {
        form:
            params.id === "new"
                ? {}
                : {
                      ...(await db.polls.findOne({ id: parseInt(params.id as string) })),
                      _id: undefined,
                  },
    };
};

export const actions: Actions = {
    default: async ({ params, request, locals }) => {
        if (!(locals as any).auth) return { error: "You are not authorized." };

        const fail = (error: string) => ({ error, ...data });

        const obj = await request.formData();
        const data: any = {};

        for (const key of ["mode", "question"]) data[key] = obj.get(key) ?? "";
        for (const key of ["anonymous", "live", "restricted", "dm"]) data[key] = !!obj.get(key);

        if (!["proposal", "selection", "election"].includes(data.mode))
            return fail("Invalid poll mode.");

        if (!data.question) return fail("No question provided.");

        if (data.question.length > 1024)
            return fail("Question length cannot exceed 1024 characters.");

        data.duration = parseFloat(obj.get("duration") as string);

        if (isNaN(data.duration)) return fail("Enter a duration.");

        data.close = new Date();
        data.close.setHours(data.close.getHours() + data.duration);

        for (const key of ["quorum", "min", "max", "seats"])
            data[key] = parseInt(obj.get(key) as string);

        if (![0, 60, 75].includes(data.quorum)) return fail("Invalid quorum provided.");

        if (data.mode === "selection") {
            data.options = [...new Array(10).keys()]
                .map((i) => (obj.get(`option${i}`) as any)?.trim())
                .filter((x) => x);

            if (data.options.length < 2 || data.options.length > 10)
                return fail("2-10 options required.");

            if (data.options.length < [...new Set(data.options)].length)
                return fail("Options must be unique.");

            if (isNaN(data.min) || data.min < 0)
                return fail("Enter a non-negative integer for minimum options.");

            if (isNaN(data.max) || data.max > data.options.length)
                return fail(
                    "Enter an integer no larger than the number of options for maximum options.",
                );

            if (data.min > data.max)
                return fail("Minimum options must be no greater than maximum options.");

            if (data.options.some((x: string) => x.length === 0 || x.length > 100))
                return fail("Options must be 1-100 characters long.");
        }

        if (data.mode === "election") {
            if (isNaN(data.seats) || data.seats < 1)
                return fail("Enter a positive integer for the number of seats.");

            data.candidates = [...new Array(20).keys()]
                .map((i) => obj.get(`candidate${i}`))
                .filter((x) => x);

            if (data.candidates.length < 1 || data.candidates.length > 20)
                return fail("1-20 candidates required.");

            if (data.candidates.length < [...new Set(data.candidates)].length)
                return fail("Candidates must be unique.");

            const api_request = await fetch(`${PUBLIC_TCN_API}/users`);
            const api_response = await api_request.json();
            const ids = api_response.map((x: any) => x.id).filter((x: string) => x);

            for (const id of data.candidates) {
                if (!vote_bot.users.cache.has(id)) return fail("Invalid candidate ID provided.");
                if (!ids.includes(id)) return fail("Candidates must be council members.");
            }
        }

        data.id = params.id === "new" ? await autoinc("polls") : parseInt(params.id as string);
        const { id } = data;

        const entry = await db.polls.findOne({ id });

        if (entry)
            try {
                const channel = await vote_bot.channels.fetch(entry.channel);
                if (!channel?.isTextBased()) throw 0;
                const message = await channel.messages.fetch(entry.message);
                await message.edit(await render(data));

                await db.polls.findOneAndUpdate({ id }, { $set: data });

                return;
            } catch {}

        try {
            const channel = await vote_bot.channels.fetch(VOTE_CHANNEL);
            if (!channel?.isTextBased()) throw 0;

            const message = await channel.send(await render(data));

            await db.polls.findOneAndUpdate(
                { id },
                { $set: { ...data, channel: channel.id, message: message.id } },
                { upsert: true },
            );
        } catch (error) {
            console.error(error);
            return fail("Unexpected error posting the message.");
        }

        return { id };
    },
};
