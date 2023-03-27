<script lang="ts">
    import { goto } from "$app/navigation";
    import { Textarea } from "@daedalus-discord/webkit";
    import { swap, without } from "../../../lib/util.js";

    export let data: { announcements: any[] };

    let button: any;
</script>

<svelte:window
    on:keydown={(e) => {
        console.log(e);

        if (e.key === "s" && e.ctrlKey) {
            button.click();
            e.preventDefault();
        }
    }}
/>

<div class="container">
    <h2>Editing Featured Content</h2>
    {#each data.announcements as item, index}
        <div class="panel">
            <h3 class="row" style="gap: 10px">
                <i class="material-icons">{item.icon}</i>
                {item.title}
            </h3>
            <label>
                <input type="checkbox" bind:checked={item.highlight} />
                Highlight item
            </label>
            <br />
            <div class="inputs">
                <span>
                    <a
                        href="https://fonts.google.com/icons?icon.set=Material+Icons"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Icon
                    </a>
                </span>
                <input type="text" bind:value={item.icon} />
                <span>Title</span>
                <input type="text" bind:value={item.title} />
                <span>Body</span>
                <Textarea bind:value={item.body} />
            </div>
            <br />
            <div class="row">
                <button
                    style="background-color: transparent; color: var(--red-text)"
                    on:click={() => (data.announcements = without(data.announcements, index))}
                >
                    <i class="material-icons">delete</i>
                </button>
                {#if index !== 0}
                    <button
                        style="background-color: transparent; color: var(--blue-text)"
                        on:click={() =>
                            (data.announcements = swap(data.announcements, index - 1, index))}
                    >
                        <i class="material-icons">expand_less</i>
                    </button>
                {/if}
                {#if index !== data.announcements.length - 1}
                    <button
                        style="background-color: transparent; color: var(--blue-text)"
                        on:click={() =>
                            (data.announcements = swap(data.announcements, index, index + 1))}
                    >
                        <i class="material-icons">expand_more</i>
                    </button>
                {/if}
            </div>
        </div>
    {/each}
    <div class="row" style="gap: 10px">
        <button
            style="background-color: var(--green-button)"
            on:click={() =>
                (data.announcements = [
                    ...data.announcements,
                    {
                        icon: "campaign",
                        title: "Announcement",
                        body: "<p><b>HTML</b> is supported. Please use paragraph tags.</p>",
                    },
                ])}
        >
            <i class="material-icons">add</i> Add Announcement
        </button>
        <button
            bind:this={button}
            style="background-color: transparent; color: var(--blue-text)"
            on:click={() =>
                fetch("/api/featured", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data.announcements),
                }).then((res) => (res.ok ? goto("/featured") : alert("an error occurred!")))}
        >
            <i class="material-icons">save</i> Save
        </button>
    </div>
</div>

<style lang="scss">
    .inputs {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 5px 20px;
    }

    h3 {
        margin: 0.2em 0 0.8em 0;
        padding: 0;
    }

    span {
        padding-top: 3px;
    }
</style>
