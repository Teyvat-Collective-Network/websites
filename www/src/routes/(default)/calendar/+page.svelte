<script context="module" lang="ts">
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
</script>

<script lang="ts">
    import Invite from "$lib/Invite.svelte";
    import { Modal } from "@daedalus-discord/webkit";
    import { dark_mode } from "$lib/stores";

    const open: { [key: string]: boolean } = {};
    let sx: number = 0;

    const base = new Date();
    base.setHours(0);
    base.setMinutes(0);
    base.setSeconds(0);
    base.setMilliseconds(0);

    let x: Date = new Date();
    setInterval(() => (x = new Date()), 1000);

    const dates = [...new Array(60).keys()].map((x) => {
        const k = new Date();
        k.setDate(k.getDate() + x - 3);
        return k;
    });

    export let data: any;

    const f = (e: any) => (sx = e.target.scrollLeft);
</script>

<div class="container">
    <div id="main">
        <h3 class="row" style="gap: 10px">
            Events &amp; Other Dates
            {#if data.observer}
                <a href="/admin/calendar"><i class="material-icons">edit</i></a>
            {/if}
            {#if data.council}
                <a href="/add-event"><i class="material-icons">add</i></a>
            {/if}
        </h3>

        <div id="calendar-box" on:scroll={f}>
            <div id="calendar">
                {#each data.events as track, ti}
                    <div class="track">
                        {#each track as event, ei}
                            {@const id = `${ti}-${ei}`}
                            {@const x = (event.start - base.getTime()) / 86400000 + 3}
                            {@const y = (event.end - event.start) / 86400000}
                            <button
                                class="unset event"
                                style="left: {x * 55}px; width: {55 * y -
                                    15}px; background-color: #{$dark_mode
                                    ? event.dark
                                    : event.light}"
                                on:click={() => (open[id] = true)}
                            >
                                <div style="padding-left: calc({sx}px - {x * 55 + 20}px)">
                                    {event.name}
                                </div>
                            </button>

                            <Modal
                                open={open[id]}
                                on:close={() => (open[id] = false)}
                                background_color="var(--background-1)"
                                overlay_color="rgb(var(--pure-rgb), 80%)"
                            >
                                <h2>{event.name}</h2>
                                {@html event.body}

                                {#if event.invite_data?.length}
                                    <br /><br /><br />
                                    <div class="invites">
                                        {#each event.invite_data as invite}
                                            <Invite
                                                code={invite.code}
                                                icon={invite.icon}
                                                title={invite.name}
                                                banner={invite.banner}
                                            />
                                        {/each}
                                    </div>
                                {/if}
                            </Modal>
                        {/each}
                    </div>
                {/each}

                {#each dates as d, i}
                    <div class="vline dateline" style="left: {i * 55 + 17}px">
                        <span class="plain less">
                            {#if d.getDate() === 1}
                                <b>{months[d.getMonth()]}</b>
                            {:else}
                                {weekdays[d.getDay()]}
                            {/if}
                        </span>

                        <span class="plain more">{d.getDate()}</span>
                    </div>
                {/each}

                <div
                    class="vline timeline"
                    style="left: {179 + ((x.getTime() - base.getTime()) / 86400000) * 55}px"
                >
                    <span class="plain current">
                        {x.getHours()}:{x.getMinutes().toString().padStart(2, "0")}:{x
                            .getSeconds()
                            .toString()
                            .padStart(2, "0")}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

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
        width: calc(50px * 59 + 5px * 58);
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
        font-size: 80%;

        & > div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 5px;
            background-color: var(--background-1);
            opacity: 0;
            transition: opacity 250ms;
        }

        &:hover::after {
            opacity: 20%;
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
        padding-top: 35px;

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
            padding: 5px 4px 0 4px;
            height: 20px;
            font-size: 16px;
            border-radius: 3px;
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

    .invites {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
</style>
