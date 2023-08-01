<script lang="ts">
    import { goto } from "$app/navigation";
    import { page as page_store } from "$app/stores";
    import { PUBLIC_DOMAIN } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import DatetimePicker from "$lib/DatetimePicker.svelte";
    import Menu from "$lib/Menu.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import { email_regex, url_regex } from "$lib/util";
    import { Textarea } from "@daedalus-discord/webkit";
    import { onMount } from "svelte";
    import { update } from "../../+layout.svelte";
    import ConfirmLeave from "$lib/ConfirmLeave.svelte";

    export let data: any;

    let width = 0;
    let scroll = 0;

    async function del() {
        if (
            confirm(
                "Are you sure you want to delete this form? It will become inaccessible and appear as though it does not exist to everyone, including yourself, except TCN observers.",
            )
        ) {
            const request = await fetch(`/forms/delete/${data.form.id}`, {
                method: "post",
                body: "",
            });
            const { error } = await request.json();

            if (error) alert(error);
            else {
                alert("Deleted.");
                goto("/forms");
            }
        }
    }

    onMount(() => {
        function replace_links() {
            for (const element of document.querySelectorAll(".desc a") as any) {
                element.target = "_blank";
                element.rel = "noreferrer";
            }
        }

        replace_links();
        page_store.subscribe(() => replace_links());
    });

    let page_index = 0;
    let page: any;
    $: page = data.form.pages?.[page_index];

    async function check_required() {
        let good = true;

        for (let index = 0; index < page.questions.length; index++) {
            const q = page.questions[index];

            if (["short", "long"].includes(q.type))
                if (q.value)
                    if (
                        q.type === "short" &&
                        q.short_format === "email" &&
                        !q.value.match(email_regex)
                    )
                        q.failed = q.text_format_error || "Input must be an email address.";
                    else if (
                        q.type === "short" &&
                        q.short_format === "url" &&
                        !q.value.match(url_regex)
                    )
                        q.failed = q.text_format_error || "Input must be a URL.";
                    else if (
                        q.type === "short" &&
                        q.short_format === "user" &&
                        (!q.value.match(/^\d{17,20}$/) ||
                            !(await fetch(`/api/get-tag/${q.value}`)).ok)
                    )
                        q.failed = q.text_format_error || "Input must be a valid user ID.";
                    else if (
                        (q.type !== "short" || q.short_format === "none") &&
                        q.min != undefined &&
                        q.value.length < q.min
                    )
                        q.failed =
                            q.low_error ||
                            `Input must be at least ${q.min} character${
                                q.min === 1 ? "" : "s"
                            } long.`;
                    else if (
                        (q.type !== "short" || q.short_format === "none") &&
                        q.max != undefined &&
                        q.value.length > q.max
                    )
                        q.failed =
                            q.high_error ||
                            `Input must be at most ${q.max} character${
                                q.max === 1 ? "" : "s"
                            } long.`;
                    else q.failed = false;
                else q.failed = q.required && "This question is required.";
            if (q.type === "number")
                if (q.value != undefined)
                    if (q.min != undefined && q.value < q.min)
                        q.failed = q.low_error || `Input must be at least ${q.min}.`;
                    else if (q.max != undefined && q.value > q.max)
                        q.failed = q.high_error || `Input must be at most ${q.max}.`;
                    else if (!q.float && q.value % 1 !== 0)
                        q.failed = q.integer_error || "Input must be an integer.";
                    else q.failed = false;
                else q.failed = q.required && "This question is required.";
            if (q.type === "mcq")
                if (q.max === 1)
                    if (q.value) q.failed = false;
                    else q.failed = q.required && "This question is required.";
                else {
                    const length = Object.values(q.selected).filter((x) => x).length;
                    if (q.min != undefined && length < q.min)
                        q.failed =
                            q.low_error ||
                            `Select at least ${q.min} option${q.min === 1 ? "" : "s"}.`;
                    else if (q.max != undefined && length > q.max)
                        q.failed =
                            q.high_error ||
                            `Select at most ${q.max} option${q.max === 1 ? "" : "s"}.`;
                    else q.failed = length === 0 && q.required && "This question is required.";
                }
            if (q.type === "date")
                if (q.date)
                    if (q.show_date && q.relative_time === "past") {
                        if (!q.show_time) {
                            q.date.setHours(0);
                            q.date.setMinutes(0);
                            q.date.setSeconds(0);
                        }

                        q.failed =
                            q.date > new Date() &&
                            (q.time_error || "The selected time must be in the past.");
                    } else if (q.show_date && q.relative_time === "future") {
                        if (!q.show_time) {
                            q.date.setHours(23);
                            q.date.setMinutes(59);
                            q.date.setSeconds(59);
                        }

                        q.failed =
                            q.date < new Date() &&
                            (q.time_error || "The selected time must be in the future.");
                    } else q.failed = false;
                else q.failed = q.required && "This question is required.";

            if (q.failed) good = false;

            page.questions[index] = q;
        }

        return good;
    }

    let wait = false;

    async function submit() {
        wait = true;

        const request = await fetch(`/form/${data.form.id}/submit`, {
            method: "post",
            body: JSON.stringify(data.form),
        });

        if (!request.ok) {
            alert(await request.text());
            wait = false;
        } else alert("Submitted!"), goto("/");
    }

    let reload_success = false;

    async function reload() {
        const request = await fetch(`/form/${data.form.id}/data`);
        const d = await request.json();

        if (d.missing) {
            alert("The form was deleted and no longer exists.");
            goto("/");
        }

        if (d.unauthorized) {
            alert("You have lost access to this form.");
            goto("/");
        }

        if (data.access && !d.access) alert("You have lost access to submitting to this form.");
        data.access = d.access;

        const questions = data.form.pages.reduce(
            (x: any, y: any) => y.questions.reduce((o: any, i: any) => ({ ...o, [i.id]: i }), x),
            {},
        );

        for (const page of d.form.pages) {
            for (const q of page.questions) {
                const c = questions[q.id];
                if (!c) continue;

                q.value = c.value;
                q.date = c.date;

                if (c.selected)
                    q.options.forEach((o: any, i: number) => {
                        if (c.selected[c.options.indexOf(o)]) q.selected[i] = true;
                    });
            }
        }

        for (const key of [
            "allow_council",
            "allow_everyone",
            "allow_logged_in",
            "allowlist",
            "collect_names",
            "name",
            "pages",
        ])
            data.form[key] = d.form[key];

        page_index = 0;

        setTimeout(update, 500);

        reload_success = true;
        setTimeout(() => (reload_success = false), 1500);
    }

    const questions: any = {};

    if (data.form.pages)
        for (const question of data.form.pages.flatMap((page: any) => page.questions))
            questions[question.id] = question;

    function show_page(page: any) {
        if (!page?.condition?.source) return true;

        const pc = page.condition;

        if (pc.source === -1) {
            if (data.observer) return !!pc.council_observer;
            if (data.owner) return !!pc.council_owner;
            if (data.advisor) return !!pc.council_advisor;
            return !!pc.council_other;
        }

        const question = questions[pc.source];
        if (!question) return true;

        if (question.type === "number") {
            const a = question.value;

            if (a == undefined) return pc.number_default;

            const b = pc.number_value;

            switch (pc.number_op) {
                case "gt":
                    return a > b;
                case "ge":
                    return a >= b;
                case "eq":
                    return a === b;
                case "le":
                    return a <= b;
                case "lt":
                    return a < b;
                case "ne":
                    return a !== b;
            }
        } else if (question.type === "mcq") {
            const selected = new Set<string>();

            if (question.max === 1) {
                if (question.value != undefined) selected.add(question.value);
            } else
                for (const [k, v] of Object.entries(question.selected))
                    if (v) selected.add(question.options[k]);

            const keys = Object.entries(pc.options).filter(([, y]) => y);
            const f = keys[pc.mcq_anyall === "any" ? "some" : "every"].bind(keys);

            return f(([x]) => selected.has(x) === (pc.mcq_mode === "yes"));
        } else if (question.type === "date") {
            const a = question.date;

            if (a == undefined) return pc.date_default;

            const b = new Date(pc.first_date);
            const c = new Date(pc.second_date);

            if (!question.show_date)
                for (const d of [a, b, c]) {
                    d?.setYear(1970);
                    d?.setMonth(0);
                    d?.setDate(1);
                }
            if (!question.show_time)
                for (const d of [a, b, c]) {
                    d?.setHours(0);
                    d?.setMinutes(0);
                    d?.setSeconds(0);
                }

            switch (pc.date_op) {
                case "le":
                    return a <= b;
                case "lt":
                    return a < b;
                case "ge":
                    return a >= b;
                case "gt":
                    return a > b;
                case "bw":
                    return b <= a && a <= c;
                case "nb":
                    return a < b || c < a;
            }
        }

        return true;
    }
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scroll} />

<ConfirmLeave />

<a
    id="top"
    class="row"
    href={"javascript:void(0)"}
    on:click={() => scrollTo({ top: 0 })}
    style="opacity: {scroll ? 1 : 0}"
>
    <i class="material-icons">expand_less</i>
</a>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Teyvat Collective Network" />
        <meta name="keywords" content="teyvat, collective, network, tcn, genshin, impact" />
        <meta name="author" content="TCN Dev Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={data.form.embed_title} />
        <meta property="og:description" content={data.form.embed_body} />
        <meta property="og:url" content="{PUBLIC_DOMAIN}/form/{data.form.id}" />
        {#if data.form.embed_image}
            <meta property="og:image" content={data.form.embed_image} />
            {#if !data.form.thumbnail}
                <meta name="twitter:card" content="summary_large_image" />
            {/if}
        {/if}
        <meta name="theme-color" data-react-helmet="true" content="#{data.form.embed_color}" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />

        <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="stylesheet" type="text/css" href="/styles/{data.dark ? 'dark' : 'light'}.css" />
        <link rel="stylesheet" type="text/css" href="/styles/stylesheet.css" />

        <style lang="scss">
            @keyframes fade-from-left {
                from {
                    opacity: 0%;
                    transform: translateX(-1vw);
                }

                to {
                    opacity: 100%;
                    transform: translateY(0);
                }
            }

            @for $index from 1 to 47 {
                #main > :nth-child(#{$index}) {
                    animation: fade-from-left 500ms calc(25ms * $index) backwards;
                }
            }
        </style>

        <title>TCN</title>
    </head>

    <body>
        <Menu bind:dark={data.dark} {data} user={data.user} api_user={data.api_user} />
        <Navbar />
        <div id="slot">
            <div class="container">
                <div id="main">
                    {#if data.missing}
                        <Callout style="red">
                            <p>
                                There is no form with ID <code>{data.id}</code>, or it has been
                                deleted.
                            </p>
                        </Callout>
                    {:else if data.unauthorized}
                        <Callout style="red">
                            <p>You are not authorized to view this form.</p>
                        </Callout>
                    {:else}
                        {#if data.form.deleted}
                            <Callout style="red">
                                <p>
                                    This form has been deleted. You are able to see it only because
                                    you are an observer.
                                </p>
                            </Callout>
                            <br />
                        {/if}
                        {#if !data.access}
                            <Callout style="red">
                                <p>
                                    You are not allowed to submit to this form, but you are able to
                                    see it because you are an observer.
                                </p>
                            </Callout>
                            <br />
                        {/if}
                        <Callout style="info">
                            <p>
                                This form is user-generated content and is not endorsed by the
                                Teyvat Collective Network. Please report abuse to any of our
                                <a href="/contact">observers</a>.
                            </p>
                        </Callout>
                        <br />
                        {#if data.form.allow_logged_in || data.form.allow_everyone}
                            <Callout style="info">
                                <p>This form is configured to be publicly visible.</p>
                            </Callout>
                        {:else}
                            <Callout style="red">
                                <p>
                                    This form is not publicly visible. Do not share it with people
                                    unless permitted by the author.
                                </p>
                            </Callout>
                        {/if}
                        <h3>
                            {data.form.name}
                            {#if data.form.author === data.user?.id || (data.form.editable_observers && data.observer) || (data.form.editable_council && data.council)}&nbsp;<a
                                    href="/forms/edit/{data.form.id}"
                                    ><i class="material-icons">edit</i></a
                                >{/if}
                            {#if data.form.author.id === data.user?.id || data.observer}&nbsp;<a
                                    href={"javascript:void(0)"}
                                    on:click={del}
                                    style="color: var(--red-text)"
                                    ><i class="material-icons">delete</i></a
                                >{/if}
                        </h3>
                        <p>
                            <b>
                                {#if data.form.collect_names}
                                    This form will include your username/ID on submission.
                                {:else}
                                    This form is anonymous and will not include your username/ID on
                                    submission.
                                {/if}
                            </b>
                        </p>
                        <hr />
                        <p class="row" style="gap: 10px">
                            <button on:click={reload}>Reload Data / Back To Start</button>
                            {#if reload_success}
                                <i class="material-icons" style="color: var(--green-text)">check</i>
                            {/if}
                        </p>
                        <div class="panel">
                            <h4>{page?.name ?? "Submit"}</h4>
                            {#if page}
                                <span class="markdown">
                                    {@html page.description}
                                </span>
                            {:else}
                                <p>
                                    You have completed this form. You can go back to edit your
                                    answers or click the submit button to submit your responses. You
                                    will not be able to edit or view your responses afterwards.
                                </p>
                            {/if}
                            {#each page?.questions ?? [] as q, qi}
                                <div
                                    class="panel"
                                    style="background-color: var(--background-1); outline: {q.failed
                                        ? '2px solid var(--red-text)'
                                        : ''}"
                                >
                                    <h5>
                                        {q.question}
                                        {#if q.required}
                                            <span style="color: var(--text-secondary)">
                                                [required]
                                            </span>
                                        {/if}
                                    </h5>
                                    <span class="markdown">
                                        {@html q.description}
                                    </span>
                                    {#if q.type === "short"}
                                        <input
                                            type="text"
                                            bind:value={q.value}
                                            minlength={q.short_format === "none" ? q.min : null}
                                            maxlength={q.short_format === "none" ? q.max : null}
                                        />
                                    {:else if q.type === "long"}
                                        <Textarea
                                            bind:value={q.value}
                                            minlength={q.min}
                                            maxlength={q.max}
                                        />
                                    {:else if q.type === "number"}
                                        <input
                                            type="number"
                                            bind:value={q.value}
                                            min={q.min}
                                            max={q.max}
                                        />
                                    {:else if q.type === "mcq"}
                                        {#if q.dropdown}
                                            <select bind:value={q.value}>
                                                <option disabled selected hidden />
                                                {#each q.options as option}
                                                    <option>{option}</option>
                                                {/each}
                                            </select>
                                        {:else}
                                            {#each q.options as option, index}
                                                {@const disabled =
                                                    !q.selected[index] &&
                                                    q.max != undefined &&
                                                    Object.values(q.selected).filter((x) => x)
                                                        .length >= q.max}

                                                {#if q.max === 1}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="input-page-{page_index}-question-{qi}"
                                                            value={option}
                                                            bind:group={q.value}
                                                            style="--background: var(--background-3)"
                                                        />
                                                        {option}
                                                    </label>
                                                {:else}
                                                    <div>
                                                        <span
                                                            style="position: relative; display: inline-block"
                                                        >
                                                            {#if disabled}
                                                                <hr
                                                                    style="position: absolute; left: -10px; right: -10px; top: 20%; z-index: 1; border: 1px solid var(--text-secondary)"
                                                                />
                                                            {/if}
                                                            <label style="position: relative">
                                                                <input
                                                                    type="checkbox"
                                                                    bind:checked={q.selected[index]}
                                                                    style="background-color: var(--background-3)"
                                                                    {disabled}
                                                                />
                                                                {option}
                                                            </label>
                                                        </span>
                                                    </div>
                                                {/if}
                                            {/each}
                                        {/if}
                                    {:else if q.type === "date"}
                                        <DatetimePicker
                                            bind:value={q.date}
                                            show_date={q.show_date}
                                            show_time={q.show_time}
                                        />
                                    {/if}
                                    {#if q.failed}
                                        <p style="color: var(--red-text)">{q.failed}</p>
                                    {/if}
                                </div>
                            {/each}
                            <p class="row">
                                {#if page_index !== 0}
                                    <button
                                        on:click={() => {
                                            while (!show_page(data.form.pages[--page_index]));
                                        }}>Back</button
                                    >
                                {/if}
                                <span style="flex-grow: 1" />
                                {#if page_index < data.form.pages.length}
                                    <button
                                        on:click={async () => {
                                            if (!(await check_required())) return;
                                            while (!show_page(data.form.pages[++page_index]));
                                        }}
                                    >
                                        Next
                                    </button>
                                {:else}
                                    <button on:click={() => submit()} disabled={wait}>
                                        Submit!
                                    </button>
                                {/if}
                            </p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </body>
</html>

<style lang="scss">
    :global {
        .markdown {
            blockquote {
                margin-left: 0px;
                padding-left: 25px;
                border-left: 2px solid var(--text-secondary);
            }

            table {
                width: 100%;
            }

            table,
            tr,
            th,
            td {
                border: 1px solid rgb(var(--invert-rgb), 32%);
                border-collapse: collapse;
            }

            td,
            th {
                padding: 5px;
            }
        }
    }
</style>
