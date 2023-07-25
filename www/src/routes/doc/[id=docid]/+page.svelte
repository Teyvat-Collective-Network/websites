<script lang="ts">
    import { PUBLIC_DOMAIN } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import { onMount } from "svelte";

    export let data: any;

    const offset = new Date().getTimezoneOffset();

    onMount(async () => {
        document.addEventListener("click", (e) => {
            const target = e.target as any;

            if (!target.classList.contains("mention")) return;
            if (!target.dataset.id) return;

            navigator.clipboard.writeText(target.dataset.id);
            target.style.backgroundColor = "var(--green-callout)";
            setTimeout(() => (target.style.backgroundColor = ""), 1000);
        });

        for (const element of document.querySelectorAll("span.time") as any) {
            const timestamp = parseInt(element.dataset.timestamp);
            element.innerHTML = new Date(timestamp * 1000 - offset * 60000)
                .toISOString()
                .replace("T", "&nbsp;&nbsp;")
                .slice(0, -5);
        }

        for (const element of document.querySelectorAll(".user") as any) {
            const id = element.dataset.id;

            try {
                const request = await fetch(`/api/get-tag/${id}`);
                const response = await request.text();

                const inner = response.endsWith("#0")
                    ? `<b>${response.slice(0, -2)}</b>`
                    : `<b>${response.slice(0, -5)}</b>${response.slice(-5)}`;

                element.outerHTML = `<span class="mention" data-id=${id}><i class="material-icons">alternate_email</i> ${inner}</span>`;
            } catch {
                element.outerHTML = `<span class="mention" data-id=${id}><i class="material-icons">pin</i> &nbsp; <code class="plain" style="padding: 0">${id}</code></span>`;
            }
        }
    });
</script>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Teyvat Collective Network" />
        <meta name="keywords" content="teyvat, collective, network, tcn, genshin, impact" />
        <meta name="author" content="TCN Dev Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={data.doc.embed_title} />
        <meta property="og:description" content={data.doc.embed_body} />
        <meta property="og:url" content="{PUBLIC_DOMAIN}/doc/{data.doc.id}" />
        {#if data.doc.embed_image}
            <meta property="og:image" content={data.doc.embed_image} />
            {#if !data.doc.thumbnail}
                <meta name="twitter:card" content="summary_large_image" />
            {/if}
        {/if}
        <meta name="theme-color" data-react-helmet="true" content="#{data.doc.embed_color}" />

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
    <div class="container">
        <div id="main">
            {#if data.missing}
                <Callout style="red">
                    <p>
                        There is no document with ID <code>{data.id}</code>, or it has been deleted.
                    </p>
                </Callout>
            {:else if data.unauthorized}
                <Callout style="red">
                    <p>You are not authorized to view this document.</p>
                </Callout>
            {:else}
                {#if data.doc.deleted}
                    <Callout style="red">
                        <p>
                            This document has been deleted. You are able to see it only because you
                            are an observer.
                        </p>
                    </Callout>
                {/if}
                <h3>
                    {data.doc.name}
                    {#if data.doc.author.id === data.user?.id}&nbsp;<a
                            href="/docs/edit/{data.doc.id}"><i class="material-icons">edit</i></a
                        >{/if}
                </h3>
                {#if data.doc.author}
                    <p>
                        Written by
                        <span class="mention" data-id={data.doc.author.id}>
                            {#if data.doc.author.missing}
                                <div class="material-icons">pin</div>
                                &nbsp;
                                <code class="plain" style="padding: 0">{data.doc.author.id}</code>
                            {:else}
                                <i class="material-icons">alternate_email</i>
                                <b>{data.doc.author.username}</b
                                >{#if data.doc.author.discriminator !== "0"}#{data.doc.author
                                        .discriminator}{/if}
                            {/if}
                        </span>{#if data.doc.anon} <b>(anonymously)</b>{/if}.
                    </p>
                {:else}
                    <p>Anonymously Written</p>
                {/if}
                <p>
                    Click on any user mention to copy the ID. <span class="mention">
                        <i class="material-icons">pin</i> &nbsp; ###
                    </span>
                    indicates an invalid user ID. Role mentions (<span class="mention"
                        ><i class="material-icons">group</i> &nbsp; role name</span
                    >) may also be clickable to copy an ID. Channel mentions may be clickable to
                    open them in your Discord client (they will appear as links). Click on times
                    (not dates) to copy the timestamp.
                </p>
                <p>
                    Times are being displayed in your detected timezone,
                    <b>{Intl.DateTimeFormat().resolvedOptions().timeZone}</b> (UTC{offset === 0
                        ? ""
                        : `${offset > 0 ? "-" : "+"}${Math.floor(Math.abs(offset) / 60)}:${(
                              Math.abs(offset) % 60
                          )
                              .toString()
                              .padStart(2, "0")}`}).
                </p>
                <hr />
                <div>
                    {@html data.doc.parsed}
                </div>
            {/if}
        </div>
    </div>
</html>

<style lang="scss">
    :global {
        span.mention {
            position: relative;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            margin: 2px;
            top: 5px;

            background-color: var(--blue-callout);
            cursor: default;
            padding: 0px 5px;
            border-radius: 5px;
            font-size: 90%;

            &:hover::after {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 5px;
                background-color: rgb(var(--invert-rgb));
                opacity: 0.1;
            }
        }

        a span.mention {
            cursor: inherit;
        }

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
</style>
