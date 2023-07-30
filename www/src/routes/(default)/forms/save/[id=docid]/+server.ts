import type { RequestHandler } from "@sveltejs/kit";
import db from "../../../../../db.js";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { marked } from "marked";

export const POST: RequestHandler = async ({ params, request, locals }) => {
    const form = (await request.json()).form;
    let id = params.id;

    try {
        if (!(locals as any).council) throw "You are not authorized to use the TCN Forms feature.";
        if (
            id !== "new" &&
            form.author !== (locals as any).user.id &&
            !(form.editable_observers && (locals as any).observer) &&
            !(form.editable_council && (locals as any).council)
        )
            throw "You are not authorized to edit this form.";
        if (!form.name) throw "No name provided.";
        if (form.name.length > 100) throw "Name cannot exceed 100 characters.";
        if (form.collect_names && form.allow_everyone)
            throw "You cannot collect names while the form is available to everyone including logged-out users.";
        if (form.pages.length === 0) throw "At least one page is required.";
        for (let index = 0; index < form.pages.length; index++) {
            const page = form.pages[index];
            if (!page.name) throw `No name provided for page ${index + 1}.`;
            if (page.name.length > 100)
                throw `Name cannot exceed 100 characters for page ${index + 1}.`;
            if (page.description.length > 2048)
                throw `Description cannot exceed 2048 characters for page ${index + 1}.`;

            for (let qi = 0; qi < page.questions.length; qi++) {
                const question = page.questions[qi];
                if (!question.question)
                    throw `No question provided for page ${index + 1} question ${qi + 1}.`;
                if (question.question.length > 256)
                    throw `Question cannot exceed 256 characters for page ${index + 1} question ${
                        qi + 1
                    }.`;
                if (question.description.length > 1024)
                    throw `Description cannot exceed 1024 characters for page ${
                        index + 1
                    } question ${qi + 1}.`;
                if (!["short", "long", "number", "mcq", "date"].includes(question.type))
                    throw `Invalid type "${question.type}" for page ${index + 1} question ${
                        qi + 1
                    }.`;
                if (question.type === "mcq") {
                    question.selected = {};

                    if (question.options.length < 1)
                        throw `At least one option is required for page ${
                            index + 1
                        } multiple choice question ${qi + 1}.`;
                    if (question.options.some((x: string) => !x))
                        throw `All options must be non-empty for page ${
                            index + 1
                        } multiple choice question ${qi + 1}.`;
                    if (question.dropdown && (question.min !== 1 || question.max !== 1))
                        throw `Dropdown display is only allowed if min = max = 1 for page ${
                            index + 1
                        } multiple choice question ${qi + 1}.`;
                    if (
                        (question.min != undefined && question.options.length < question.min) ||
                        (question.min != undefined && question.options.length < question.max)
                    )
                        throw `Minimum and maximum required options must be at most the number of options for page ${
                            index + 1
                        } question ${qi + 1}.`;
                }
                if (question.type === "date")
                    if (!question.show_date && !question.show_time)
                        throw `Either the date or time must be shown for page ${
                            index + 1
                        } date question ${qi + 1}.`;
                if (
                    ["short", "long", "number", "mcq"].includes(question.type) &&
                    question.min != undefined &&
                    question.max != undefined &&
                    question.min > question.max
                )
                    throw `Min must be less than or equal to max for page ${index + 1} question ${
                        qi + 1
                    }.`;
            }
        }
        if (form.embed_color && !form.embed_color.match(/^[0-9a-f]{6}$/i))
            throw "Embed color must be a 6-digit hex number.";

        form.embed_title ||= form.allow_everyone ? form.name : "TCN Form";
        form.embed_body ||= form.allow_everyone ? "" : "Sign in to view this form.";
        form.embed_color ||= "2b2d31";

        if (id === "new") {
            while (true) {
                id = new Array(32)
                    .fill(0)
                    .map(
                        (x) =>
                            "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 36)],
                    )
                    .join("");
                if (!(await db.forms.findOne({ id }))) break;
            }
        } else {
            const data = await db.forms.findOne({ id });
            if (!data) throw "This form no longer exists.";
            if (data.author !== (locals as any).user.id) throw "You may only edit your own forms.";
        }

        try {
            const window: any = new JSDOM("").window;
            const purify = DOMPurify(window);

            for (const page of form.pages) {
                page.parsed_description = purify.sanitize(marked.parse(page.description));

                for (const question of page.questions) {
                    question.parsed_description = purify.sanitize(
                        marked.parse(question.description),
                    );
                }
            }
        } catch (error) {
            console.error(error);
            throw "An error occurred parsing your form's markdown.";
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ error }));
    }

    await db.forms.findOneAndUpdate(
        { id },
        { $set: { ...form, author: (locals as any).user.id, time: new Date() } },
        { upsert: true },
    );

    return new Response(JSON.stringify({ id }));
};