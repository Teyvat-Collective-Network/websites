<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { PUBLIC_DOMAIN } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import Menu from "$lib/Menu.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";

    export let data: any;

    const offset = new Date().getTimezoneOffset();

    let width = 0;
    let scroll = 0;

    async function del() {
        if (
            confirm(
                "Are you sure you want to delete this document? It will become inaccessible and appear as though it does not exist to everyone, including yourself, except TCN observers.",
            )
        ) {
            const request = await fetch(`/docs/delete/${data.doc.id}`, {
                method: "post",
                body: "",
            });
            const { error } = await request.json();

            if (error) alert(error);
            else {
                alert("Deleted.");
                goto("/docs");
            }
        }
    }

    onMount(() => {
        function replace_links() {
            for (const element of document.querySelectorAll("#content a") as any) {
                element.target = "_blank";
                element.rel = "noreferrer";
            }
        }

        replace_links();
        page.subscribe(() => replace_links());
    });
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scroll} />

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

    <body>
        <Menu bind:dark={data.dark} {data} user={data.user} api_user={data.api_user} />
        <Navbar />
        <div id="slot">
            <div class="container">
                <div id="main">
                    {#if data.missing}
                        <Callout style="red">
                            <p>
                                There is no document with ID <code>{data.id}</code>, or it has been
                                deleted.
                            </p>
                        </Callout>
                        <br />
                        <a href="/docs">Docs Home</a>
                    {:else if data.unauthorized}
                        <Callout style="red">
                            <p>You are not authorized to view this document.</p>
                        </Callout>
                    {:else}
                        {#if data.doc.deleted}
                            <Callout style="red">
                                <p>
                                    This document has been deleted. You are able to see it only
                                    because you are an observer.
                                </p>
                            </Callout>
                            <br />
                        {/if}
                        <Callout style="info">
                            <p>
                                {#if data.doc.official}
                                    This is an official document as designated by the observer team.
                                    {#if data.observer}
                                        <a href="/docs/demote/{data.doc.id}">[remove designation]</a
                                        >
                                    {/if}
                                {:else}
                                    This document is user-generated content and is not endorsed by
                                    the Teyvat Collective Network. Please report abuse to any of our
                                    <a href="/contact">observers</a>.
                                {/if}
                            </p>
                        </Callout>
                        <br />
                        {#if data.doc.allow_logged_in || data.doc.allow_everyone}
                            <Callout style="info">
                                <p>This document is configured to be publicly visible.</p>
                            </Callout>
                        {:else}
                            <Callout style="red">
                                <p>
                                    This document is not publicly visible. Do not share it with
                                    people unless permitted by the author.
                                </p>
                            </Callout>
                        {/if}
                        <h3>
                            {data.doc.name}
                            {#if (data.doc.author && data.doc.author.id === data.user?.id) || (data.doc.editable_observers && data.observer) || (data.doc.editable_council && data.council)}&nbsp;<a
                                    href="/docs/edit/{data.doc.id}"
                                    ><i class="material-icons">edit</i></a
                                >{/if}
                            {#if data.doc.author.id === data.user?.id || data.observer}&nbsp;<a
                                    href={"javascript:void(0)"}
                                    on:click={del}
                                    style="color: var(--red-text)"
                                    ><i class="material-icons">delete</i></a
                                >{/if}
                        </h3>
                        {#if data.doc.author}
                            <p>
                                Written by
                                <span class="mention" data-id={data.doc.author.id}>
                                    {#if data.doc.author.missing}
                                        <div class="material-icons">pin</div>
                                        &nbsp;
                                        <code class="plain" style="padding: 0"
                                            >{data.doc.author.id}</code
                                        >
                                    {:else}
                                        <i class="material-icons">alternate_email</i>
                                        <b>{data.doc.author.username}</b
                                        >{#if data.doc.author.discriminator !== "0"}#{data.doc
                                                .author.discriminator}{/if}
                                    {/if}
                                </span>{#if data.doc.anon}
                                    <b>(anonymously)</b
                                    >{/if}{#if data.doc.editable_observers || data.doc.editable_council}
                                    (editable by {data.doc.editable_council
                                        ? "the TCN Council"
                                        : "TCN observers"}){/if}.
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
                            >) may also be clickable to copy an ID. Channel mentions may be
                            clickable to open them in your Discord client (they will appear as
                            links). Click on times (not dates) to copy the timestamp.
                        </p>
                        <p>
                            Times are being displayed in your detected timezone,
                            <b>{Intl.DateTimeFormat().resolvedOptions().timeZone}</b>
                            (UTC{offset === 0
                                ? ""
                                : `${offset > 0 ? "-" : "+"}${Math.floor(Math.abs(offset) / 60)}:${(
                                      Math.abs(offset) % 60
                                  )
                                      .toString()
                                      .padStart(2, "0")}`}).
                        </p>
                        <hr />
                        <div id="content">
                            {@html data.doc.parsed}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </body>
</html>

<style lang="scss">
    :global {
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
