<script lang="ts">
    import { onMount } from "svelte";
    import { update } from "../../../../+layout.svelte";
    import ListButton from "$lib/ListButton.svelte";
    import { API } from "$lib/api";
    import type { LocalsData, ObserverTerm } from "$lib/types";

    export let data: LocalsData & { entries: ObserverTerm[] };

    async function save() {
        data.entries = data.entries.sort(
            (x, y) => x.year - y.year || x.month - y.month || x.date - y.date,
        );

        API.post_observer_terms(data.entries)
            .then(() =>
                JSON.stringify(copy.map((x) => x.user)) ===
                JSON.stringify(data.entries.map((x) => x.user))
                    ? (copy = structuredClone(data.entries))
                    : location.reload(),
            )
            .catch(() => alert("An error occurred!"));
    }

    let copy = data.entries;

    onMount(() => {
        copy = structuredClone(data.entries);
        update();
    });
</script>

<svelte:window
    on:keydown={(e) => {
        if (!data.observer) return;
        if (e.key === "s" && e.ctrlKey) {
            save();
            e.preventDefault();
        }
    }}
/>

<h3>Observer Terms</h3>
<div id="scroll">
    <table id="terms-table">
        <tr>
            <th>Observer</th>
            <th>Term Start</th>
            <th>Scheduled Term End</th>
            <th>Predicted Election Start</th>
            <th>Consecutive Terms</th>
        </tr>
        {#each copy as entry}
            {@const end = new Date(entry.year, entry.month + 5, entry.date)}
            {@const elect = new Date(entry.year, entry.month + 5, entry.date - 9)}

            <tr>
                <td>
                    <span class="mention user" data-id={entry.user}>
                        <i class="material-icons">pending</i> &nbsp; Loading User...
                    </span>
                </td>
                <td>
                    <span class="mention">
                        <i class="material-icons">schedule</i> &nbsp;
                        {entry.year}-{entry.month}-{entry.date}
                    </span>
                </td>
                <td>
                    <span class="mention">
                        <i class="material-icons">schedule</i> &nbsp;
                        {end.getFullYear()}-{end.getMonth() + 1}-{end.getDate()}
                    </span>
                </td>
                <td>
                    <span class="mention">
                        <i class="material-icons">schedule</i> &nbsp;
                        {elect.getFullYear()}-{elect.getMonth() + 1}-{elect.getDate()}
                    </span>
                </td>
                <td>{entry.terms}</td>
            </tr>
        {/each}
    </table>
</div>
<br />
{#if data.observer}
    <div class="panel">
        <h5>Edit (Observer-Only)</h5>
        <table>
            {#each data.entries as entry, index}
                <tr>
                    <td>
                        <input
                            type="number"
                            bind:value={entry.year}
                            placeholder="Term Start Year"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            bind:value={entry.month}
                            placeholder="Term Start Month"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            bind:value={entry.date}
                            placeholder="Term Start Date"
                        />
                    </td>
                    <td>
                        <input type="text" bind:value={entry.user} placeholder="User" />
                    </td>
                    <td>
                        <input
                            type="number"
                            bind:value={entry.terms}
                            placeholder="Consecutive Terms"
                        />
                    </td>
                    <td><ListButton bind:array={data.entries} {index} del /></td>
                </tr>
            {/each}
        </table>
        <br />
        <div class="row" style="gap: 1em">
            <button
                on:click={() =>
                    (data.entries = [
                        ...data.entries,
                        {
                            year: new Date().getFullYear(),
                            month: new Date().getMonth() + 1,
                            date: new Date().getDate(),
                            user: "",
                            terms: 1,
                        },
                    ])}
            >
                <i class="material-icons">add</i>
            </button>
            <button on:click={save}>
                <i class="material-icons">save</i>
            </button>
        </div>
    </div>
{/if}

<style lang="scss">
    :global {
        #terms-table span.mention {
            top: 2px !important;
        }
    }

    th,
    td {
        padding: 2px 5px;
    }

    #scroll {
        overflow-x: scroll;
        white-space: nowrap;
    }

    table,
    tr,
    th,
    td {
        border: 1px solid rgb(var(--invert-rgb), 32%);
        border-collapse: collapse;
    }
</style>
