<script lang="ts">
    import Invite from "../../lib/Invite.svelte";
    import { Modal } from "@daedalus-discord/webkit";

    const open: { [key: string]: boolean } = {};
    let sx: number = 0;

    let x: number = 100;
    setInterval(() => (x += 0.02), 10);
</script>

<template lang="pug">
    mixin span(id, x, y, title, background, hover_background)
        button.unset.event(style="left: " + (x * 55) + "px; width: " + (55 * y - 15) + "px; background-color: " + background + "; --hover-background: " + hover_background, on:click!="{() => (open[" + JSON.stringify(id) + "] = true)}")
            div(style="padding-left: calc({sx}px - " + (x * 55 + 20) + "px)")!= title

    mixin modal(id)
        Modal(bind:open!="{open[" + JSON.stringify(id) + "]}", background_color="var(--background-1)", overlay_color="rgb(var(--pure-rgb), 80%)"): block

    .container
        #main
            h3 Events &amp; Other Dates
            #calendar-box(on:scroll!="{(e) => (sx = e.target.scrollLeft)}")
                #calendar
                    .track
                        +span("saccharine-confections", 4, 3, "Saccharine Confections", "#456", "#567")
                    .track
                        +span("event-banner-1", 2, 20, "Event Banner", "#111", "#123")
                        +span("event-banner-2", 22, 20, "Event Banner", "#111", "#123")
                    .track
                        +span("spiral-abyss-1", 2, 19, "Spiral Abyss", "#444", "#555")
                        +span("spiral-abyss-2", 22, 19, "Spiral Abyss", "#444", "#555")
                    .track
                        +span("election-19", 5, 10, "Wave 19 Election", "#534", "#645")
                    +each("[...new Array(101).keys()] as i")
                        .vline.dateline(style!="left: {17 + 55 * i}px")
                            span.plain.less Fr
                            span.plain.more 32
                    .vline.timeline(style!="left: {100 + x}px")
                        span.plain.current 1:23:45
    
    +modal("saccharine-confections")
        | Join Dehya Mains to participate in our latest art event!
        br
        br
        Invite(banner="https://images-ext-1.discordapp.net/external/xqHth8CbuCxM777Lk3o4LEdoBibPs8LxK_pgoEft7Dk/%3Fsize%3D4096/https/cdn.discordapp.com/banners/992162190163451984/d4dec85d82d6ca967010ab40b2b5f410.webp?width=2296&height=1292", icon="https://images-ext-2.discordapp.net/external/EBcjXzaIpsSJSShcrWY5HxBVmHomDD3zHkcq64gv_aQ/%3Fsize%3D256/https/cdn.discordapp.com/icons/992162190163451984/3dfabe30687e32e8b05af0a7bf0f4b8c.webp", title="Dehya Mains", code="dehya")

    +modal("event-banner-1")
        | Alhaitham &amp; Xiao!

    +modal("event-banner-2")
        | Hu Tao &amp; Yelan!

    +modal("spiral-abyss-1")
        | Spiral abyss.

    +modal("spiral-abyss-2")
        | Spiral abyss.
    
    +modal("election-19")
        | Wave 19 Election.
</template>

<style lang="scss">
    #calendar-box {
        position: relative;
        width: 100%;
        overflow-x: scroll;
        background-color: var(--background-2);
        border-radius: 5px;
        padding: 90px 20px 20px 20px;
    }

    #calendar {
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-radius: 5px;
        width: calc(50px * 100 + 5px * 99);
        height: calc(50px * 4 + 5px * 2);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--background-1);
        border: 4px solid var(--background-2);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--background-X);
    }

    .track {
        position: relative;
        height: 50px;
    }

    .event {
        all: unset;

        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        height: 40px;
        width: calc(100% - 10px);
        padding: 5px;
        border-radius: 5px;
        z-index: 1;
        font-weight: 400;

        transition: background-color 250ms;

        & > div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &:hover {
            background-color: var(--hover-background) !important;
        }
    }

    .vline {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: none;
        line-height: 16px;
    }

    .dateline {
        background-color: rgb(var(--invert-rgb), 15%);
        width: 1px;
        padding-top: 30px;

        & > span {
            padding: 0;
            height: 20px;
            font-size: 16px;
        }
    }

    .timeline {
        background-color: rgb(var(--accent-rgb), 75%);
        width: 3px;
        z-index: 2;

        & > span {
            margin-top: 4px;
            padding: 3px 3px 0 3px;
            height: 20px;
            font-size: 16px;
        }
    }

    .less {
        opacity: 40%;
    }

    .more {
        opacity: 80%;
    }

    .current {
        background-color: var(--background-1);
    }
</style>
