<script lang="ts">
    import { PUBLIC_DOMAIN } from "$env/static/public";
    import Menu from "$lib/Menu.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import type { LocalsData } from "$lib/types";

    export let data: LocalsData;
    let width = 0;
    let scroll = 0;
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

        <meta property="og:title" content="Teyvat Collective Network" />
        <meta
            property="og:description"
            content="The Teyvat Collective Network is a network of high-quality Genshin Impact Discord servers, each dedicated to one character. Our mission is to unite mains servers across Teyvat, provide support, and promote collaboration."
        />
        <meta property="og:url" content={PUBLIC_DOMAIN} />
        <meta property="og:image" content="{PUBLIC_DOMAIN}/favicon.png" />
        <meta name="theme-color" data-react-helmet="true" content="#207868" />

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
                #main > :not(.do-not-move):nth-child(#{$index}) {
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
            <slot />
        </div>
    </body>
</html>

<style lang="scss">
    #slot {
        margin-bottom: 2em;
    }
</style>
