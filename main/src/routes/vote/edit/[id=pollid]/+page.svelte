<script lang="ts">
    import { Textarea } from "@daedalus-discord/webkit";
    import Callout from "$lib/Callout.svelte";
    import { without } from "$lib/util.js";
    import { onMount } from "svelte";
    import Redirect from "../../../../lib/Redirect.svelte";
    import { page } from "$app/stores";

    export let data: any;
    export let form: any;

    form ??= data.form ?? {};
    form.options ??= [];
    form.min ??= 1;
    form.max ??= 1;
    form.candidates ??= [];
    form.seats ??= 1;
    form.live ??= false;
    form.restricted ??= true;
    form.dm ??= true;
    form.quorum ??= 60;

    let users: any[];

    onMount(() =>
        fetch("/api/council")
            .then((x) => x.json())
            .then((x) => (users = x)),
    );
</script>

<form class="container" method="POST">
    {#if form.error}
        <Callout style="red">
            <p>{form.error}</p>
        </Callout>
    {/if}

    {#if form.id && form.id !== parseInt($page.params.id)}
        <Redirect to="/vote/edit/{form.id}" />
    {/if}

    {#if form.id}
        <a href="/vote">Return To Dashboard</a>
    {/if}

    <div>
        <h4>Poll Options</h4>
        <div class="row" style="gap: 10px">
            <b>Mode</b>
            <select name="mode" bind:value={form.mode}>
                <option value="proposal">Proposal</option>
                <option value="selection">Selection</option>
                <option value="election">Election</option>
            </select>
        </div>
        <Textarea
            name="question"
            placeholder="Poll question (Discord markdown supported)"
            bind:value={form.question}
        />

        {#if form.mode === "selection"}
            <div style="display: grid; grid-template-columns: auto 1fr auto; gap: 10px">
                <b>Min # Options</b>
                <input type="number" name="min" bind:value={form.min} />
                <span />

                <b>Max # Options</b>
                <input type="number" name="max" bind:value={form.max} />
                <span />

                {#each form.options as option, index}
                    <b>Option {index + 1}</b>
                    <input type="text" name="option{index}" bind:value={option} />
                    {#if form.options.length > 2}
                        <button
                            type="button"
                            style="color: var(--red-text); background-color: transparent"
                            on:click={() => (form.options = without(form.options, index))}
                        >
                            <i class="material-icons">delete</i>
                        </button>
                    {:else}
                        <span />
                    {/if}
                {/each}
            </div>
            {#if form.options.length < 10}
                <br />
                <button type="button" on:click={() => (form.options = [...form.options, ""])}>
                    Add Option
                </button>
            {/if}
        {/if}

        {#if form.mode === "election"}
            <div style="display: grid; grid-template-columns: auto 1fr auto; gap: 10px">
                <b>Seats</b>
                <input type="number" name="seats" bind:value={form.seats} />
                <span />

                {#each form.candidates as candidate, index}
                    <b>Candidate {index + 1}</b>
                    <select name="candidate{index}" bind:value={candidate}>
                        {#each users || [{ id: "0", tag: "Loading..." }] as { id, tag }}
                            <option value={id} disabled={id === "0"} selected={id === candidate}>
                                {tag}
                            </option>
                        {/each}
                    </select>
                    {#if form.candidates.length > 2}
                        <button
                            type="button"
                            style="color: var(--red-text); background-color: transparent"
                            on:click={() => (form.candidates = without(form.candidates, index))}
                        >
                            <i class="material-icons">delete</i>
                        </button>
                    {:else}
                        <span />
                    {/if}
                {/each}
            </div>
            {#if form.candidates.length < 20}
                <br />
                <button type="button" on:click={() => (form.candidates = [...form.candidates, ""])}>
                    Add Candidate
                </button>
            {/if}
        {/if}

        <p>Close after how many hours?</p>
        <input
            type="text"
            name="duration"
            bind:value={form.duration}
            placeholder="Minimum 48 required for standard votes"
        />
    </div>
    <div>
        <h4>Meta Options</h4>
        <label>
            <input type="checkbox" name="live" bind:checked={form.live} />
            <span>
                <b>Live</b> (display results in real-time - forbidden for standard votes)
            </span>
        </label>
        <label>
            <input type="checkbox" name="restricted" bind:checked={form.restricted} />
            <span>
                <b>Restricted</b> (only designated voters may vote)
            </span>
        </label>
        <label>
            <input type="checkbox" name="dm" bind:checked={form.dm} />
            <span>
                <b>DM 24 hours before end</b> (required for standard votes)
            </span>
        </label>
        <br />
        <div class="row" style="gap: 10px">
            <b>Quorum</b>
            <select name="quorum" bind:value={form.quorum}>
                <option value={0}>none</option>
                <option value={60}>60% (low)</option>
                <option value={75}>75% (high - constitutional)</option>
            </select>
        </div>
    </div>
    <div>
        {#if form.id}
            <button>Edit / Post</button>
            <p>
                If the poll still exists, it will be edited. If the poll was deleted (or could not
                be found), this will repost it.
            </p>
        {:else}
            <button>Post</button>
        {/if}
    </div>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        div {
            padding: 20px;
            border-radius: 5px;
            background-color: var(--background-2);
        }
    }
</style>
