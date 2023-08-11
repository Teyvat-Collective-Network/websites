import type { Actions, ServerLoad } from "@sveltejs/kit";
import bot from "../../../../../core/bot.js";
import { TCN } from "$lib/api.js";
import { DB } from "../../../../../db.js";
import { fix } from "$lib/util.js";
import type { Poll } from "$lib/types.js";
import { channels } from "../../../../../core/resources.js";
import { render } from "../../../../../bots/polls/utils/components.js";

export const load: ServerLoad = async ({ params }) => {
    const poll = await DB.Polls.get(parseInt(params.id!));
    if (!poll) return { missing: true };
    return { form: params.id === "new" ? {} : fix(poll) };
};

export const actions: Actions = {
    default: async ({ params, request, locals }) => {
        if (!locals.observer) return { error: "You are not authorized." };

        const fail = (error: string) => ({ error, ...data });

        const obj = await request.formData();
        const data: Partial<Poll> = {};

        const mode = obj.get("mode") as string;

        if (mode !== "proposal" && mode !== "induction" && mode !== "selection" && mode !== "election")
            return fail("Invalid poll mode.");

        data.mode = mode;

        for (const key of ["question", "server"] as const) data[key] = (obj.get(key) as string) ?? "";

        for (const key of ["preinduct", "live", "restricted", "dm"] as const) data[key] = !!obj.get(key);

        if (data.mode === "proposal" || data.mode === "selection") {
            if (!data.question) return fail("No question provided.");

            if (data.question.length > 1024) return fail("Question length cannot exceed 1024 characters.");
        }

        data.duration = parseFloat(obj.get("duration") as string);

        if (isNaN(data.duration)) return fail("Enter a duration.");

        data.close = new Date();
        data.close.setHours(data.close.getHours() + data.duration);

        for (const key of ["quorum", "min", "max", "wave", "seats"] as const)
            data[key] = parseInt(obj.get(key) as string);

        if (![0, 60, 75].includes(data.quorum!)) return fail("Invalid quorum provided.");

        if (data.mode === "induction") {
            if (!data.server) return fail("No server name provided.");
            if (data.server.length > 256) return fail("Server name cannot exceed 256 characters.");
        } else if (data.mode === "selection") {
            data.options = [...new Array(10).keys()]
                .map((i) => (obj.get(`option${i}`) as string)?.trim())
                .filter((x) => x);

            if (data.options.length < 2 || data.options.length > 10) return fail("2-10 options required.");

            if (data.options.length > [...new Set(data.options)].length) return fail("Options must be unique.");

            if (isNaN(data.min!) || data.min! < 0) return fail("Enter a non-negative integer for minimum options.");

            if (isNaN(data.max!) || data.max! > data.options.length)
                return fail("Enter an integer no larger than the number of options for maximum options.");

            if (data.min! > data.max!) return fail("Minimum options must be no greater than maximum options.");

            if (data.options.some((x: string) => x.length === 0 || x.length > 100))
                return fail("Options must be 1-100 characters long.");
        } else if (data.mode === "election") {
            if (data.wave == undefined || isNaN(data.wave) || data.wave < 1)
                return fail("Enter a positive integer for the election wave.");

            if (data.seats == undefined || isNaN(data.seats) || data.seats < 1)
                return fail("Enter a positive integer for the number of seats.");

            data.candidates = [...new Array(20).keys()].map((i) => obj.get(`candidate${i}`) as string).filter((x) => x);

            if (data.candidates.length < 1 || data.candidates.length > 20) return fail("1-20 candidates required.");

            if (data.candidates.length > [...new Set(data.candidates)].length)
                return fail("Candidates must be unique.");

            const ids = (await TCN.users()).map((x) => x.id).filter((x: string) => x);

            for (const id of data.candidates) {
                if (!bot.users.cache.has(id)) return fail("Invalid candidate ID provided.");
                if (!ids.includes(id)) return fail("Candidates must be council members.");
            }
        }

        data.id = params.id === "new" ? await DB.autoinc("polls") : parseInt(params.id as string);
        data.closed = data.duration === 0;

        const { id } = data;

        const entry = await DB.Polls.get(id);

        if (entry)
            try {
                const channel = await bot.channels.fetch(entry.channel);
                if (!channel?.isTextBased()) throw 0;
                const message = await channel.messages.fetch(entry.message);
                await message.edit(await render(data as Poll));
                await DB.Polls.edit(id, data);
                return;
            } catch {}

        try {
            const message = await channels.vote_here.send(await render(data as Poll));
            await DB.Polls.edit(id, { ...data, channel: channels.vote_here.id, message: message.id });
        } catch (error) {
            console.error("[POST POLL]", error);
            return fail("Unexpected error posting the message.");
        }

        return { id };
    },
};
