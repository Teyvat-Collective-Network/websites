<script lang="ts">
    import { LoadingSpinner } from "@daedalus-discord/webkit";
    import { onMount } from "svelte";

    export let data: any;

    let users: { id: string; tag: string }[] = [];

    for (const id of data.ids) if (data.map[id]) users.push({ id, tag: data.map[id] });

    let loading = users.length < data.ids.length;

    users = users.sort((x, y) => x.tag.localeCompare(y.tag));

    if (loading)
        onMount(async () => {
            for (const id of data.ids)
                if (!data.map[id]) {
                    users = [
                        ...users,
                        { id, tag: await (await fetch(`/api/get-tag/${id}`)).text() },
                    ].sort((x, y) => x.tag.localeCompare(y.tag));
                }

            loading = false;
        });

    function display(tag: string) {
        if (tag.endsWith("#0")) return tag.slice(0, -2);
        return tag;
    }

    const votes = new Set();
    for (const vote of data.votes) votes.add(`${vote.poll}/${vote.user}`);
</script>

<div class="container">
    {#if loading}
        <div class="row">
            <LoadingSpinner size={50} text="" />
            <span>{users.length} / {data.ids.length} Loaded</span>
        </div>
        <br />
    {/if}

    <div id="table-wrapper">
        <table>
            <tr>
                <td />
                {#each data.polls as poll}
                    <th style="cursor: default" title={poll.question}>{poll.id}</th>
                {/each}
            </tr>

            {#each users as { id, tag }}
                <tr>
                    <td class="row user">
                        <button on:click={() => navigator.clipboard.writeText(id)}>
                            <i class="material-icons" title="Copy User ID">content_copy</i>
                        </button>
                        {display(tag)}
                    </td>

                    {#each data.polls as poll}
                        {@const status = poll.required?.includes(id)
                            ? votes.has(`${poll.id}/${id}`)
                                ? 0
                                : 1
                            : 2}

                        <td
                            style="cursor: default"
                            title={["voted", "missing vote", "not eligible"][status]}
                        >
                            <center>
                                {["✅", "❌", "-"][status]}
                            </center>
                        </td>
                    {/each}
                </tr>
            {/each}
        </table>
    </div>
</div>

<style lang="scss">
    div#table-wrapper {
        overflow-x: scroll;
    }

    table {
        border-collapse: collapse;
    }

    td,
    th {
        padding: 5px;
    }

    td.user {
        gap: 10px;

        button {
            background-color: transparent;
            padding: 0;
            transition: linear 0.12s color;

            &:active {
                color: var(--green-text);
            }
        }
    }

    tr:nth-child(even) {
        background-color: rgb(var(--invert-rgb), 10%);
    }
</style>
