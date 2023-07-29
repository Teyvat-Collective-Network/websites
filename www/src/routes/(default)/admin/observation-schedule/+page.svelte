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
    import { swap, without } from "$lib/util";

    export let data: any;

    async function save() {
        const copy = data.entries.filter(
            (entry: any) =>
                entry.start_year != undefined &&
                entry.start_month != undefined &&
                entry.start_year != undefined,
        );

        for (let x = 0; x < copy.length - 1; x++)
            if (
                copy[x].start_year > copy[x + 1].start_year ||
                (copy[x].start_year === copy[x + 1].start_year &&
                    (copy[x].start_month > copy[x + 1].start_month ||
                        (copy[x].start_month === copy[x + 1].start_month &&
                            copy[x].start_date > copy[x + 1].start_date)))
            ) {
                alert("Entries should be sorted by start date!");
                return;
            }

        fetch("/api/observation-schedule", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data.entries),
        }).then((res) =>
            res.ok ? goto("/historical-records/observation-schedule") : alert("An error occurred!"),
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
        <h3>Editing Observation Schedule</h3>
        <div id="scroll">
            <table>
                <tr>
                    <th />
                    <th>Server</th>
                    <th>Observer</th>
                    <th colspan="3">Start</th>
                    <th colspan="3">End</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
                {#each data.entries as entry, index}
                    {@const [_, start, end] = results[entry.result] ?? ["", true, true]}
                    {@const normal_end =
                        entry.start_year == undefined ||
                        entry.start_month == undefined ||
                        entry.start_date == undefined
                            ? undefined
                            : new Date(
                                  entry.start_year,
                                  entry.start_month - 1,
                                  entry.start_date + 28,
                              )}

                    <tr>
                        <td><code>{index + 1}</code></td>
                        <td>
                            <input
                                type="text"
                                placeholder="Server ID"
                                bind:value={entry.guild}
                                style="width: 200px"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Observer ID"
                                bind:value={entry.observer}
                                style="width: 200px"
                            />
                        </td>
                        {#if start}
                            <td>
                                <input
                                    type="number"
                                    placeholder="Year"
                                    bind:value={entry.start_year}
                                    style="width: 80px"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder="Month"
                                    bind:value={entry.start_month}
                                    style="width: 80px"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder="Date"
                                    bind:value={entry.start_date}
                                    style="width: 80px"
                                />
                            </td>
                        {:else}
                            <td colspan="3"><hr /></td>
                        {/if}
                        {#if end}
                            <td>
                                <input
                                    type="number"
                                    placeholder={normal_end
                                        ? `${normal_end.getFullYear()}`
                                        : "Year"}
                                    bind:value={entry.end_year}
                                    style="width: 80px"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder={normal_end
                                        ? `${normal_end.getMonth() + 1}`
                                        : "Month"}
                                    bind:value={entry.end_month}
                                    style="width: 80px"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder={normal_end ? `${normal_end.getDate()}` : "Date"}
                                    bind:value={entry.end_date}
                                    style="width: 80px"
                                />
                            </td>
                        {:else}
                            <td colspan="3"><hr /></td>
                        {/if}
                        <td>
                            <select bind:value={entry.result}>
                                {#each Object.entries(results) as [key, value]}
                                    <option value={key}>{value[0]}</option>
                                {/each}
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Notes"
                                bind:value={entry.notes}
                                style="width: 500px"
                            />
                        </td>
                        <td>
                            {#if index > 0}
                                <a
                                    href={"javascript:void(0)"}
                                    class="row"
                                    on:click={() =>
                                        (data.entries = swap(data.entries, index, index - 1))}
                                >
                                    <i class="material-icons">expand_less</i>
                                </a>
                            {/if}
                        </td>
                        <td>
                            {#if index < data.entries.length - 1}
                                <a
                                    href={"javascript:void(0)"}
                                    class="row"
                                    on:click={() =>
                                        (data.entries = swap(data.entries, index, index + 1))}
                                >
                                    <i class="material-icons">expand_more</i>
                                </a>
                            {/if}
                        </td>
                        <td>
                            <a
                                href={"javascript:void(0)"}
                                class="row"
                                on:click={() => (data.entries = without(data.entries, index))}
                                style="color: var(--red-text)"
                            >
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>
                {/each}
            </table>
        </div>
        <br />
        <div class="row" style="gap: 10px">
            <button
                on:click={() =>
                    (data.entries = [
                        ...data.entries,
                        { guild: "", observer: "", result: "inducted" },
                    ])}
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
