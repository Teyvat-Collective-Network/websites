<script lang="ts">
    import GuildMention from "$lib/GuildMention.svelte";
    import Icon from "$lib/Icon.svelte";
    import TimeMention from "$lib/TimeMention.svelte";
    import User from "$lib/UserMention.svelte";
    import type { LocalsData, MembershipChange } from "$lib/types";
    import { actions } from "../../../admin/membership-changes/+page.svelte";

    export let data: LocalsData & { entries: (MembershipChange & { has_mention?: boolean })[] };

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
    Membership Changes
    {#if data.observer}
        <a href="/admin/membership-changes"><Icon icon="edit" /></a>
    {/if}
</h3>
<div id="scroll">
    <table id="membership-table">
        {#each data.entries as entry, index}
            <tr>
                <td><code>{index + 1}</code></td>
                <td>
                    <TimeMention date={entry.date} show_time={false} />
                </td>
                <td>
                    {#if entry.guild}
                        <GuildMention id={entry.guild} />
                    {:else}
                        [not specified]
                    {/if}
                </td>
                <td><b>{actions[entry.action][0]}</b></td>
                <td class="label">
                    <span class="mini">{actions[entry.action][1]}</span>
                </td>
                <td class="label-right">
                    {#if entry.primary}
                        <User id={entry.primary} />
                    {:else}
                        [not specified]
                    {/if}
                </td>
                {#if actions[entry.action][2]}
                    <td class="label">
                        <span class="mini">{actions[entry.action][2]}</span>
                    </td>
                    <td class="label-right">
                        {#if entry.secondary}
                            <User id={entry.secondary} />
                        {:else}
                            [not specified]
                        {/if}
                    </td>
                {:else}
                    <td class="label" />
                    <td class="label-right" />
                {/if}
                {#if entry.notes}
                    <td class="label"><span class="mini">notes</span></td>
                    <td class="label-right notes {entry.has_mention ? 'has-mention' : ''}">
                        {@html entry.notes}
                    </td>
                {:else}
                    <td class="label" />
                    <td class="label-right" />
                {/if}
            </tr>
        {/each}
    </table>
</div>
<br />

<style lang="scss">
    :global {
        #membership-table :not(.notes) > span.mention {
            top: 2px !important;
        }
    }

    .notes.has-mention {
        position: relative;
        top: -4px;
    }

    td {
        padding: 2px 5px;
    }

    span.mini {
        text-transform: uppercase;
        font-size: 75%;
        opacity: 50%;
    }

    #scroll {
        overflow-x: scroll;
        white-space: nowrap;
    }

    table,
    tr,
    td {
        border: 1px solid rgb(var(--invert-rgb), 32%);
        border-collapse: collapse;
    }

    td.label {
        border-right: none;
    }

    td.label-right {
        border-left: none;
    }
</style>
