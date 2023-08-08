<script lang="ts">
    import { goto } from "$app/navigation";
    import Icon from "$lib/Icon.svelte";
    import ListButton from "$lib/ListButton.svelte";
    import { API } from "$lib/api";
    import type { CalendarEvent } from "$lib/types";
    import Textarea from "@daedalus-discord/webkit/Textarea.svelte";

    export let data: {
        events: CalendarEvent[][];
    };

    function save() {
        API.post_calendar(data.events)
            .then(() => goto("/calendar"))
            .catch((e) => (console.error(e), alert("An error occurred!")));
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            save();
            e.preventDefault();
        }
    }}
/>

<div class="container">
    {#each data.events as track, index}
        <h3 class="row" style="gap: 20px">
            Track #{index + 1}
            <ListButton bind:array={data.events} {index} del />
        </h3>
        {#each track as event, ei}
            <div class="card">
                <h5>{event.title}</h5>
                <div class="inputs">
                    Start (Timestamp):
                    <input type="number" bind:value={event.start} />
                    End (Timestamp):
                    <input type="number" bind:value={event.end} />
                    Title:
                    <input type="text" bind:value={event.title} />
                    Invites:
                    <input type="text" bind:value={event.invites} placeholder="Space-separated codes" />
                    Light BG: <input type="text" bind:value={event.light} />
                    Dark BG: <input type="text" bind:value={event.dark} />
                </div>
                <p>Body:</p>
                <Textarea bind:value={event.body} />
                <p>Times in your local time:</p>
                <ul>
                    <li>Start: {new Date(event.start).toISOString()}</li>
                    <li>End: {new Date(event.end).toISOString()}</li>
                </ul>
                <ListButton bind:array={data.events[index]} index={ei} del />
            </div>
            <br />
        {/each}

        <button
            on:click={() =>
                (data.events[index] = [
                    ...track,
                    {
                        start: Math.floor(new Date().getTime() / 1000) * 1000,
                        end: Math.floor(new Date().getTime() / 1000) * 1000 + 86400000,
                        title: "New Event",
                        body: "<b>HTML</b> is supported",
                        invites: "",
                        light: "aaaaaa",
                        dark: "444444",
                    },
                ])}
        >
            <Icon icon="add" /> Add Event
        </button>
    {/each}

    <br /><br />

    <button style="background-color: var(--blue-callout)" on:click={() => (data.events = [...data.events, []])}>
        <Icon icon="add" /> Add Calendar Row
    </button>

    <br />

    <button style="background-color: transparent; color: var(--blue-text)" on:click={save}>
        <Icon icon="save" /> Save
    </button>
</div>

<style lang="scss">
    .card {
        background-color: var(--background-2);
        padding: 20px;
        border-radius: 5px;
    }

    .inputs {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 10px;
    }

    input[type="number"] {
        font-family: monospace;
    }
</style>
