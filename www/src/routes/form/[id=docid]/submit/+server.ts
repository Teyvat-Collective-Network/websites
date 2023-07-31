import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../db.js";
import { email_regex, url_regex } from "$lib/util.js";

export const POST: RequestHandler = async ({ request, params, locals }) => {
    const data = await db.forms.findOne({ id: params.id });
    const reader = (locals as any).user;

    try {
        if (!data || data.deleted) throw 0;
        if (
            !data.allow_everyone &&
            reader?.id !== data.author &&
            (!(locals as any).council || !data.allow_council) &&
            (!reader ||
                (!data.allow_logged_in && !data.allowlist.match(new RegExp(`\b${reader.id}\b`))))
        )
            throw 0;

        const form = await request.json();

        if (data.pages.length !== form.pages.length) throw 0;

        for (let page_index = 0; page_index < data.pages.length; page_index++) {
            const dpage = data.pages[page_index];
            const page = form.pages[page_index];

            if (dpage.questions.length !== page.questions.length) throw 0;

            for (let qi = 0; qi < dpage.questions.length; qi++) {
                const dq = dpage.questions[qi];
                const q = page.questions[qi];

                if (["short", "long"].includes(dq.type))
                    if (q.value)
                        if (
                            dq.type === "short" &&
                            dq.short_format === "email" &&
                            !q.value.match(email_regex)
                        )
                            throw 0;
                        else if (
                            dq.type === "short" &&
                            dq.short_format === "url" &&
                            !q.value.match(url_regex)
                        )
                            throw 0;
                        else if (
                            dq.type === "short" &&
                            dq.short_format === "user" &&
                            (!q.value.match(/^\d{17,20}$/) ||
                                !(await fetch(`/api/get-tag/${q.value}`)).ok)
                        )
                            throw 0;
                        else if (
                            (dq.type !== "short" || dq.short_format === "none") &&
                            dq.min != undefined &&
                            q.value.length < dq.min
                        )
                            throw 0;
                        else if (
                            (dq.type !== "short" || dq.short_format === "none") &&
                            dq.max != undefined &&
                            q.value.length > dq.max
                        )
                            throw 0;
                        else;
                    else if (dq.required) throw 0;
                if (dq.type === "number")
                    if (q.value != undefined)
                        if (dq.min != undefined && q.value < dq.min) throw 0;
                        else if (dq.max != undefined && q.value > dq.max) throw 0;
                        else if (!dq.float && q.value % 1 !== 0) throw 0;
                        else;
                    else if (dq.required) throw 0;
                if (dq.type === "mcq")
                    if (dq.max === 1) {
                        if (!q.value && dq.required) throw 0;
                    } else {
                        const length = Object.values(q.selected).filter((x) => x).length;
                        if (dq.min != undefined && length < dq.min) throw 0;
                        else if (dq.max != undefined && length > dq.max) throw 0;
                        else if (length === 0 && dq.required) throw 0;
                    }
                if (dq.type === "date")
                    if (q.date)
                        if (dq.show_date && dq.relative_time === "past") {
                            if (!dq.show_time) {
                                q.date.setHours(0);
                                q.date.setMinutes(0);
                                q.date.setSeconds(0);
                            }

                            if (q.date > new Date()) throw 0;
                        } else if (dq.show_date && dq.relative_time === "future") {
                            if (!dq.show_time) {
                                q.date.setHours(23);
                                q.date.setMinutes(59);
                                q.date.setSeconds(59);
                            }

                            if (q.date < new Date()) throw 0;
                        } else;
                    else if (dq.required) throw 0;
            }
        }
    } catch {
        return new Response(
            "Client-side may be out of date. Use the reload button to reload data without losing responses that can be retained.",
            { status: 400 },
        );
    }
    return new Response();
};
