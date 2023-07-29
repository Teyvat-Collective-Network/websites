<script lang="ts">
    import { statuses } from "../../../admin/election-history/+page.svelte";

    export let data: any;
</script>

<h3 class="row" style="gap: 10px">
    Election History
    {#if data.observer}
        <a href="/admin/election-history"><i class="material-icons">edit</i></a>
    {/if}
</h3>
{#each data.entries as entry, index}
    <div class="panel">
        <h4>Wave {data.entries.length - index}</h4>
        <b style="color: var(--text-secondary)">
            {#if entry.seats}
                {entry.seats} seat{entry.seats === 1 ? "" : "s"}
            {:else}
                unlimited seats
            {/if}
        </b>
        <table id="election-table">
            <tr>
                <th>Candidate</th>
                <th>Status</th>
            </tr>
            {#each entry.candidates as { id, status, rerunning }}
                {@const [text, dark, light] = statuses[status] ?? ["", "", ""]}

                <tr>
                    <td>
                        <span class="mention user" data-id={id}>
                            <i class="material-icons">pending</i> &nbsp; Loading User...
                        </span>
                    </td>
                    <td>
                        <b class="dark" style="color: {dark}">{text}</b>
                        <b class="light" style="color: {light}">{text}</b>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
{/each}

<style lang="scss">
    :global {
        #election-table span.mention {
            top: 2px !important;
        }
    }

    th,
    td {
        padding: 2px 5px;
    }

    table,
    tr,
    th,
    td {
        border: 1px solid rgb(var(--invert-rgb), 32%);
        border-collapse: collapse;
    }
</style>
