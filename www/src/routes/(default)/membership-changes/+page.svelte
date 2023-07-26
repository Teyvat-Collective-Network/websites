<script lang="ts">
    import { actions } from "../admin/membership-changes/+page.svelte";

    export let data: any;
</script>

<div class="container">
    <div id="main">
        <h3 class="row" style="gap: 10px">
            Membership Changes
            {#if data.auth}
                <a href="/admin/membership-changes"><i class="material-icons">edit</i></a>
            {/if}
        </h3>
        <table>
            {#each data.entries as entry, index}
                <tr>
                    <td><code>{index + 1}</code></td>
                    <td>
                        <span class="mention">
                            <i class="material-icons">schedule</i> &nbsp;

                            {entry.year}-{entry.month.toString().padStart(2, "0")}-{entry.date
                                .toString()
                                .padStart(2, "0")}
                        </span>
                    </td>
                    <td>
                        <span class="mention guild" data-id={entry.guild}>
                            <i class="material-icons">pending</i> &nbsp; Loading Server...
                        </span>
                    </td>
                    <td><b>{actions[entry.action][0]}</b></td>
                    <td>
                        <span class="mini">{actions[entry.action][1]}</span>
                    </td>
                    <td>
                        <span class="mention user" data-id={entry.primary}>
                            <i class="material-icons">pending</i> &nbsp; Loading User...
                        </span>
                    </td>
                    {#if actions[entry.action][2]}
                        <td>
                            <span class="mini">{actions[entry.action][2]}</span>
                        </td>
                        <td>
                            {#if entry.secondary}
                                <span class="mention user" data-id={entry.secondary}>
                                    <i class="material-icons">pending</i> &nbsp; Loading User...
                                </span>
                            {:else}
                                [not specified]
                            {/if}
                        </td>
                    {/if}
                </tr>
            {/each}
        </table>
    </div>
</div>

<style lang="scss">
    :global {
        span.mention {
            top: 2px !important;
        }
    }

    td {
        padding-right: 10px;
    }

    span.mini {
        text-transform: uppercase;
        font-size: 75%;
        opacity: 50%;
    }
</style>
