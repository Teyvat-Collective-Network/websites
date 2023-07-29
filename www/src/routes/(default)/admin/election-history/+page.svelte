<script lang="ts" context="module">
    export const statuses = {
        elected: ["Elected", "#3a3", "#070"],
        not_elected: ["Not Elected", "#f33", "#c00"],
        accepted: ["Accepted", "#55c", "#33a"],
        declined: ["Declined", "#f8f", "#808"],
        nominated: ["Nominated", "#cc5", "#a70"],
    } as Record<string, [string, string?, string?]>;
</script>

<script lang="ts">
    import { goto } from "$app/navigation";

    import { swap, without } from "$lib/util";

    export let data: any;

    async function save() {
        fetch("/api/election-history", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data.entries),
        }).then((res) =>
            res.ok ? goto("/historical-records/election-history") : alert("An error occurred!"),
        );
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            save();
            e.preventDefault();
        }
    }}
    on:beforeunload={(e) => e.preventDefault()}
/>

<div class="container">
    <div id="main">
        <h3>Editing Election History</h3>
        {#each data.entries as entry, index}
            <div class="panel">
                <h5 class="row" style="gap: 10px">
                    <code class="plain">Wave {data.entries.length - index}</code>
                    {#if index > 0}
                        <a
                            href={"javascript:void(0)"}
                            on:click={() => (data.entries = swap(data.entries, index, index - 1))}
                            ><i class="material-icons">expand_less</i></a
                        >
                    {:else}
                        <i class="material-icons">x</i>
                    {/if}
                    {#if index < data.entries.length - 1}
                        <a
                            href={"javascript:void(0)"}
                            on:click={() => (data.entries = swap(data.entries, index, index + 1))}
                            ><i class="material-icons">expand_more</i></a
                        >
                    {:else}
                        <i class="material-icons">x</i>
                    {/if}
                    <a
                        href={"javascript:void(0)"}
                        on:click={() => (data.entries = without(data.entries, index))}
                        style="color: var(--red-text)"><i class="material-icons">delete</i></a
                    >
                </h5>
                <div class="inline-row" style="gap: 10px">
                    Seats:
                    <input
                        type="number"
                        bind:value={data.entries.seats}
                        placeholder="0 = infinite"
                    />
                </div>
                <br /><br />
                <table>
                    <tr>
                        <th>User ID</th>
                        <th>Status</th>
                    </tr>
                    {#each entry.candidates as candidate, ci}
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    bind:value={candidate.id}
                                    placeholder="User ID"
                                />
                            </td>
                            <td>
                                <select bind:value={candidate.status}>
                                    {#each Object.entries(statuses) as [key, [value]]}
                                        <option value={key}>{value}</option>
                                    {/each}
                                </select>
                            </td>
                            <td style="width: 10px" />
                            <td>
                                <label>
                                    <input type="checkbox" bind:checked={candidate.rerunning} />
                                    Rerunning
                                </label>
                            </td>
                            <td style="width: 10px" />
                            <td>
                                {#if ci > 0}
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() =>
                                            (entry.candidates = swap(entry.candidates, ci, ci - 1))}
                                    >
                                        <i class="material-icons">expand_less</i>
                                    </a>
                                {/if}
                            </td>
                            <td>
                                {#if ci < entry.candidates.length - 1}
                                    <a
                                        href={"javascript:void(0)"}
                                        class="row"
                                        on:click={() =>
                                            (entry.candidates = swap(entry.candidates, ci, ci + 1))}
                                    >
                                        <i class="material-icons">expand_more</i>
                                    </a>
                                {/if}
                            </td>
                            <td>
                                <a
                                    href={"javascript:void(0)"}
                                    class="row"
                                    on:click={() =>
                                        (entry.candidates = without(entry.candidates, ci))}
                                    style="color: var(--red-text)"
                                >
                                    <i class="material-icons">delete</i>
                                </a>
                            </td>
                        </tr>
                    {/each}

                    <br />
                    <button
                        on:click={() =>
                            (entry.candidates = [
                                ...entry.candidates,
                                { id: "", status: "nominated", rerunning: false },
                            ])}
                    >
                        Add Candidate
                    </button>
                </table>
            </div>
        {/each}

        <br />
        <div class="row" style="gap: 10px">
            <button
                on:click={() => (data.entries = [{ candidates: [], seats: 0 }, ...data.entries])}
            >
                Add Election
            </button>
            <button on:click={save}>Save</button>
        </div>
    </div>
</div>
