<script lang="ts" context="module">
    export const results = {
        pending: ["Pending", true, true, "#f8f", "#808"],
        rejection_vote: ["Voting To Reject", false, false, "#b66", "#a33"],
        retracted: ["Retracted", true, false, "#c5c", "#a3a"],
        declined: ["Declined", false, false, "#f33", "#c00"],
        rejected: ["Rejected", true, true, "#f62", "#c40"],
        canceled: ["Canceled", true, false, "#f94", "#c62"],
        observing: ["Observing", true, true, "#55c", "#33a"],
        observed: ["Observed", true, true, "#38a", "#36a"],
        report_wip: ["Report WIP", true, true, "#77c", "#47a"],
        vote_waiting: ["Waiting To Vote", true, true, "#88f", "#44c"],
        voting: ["Voting", true, true, "#aaf", "#55f"],
        inducted: ["Inducted", true, true, "#3a3", "#070"],
        preapproved: ["Pre-Approved", true, true, "#cc5", "#a70"],
    } as Record<string, [string, boolean, boolean, string?, string?]>;
</script>

<script lang="ts">
    import { goto } from "$app/navigation";
    import ConfirmLeave from "$lib/ConfirmLeave.svelte";
    import DatetimePicker from "$lib/DatetimePicker.svelte";
    import ListButtons from "$lib/ListButtons.svelte";
    import { API } from "$lib/api";
    import type { ObservationRecord } from "$lib/types";

    export let data: { entries: ObservationRecord[] };

    async function save() {
        const copy = data.entries.map((entry) => entry.start).filter((x) => x);

        for (let x = 0; x < copy.length - 1; x++)
            if (copy[x]! > copy[x + 1]!) {
                alert("Entries should be sorted by start date!");
                return;
            }

        API.post_observation_schedule(data.entries)
            .then(() => goto("/historical-records/observation-schedule"))
            .catch(() => alert("An error occurred!"));
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

<ConfirmLeave />

<div class="container">
    <div id="main">
        <h3>Editing Observation Schedule</h3>
        <div id="scroll">
            <table>
                <tr>
                    <th />
                    <th>Server</th>
                    <th>Observer</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
                {#each data.entries as entry, index}
                    {@const [_, start, end] = results[entry.result] ?? ["", true, true]}

                    <tr>
                        <td><code>{index + 1}</code></td>
                        <td>
                            <input type="text" placeholder="Server ID" bind:value={entry.guild} style="width: 200px" />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Observer ID"
                                bind:value={entry.observer}
                                style="width: 200px"
                            />
                        </td>
                        <td>
                            {#if start}
                                <div style="padding-left: 5px">
                                    <DatetimePicker bind:value={entry.start} show_date nowrap nobuttons />
                                </div>
                            {:else}
                                <hr />
                            {/if}
                        </td>
                        <td>
                            {#if end}
                                <div style="padding-left: 5px">
                                    <DatetimePicker bind:value={entry.end} show_date nowrap nobuttons />
                                </div>
                            {:else}
                                <hr />
                            {/if}
                        </td>
                        <td>
                            <select bind:value={entry.result}>
                                {#each Object.entries(results) as [key, value]}
                                    <option value={key}>{value[0]}</option>
                                {/each}
                            </select>
                        </td>
                        <td>
                            <input type="text" placeholder="Notes" bind:value={entry.notes} style="width: 500px" />
                        </td>
                        <ListButtons bind:array={data.entries} {index} table delete_last />
                    </tr>
                {/each}
            </table>
        </div>
        <br />
        <div class="row" style="gap: 10px">
            <button
                on:click={() => (data.entries = [...data.entries, { guild: "", observer: "", result: "inducted" }])}
            >
                Add Entry
            </button>
            <button on:click={save}>Save</button>
        </div>
    </div>
</div>

<style lang="scss">
    #scroll {
        overflow-x: scroll;
        white-space: nowrap;
    }
</style>
