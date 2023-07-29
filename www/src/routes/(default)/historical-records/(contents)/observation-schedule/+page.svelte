<script lang="ts">
    import { dark_mode } from "$lib/stores";
    import { results } from "../../../admin/observation-schedule/+page.svelte";

    export let data: any;

    data.entries.forEach((entry: any) => {
        if (!entry.notes) return;

        const regex = /\[@(\d+)\]/;
        let match;

        while ((match = entry.notes.match(regex))) {
            entry.notes = entry.notes.replace(
                regex,
                `<span class="mention user" data-id=${match[1]}><i class="material-icons">pending</i> &nbsp; Loading User...</span>`,
            );

            entry.has_mention = true;
        }
    });
</script>

<h3 class="row" style="gap: 10px">
    Observation Schedule
    {#if data.auth}
        <a href="/admin/observation-schedule"><i class="material-icons">edit</i></a>
    {/if}
</h3>
<div id="scroll">
    <table id="observation-table">
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
            {@const [result, start, end, dark, light] = results[entry.result] ?? [
                "",
                true,
                true,
                "",
                "",
            ]}

            <tr>
                <td><code>{index + 1}</code></td>
                <td>
                    <span class="mention guild" data-id={entry.guild}>
                        <i class="material-icons">pending</i> &nbsp; Loading Server...
                    </span>
                </td>
                <td>
                    {#if entry.observer}
                        <span class="mention user" data-id={entry.observer}>
                            <i class="material-icons">pending</i> &nbsp; Loading User...
                        </span>
                    {:else}
                        <hr />
                    {/if}
                </td>
                <td>
                    {#if start && entry.start_year != undefined && entry.start_month != undefined && entry.start_date != undefined}
                        <span class="mention">
                            <i class="material-icons">schedule</i> &nbsp;
                            {entry.start_year}-{entry.start_month
                                ?.toString()
                                .padStart(2, "0")}-{entry.start_date?.toString().padStart(2, "0")}
                        </span>
                    {:else}
                        <hr />
                    {/if}
                </td>
                <td>
                    {#if end && entry.end_year != undefined && entry.end_month != undefined && entry.end_date != undefined}
                        <span class="mention">
                            <i class="material-icons">schedule</i> &nbsp;
                            {entry.end_year}-{entry.end_month
                                ?.toString()
                                .padStart(2, "0")}-{entry.end_date?.toString().padStart(2, "0")}
                        </span>
                    {:else}
                        <hr />
                    {/if}
                </td>
                <td>
                    <b class="dark" style="color: {dark}">{result}</b>
                    <b class="light" style="color: {light}">{result}</b>
                </td>
                {#if entry.notes}
                    <td class="notes {entry.has_mention ? 'has-mention' : ''}">
                        {@html entry.notes}
                    </td>
                {/if}
            </tr>
        {/each}
    </table>
</div>
<br />

<style lang="scss">
    :global {
        #observation-table :not(.notes) > span.mention {
            top: 2px !important;
        }
    }

    .notes.has-mention {
        position: relative;
        top: -4px;
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
