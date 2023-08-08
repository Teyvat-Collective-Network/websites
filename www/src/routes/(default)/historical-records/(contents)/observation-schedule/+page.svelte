<script lang="ts">
    import GuildMention from "$lib/GuildMention.svelte";
    import Icon from "$lib/Icon.svelte";
    import TimeMention from "$lib/TimeMention.svelte";
    import User from "$lib/UserMention.svelte";
    import type { LocalsData, ObservationRecord } from "$lib/types";
    import { results } from "../../../admin/observation-schedule/+page.svelte";

    export let data: LocalsData & { entries: (ObservationRecord & { has_mention?: boolean })[] };

    data.entries.forEach((entry) => {
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
    {#if data.observer}
        <a href="/admin/observation-schedule"><Icon icon="edit" /></a>
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
            {@const [result, start, end, dark, light] = results[entry.result] ?? ["", true, true, "", ""]}

            <tr>
                <td><code>{index + 1}</code></td>
                <td>
                    <GuildMention id={entry.guild} />
                </td>
                <td>
                    {#if entry.observer}
                        <User id={entry.observer} />
                    {:else}
                        <hr />
                    {/if}
                </td>
                <td>
                    {#if start && entry.start_year != undefined && entry.start_month != undefined && entry.start_date != undefined}
                        <TimeMention
                            date={new Date(entry.start_year, entry.start_month - 1, entry.start_date)}
                            show_time={false}
                        />
                    {:else}
                        <hr />
                    {/if}
                </td>
                <td>
                    {#if end && entry.end_year != undefined && entry.end_month != undefined && entry.end_date != undefined}
                        <TimeMention
                            date={new Date(entry.end_year, entry.end_month - 1, entry.end_date)}
                            show_time={false}
                        />
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
