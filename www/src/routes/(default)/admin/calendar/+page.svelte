<script lang="ts">
    import { goto } from "$app/navigation";
    import ListButton from "$lib/ListButton.svelte";
    import Textarea from "@daedalus-discord/webkit/Textarea.svelte";

    export let data: {
        events: {
            start: number;
            end: number;
            name: string;
            body: string;
            invites: string;
            light: string;
            dark: string;
        }[][];
    };

    let button: any;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            button.click();
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
                <h5>{event.name}</h5>
                <div class="inputs">
                    Start (Timestamp):
                    <input type="number" bind:value={event.start} />
                    End (Timestamp):
                    <input type="number" bind:value={event.end} />
                    Name:
                    <input type="text" bind:value={event.name} />
                    Invites:
                    <input
                        type="text"
                        bind:value={event.invites}
                        placeholder="Space-separated codes"
                    />
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
                        name: "New Event",
                        body: "<b>HTML</b> is supported",
                        invites: "",
                        light: "aaaaaa",
                        dark: "444444",
                    },
                ])}
        >
            <i class="material-icons">add</i> Add Event
        </button>
    {/each}

    <br /><br />

    <button
        style="background-color: var(--blue-callout)"
        on:click={() => (data.events = [...data.events, []])}
    >
        <i class="material-icons">add</i> Add Calendar Row
    </button>

    <br />

    <button
        bind:this={button}
        style="background-color: transparent; color: var(--blue-text)"
        on:click={() =>
            fetch("/api/calendar", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data.events),
            }).then((res) => (res.ok ? goto("/calendar") : alert("An error occurred!")))}
    >
        <i class="material-icons">save</i> Save
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
