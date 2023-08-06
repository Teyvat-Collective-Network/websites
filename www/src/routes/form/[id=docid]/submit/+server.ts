import type { RequestHandler } from "@sveltejs/kit";
import { email_regex, timeinfo, timestamp, url_regex, webhook_regex } from "$lib/util.js";
import { hq_bot } from "../../../../bot.js";
import { PUBLIC_DOMAIN } from "$env/static/public";
import type { User } from "discord.js";
import { DB } from "../../../../db.js";
export const POST: RequestHandler = async ({ request, params, locals, fetch }) => {
    const data = await DB.Forms.get(params.id!);
    const reader = (locals as any).user;

    const dquestions: any = {};
    const answers = [];

    try {
        if (!data || data.deleted) throw 0;
        if (
            !data.allow_everyone &&
            reader?.id !== data.author &&
            (!(locals as any).observer || !data.allow_observers) &&
            (!(locals as any).council || !data.allow_council) &&
            (!reader ||
                (!data.allow_logged_in && !data.allowlist.match(new RegExp(`\b${reader.id}\b`))))
        )
            throw 0;
        if (!data.allow_everyone && data.external && data.external_access)
            try {
                const request = await fetch(`${data.external_url}/access?user=${reader.id}`);
                if (!request.ok) throw 1;

                const response = await request.json();
                if (!response) throw 0;
            } catch (error) {
                throw typeof error === "number" ? error : 1;
            }

        const form = await request.json();

        if (data.pages.length !== form.pages.length) throw 0;

        for (const question of data.pages.flatMap((page: any) => page.questions))
            dquestions[question.id] = question;

        for (let page_index = 0; page_index < data.pages.length; page_index++) {
            const dpage = data.pages[page_index];
            const page = form.pages[page_index];

            if (dpage.questions.length !== page.questions.length) throw 0;

            if (data.external) {
                if (dpage.use_condition)
                    try {
                        const request = await fetch(
                            `${data.external_url}/condition/${page_index + 1}`,
                            {
                                method: "post",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    user: reader?.id ?? null,
                                    answers: form.answers,
                                }),
                            },
                        );

                        if (!request.ok) throw 1;

                        const response = await request.json();
                        if (!response) continue;
                    } catch (error) {
                        throw typeof error === "number" ? error : 1;
                    }
            } else if (dpage.condition?.source === -1) {
                if ((locals as any).observer) {
                    if (!dpage.condition.council_observer) continue;
                } else if ((locals as any).owner) {
                    if (!dpage.condition.council_owner) continue;
                } else if ((locals as any).advisor) {
                    if (!dpage.condition.council_advisor) continue;
                } else if (!dpage.condition.council_other) continue;
            } else if (dpage.condition?.source) {
                const pc = dpage.condition!;
                const dq = dquestions[pc.source];

                if (dq) {
                    const ans = answers.find((answer: any) => answer.id === dq.id)!;

                    if (dq.type === "number") {
                        if (!("answer" in ans)) {
                            if (!pc.number_default) continue;
                        } else {
                            const a = ans.answer;
                            const b = pc.number_value;

                            switch (pc.number_op) {
                                case "gt":
                                    if (a > b) break;
                                    else continue;
                                case "ge":
                                    if (a >= b) break;
                                    else continue;
                                case "eq":
                                    if (a === b) break;
                                    else continue;
                                case "le":
                                    if (a <= b) break;
                                    else continue;
                                case "lt":
                                    if (a < b) break;
                                    else continue;
                                case "ne":
                                    if (a !== b) break;
                                    else continue;
                            }
                        }
                    } else if (dq.type === "mcq") {
                        const selected = new Set<string>(
                            "answer" in ans ? ans.answer.map((x: any) => x.text) : [],
                        );

                        const keys = Object.entries(pc.options).filter(([, y]) => y);
                        const f = keys[pc.mcq_anyall === "any" ? "some" : "every"].bind(keys);

                        if (!f(([x]) => selected.has(x) === (pc.mcq_mode === "yes"))) continue;
                    } else if (dq.type === "date") {
                        if (!("answer" in ans)) {
                            if (!pc.date_default) continue;
                        } else {
                            const a = ans.answer;
                            const b = new Date(pc.first_date);
                            const c = new Date(pc.second_date);

                            if (!dq.show_date)
                                for (const d of [a, b, c]) {
                                    d.setYear(1970);
                                    d.setMonth(0);
                                    d.setDate(1);
                                }
                            if (!dq.show_time)
                                for (const d of [a, b, c]) {
                                    d.setHours(0);
                                    d.setMinutes(0);
                                    d.setSeconds(0);
                                }

                            switch (pc.date_op) {
                                case "le":
                                    if (a <= b) break;
                                    else continue;
                                case "lt":
                                    if (a < b) break;
                                    else continue;
                                case "ge":
                                    if (a >= b) break;
                                    else continue;
                                case "gt":
                                    if (a > b) break;
                                    else continue;
                                case "bw":
                                    if (b <= a && a <= c) break;
                                    else continue;
                                case "nb":
                                    if (a < b || c < a) break;
                                    else continue;
                            }
                        }
                    }
                }
            }

            for (let qi = 0; qi < dpage.questions.length; qi++) {
                const dq = dpage.questions[qi];
                const q = page.questions[qi];

                if (dq.id !== q.id || dq.type !== q.type) throw 0;

                let empty = false;

                if (data.external) {
                    let answer = form.answers[dq.id];

                    if (["short", "long", "date"].includes(dq.type)) {
                        if (!answer)
                            if (dq.required) throw 0;
                            else empty = true;
                    } else if (dq.type === "number") {
                        if (answer == undefined)
                            if (dq.required) throw 0;
                            else empty = true;
                    } else if (dq.type === "mcq") {
                        if (dq.max === 1) {
                            if (answer == undefined)
                                if (dq.required) throw 0;
                                else empty = true;
                        } else if (!answer?.length)
                            if (dq.required) throw 0;
                            else empty = true;
                    }

                    if (dq.use_validation)
                        try {
                            const request = await fetch(
                                `${data.external_url}/validation/${dq.id}`,
                                {
                                    method: "post",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        user: reader?.id ?? null,
                                        answer: answer,
                                    }),
                                },
                            );

                            if (!request.ok) throw 1;

                            const response = await request.json();
                            if (response) throw 0;
                        } catch (error) {
                            throw typeof error === "number" ? error : 1;
                        }

                    if (dq.type === "date" && !empty) answer = new Date(answer);

                    if (!empty)
                        answers.push({
                            id: dq.id,
                            question: dq.question,
                            answer: ["short", "long", "number"].includes(dq.type)
                                ? answer
                                : dq.type === "mcq"
                                ? (dq.max === 1 ? [answer] : answer).map((x: number) => ({
                                      index: x,
                                      text: dq.options[x],
                                  }))
                                : dq.type === "date"
                                ? answer
                                : null,
                            ...(dq.type === "date"
                                ? { show_date: dq.show_date, show_time: dq.show_time }
                                : {}),
                        });
                    else answers.push({ id: dq.id, question: dq.question });
                } else {
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
                            else if (dq.type === "short")
                                q.value = q.value.replace(/\r\f|\n/g, " ");
                            else;
                        else if (dq.required) throw 0;
                        else empty = true;
                    else if (dq.type === "number")
                        if (q.value != undefined)
                            if (dq.min != undefined && q.value < dq.min) throw 0;
                            else if (dq.max != undefined && q.value > dq.max) throw 0;
                            else if (!dq.float && q.value % 1 !== 0) throw 0;
                            else;
                        else if (dq.required) throw 0;
                        else empty = true;
                    else if (dq.type === "mcq")
                        if (dq.max === 1) {
                            if (!q.value)
                                if (dq.required) throw 0;
                                else empty = true;
                        } else {
                            const length = Object.values(q.selected).filter((x) => x).length;
                            if (dq.min != undefined && length < dq.min) throw 0;
                            else if (dq.max != undefined && length > dq.max) throw 0;
                            else if (length === 0)
                                if (dq.required) throw 0;
                                else empty = true;
                        }
                    else if (dq.type === "date")
                        if ((q.date &&= new Date(q.date)))
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
                        else empty = true;

                    if (!empty)
                        answers.push({
                            id: dq.id,
                            question: dq.question,
                            answer: ["short", "long", "number"].includes(dq.type)
                                ? q.value
                                : dq.type === "mcq"
                                ? (dq.max === 1
                                      ? [dq.options.indexOf(q.value)]
                                      : Object.entries(q.selected)
                                            .filter(([, x]) => x)
                                            .map(([x]) => parseInt(x))
                                  ).map((x) => ({ index: x, text: dq.options[x] }))
                                : dq.type === "date"
                                ? q.date
                                : null,
                            ...(dq.type === "date"
                                ? { show_date: dq.show_date, show_time: dq.show_time }
                                : {}),
                            ...(dq.type === "short" && dq.short_format === "user"
                                ? { user: true }
                                : {}),
                        });
                    else answers.push({ id: dq.id, question: dq.question });
                }
            }
        }
    } catch (error) {
        if (error === 0)
            return new Response(
                data?.external
                    ? "Validation failed; either client-side is out of date or external validation changed. Use the reload button to reload data and try again without losing responses that can be retained."
                    : "Client-side may be out of date. Use the reload button to reload data without losing responses that can be retained.",
                { status: 400 },
            );
        if (error === 1)
            return new Response(
                "External validation failed; this is an issue with the form creator's API. Reloading using the reload button will reload data and allow you to try again without losing responses that can be retained, which may resolve the issue.",
                { status: 400 },
            );

        console.error(error);
        return new Response("An unexpected error occurred.", { status: 500 });
    }

    const sid = await DB.autoinc(`forms/${data.id}`);
    const submission: any = { id: data.id, sid, answers, user: null };

    let author: User | null = null;

    if (data.collect_names) {
        try {
            author = await hq_bot.users.fetch((submission.user = reader.id));
        } catch {}
    }

    await DB.Forms.submit(submission);

    if (data.post_to_webhook && data.webhook) {
        const questions: Record<number, any> = {};

        for (const page of data.pages)
            for (const question of page.questions) questions[question.id] = question;

        if (data.webhook.match(webhook_regex))
            try {
                const fields: { name: string; value: string }[] = [
                    {
                        name: "Links",
                        value: `- [View Form](${PUBLIC_DOMAIN}/form/${data.id})\n- [View Full Submission](${PUBLIC_DOMAIN}/forms/submissions/${data.id}?sub=${sid})`,
                    },
                ];

                const template: any = { color: parseInt(data.embed_color, 16) };
                let length = 16;

                if (submission.user) {
                    if (author) {
                        const tag = author.tag.endsWith("#0") ? `@${author.username}` : author.tag;

                        template.author = {
                            url: `https://discord.com/users/${author.id}`,
                            icon_url: author.displayAvatarURL({ size: 64 }),
                            name: tag,
                        };

                        length += tag.length;

                        template.footer = { text: `User ID: ${author.id}` };
                        length += author.id.length + 12;
                    } else {
                        template.author = { text: submission.user };
                        length += submission.user.length;
                    }
                }

                template.footer ??= { text: "" };

                for (const answer of data.only_post_link ? [] : submission.answers) {
                    if (!("answer" in answer)) continue;

                    const question = questions[answer.id];
                    if (!question || question.hide) continue;

                    let display: string =
                        question.type === "short"
                            ? answer.answer
                            : question.type === "long"
                            ? answer.answer
                            : question.type === "number"
                            ? `\`${answer.answer}\``
                            : question.type === "mcq"
                            ? answer.answer.map((x: any) => `- ${x.text}`).join("\n")
                            : question.type === "date"
                            ? question.show_date
                                ? question.show_time
                                    ? timeinfo(answer.answer)
                                    : timestamp(answer.answer, "D")
                                : question.show_time
                                ? timestamp(answer.answer, "T")
                                : "<no date specified>"
                            : "";

                    if (question.type === "short" && question.short_format === "user") {
                        try {
                            const user = await hq_bot.users.fetch(display);
                            display = `${user} (${
                                user.tag.endsWith("#0") ? `@${user.username}` : user.tag
                            } \`${user.id}\`)`;
                        } catch {
                            display = `Missing User: \`${display}\``;
                        }
                    }

                    let name = question.question;

                    while (display.length > 0) {
                        fields.push({ name, value: display.substring(0, 1024) });
                        name = "_ _";
                        display = display.substring(1024);
                    }
                }

                const embeds = [];

                while (fields.length > 0) {
                    const embed = JSON.parse(JSON.stringify(template));
                    embed.fields = [];
                    let thislength = length;

                    if (embeds.length === 0) {
                        embed.title = data.name;
                        thislength += data.name.length;
                    }

                    while (embed.fields.length < 25 && fields.length > 0) {
                        thislength += fields[0].name.length + fields[0].value.length;
                        if (thislength > 6000) break;

                        embed.fields.push(fields.shift());
                    }

                    embeds.push(embed);
                }

                if (!data.only_post_link && embeds.length > 1)
                    embeds.forEach(
                        (embed, index) =>
                            (embed.footer.text += `${embed.footer.text ? " | " : ""}Embed ${
                                index + 1
                            } / ${embeds.length}`),
                    );

                let first = true;

                for (const embed of embeds) {
                    const request: any = { embeds: [embed] };

                    if (data.is_forum)
                        if (first) {
                            if (data.naming_scheme === -1)
                                request.thread_name = data.forum_post_name;
                            else if (data.naming_scheme === 0)
                                request.thread_name = author
                                    ? author.tag.replace(/#0$/, "")
                                    : "Missing User";
                            else
                                request.thread_name = submission.answers.find(
                                    (x: any) => x.id === data.naming_scheme,
                                ).answer;
                        }

                    const req = await fetch(
                        `${data.webhook}${data.is_forum && first ? "?wait=true" : ""}`,
                        {
                            method: "post",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(request),
                        },
                    );

                    if (data.is_forum && first) {
                        const res = await req.json();
                        if (!req.ok) throw JSON.stringify(res);
                        data.webhook += `?thread_id=${res.channel_id}`;
                    }

                    first = false;
                }
            } catch (error) {
                console.error(error);
            }
        else
            try {
                submission.answers = answers.filter((x) => !questions[x.id].hide);
                delete submission._id;

                const headers: any = { "Content-Type": "application/json" };
                const body = JSON.stringify(submission);

                if (data.secret) {
                    const timestamp = new Date().getTime();
                    const nonce = Math.floor(Math.random() * 1000000000);

                    headers["X-Signature-Timestamp"] = timestamp.toString();
                    headers["X-Signature-Nonce"] = nonce.toString();

                    headers["X-Signature-Hash"] = Buffer.from(
                        await crypto.subtle.digest(
                            "SHA-512",
                            new TextEncoder().encode(
                                `${timestamp}:${nonce}:${data.secret}:${body}`,
                            ),
                        ),
                    ).toString("hex");
                }

                await fetch(data.webhook, { method: "post", headers, body });
            } catch {}
    }

    return new Response();
};
