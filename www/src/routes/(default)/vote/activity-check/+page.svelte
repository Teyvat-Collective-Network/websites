<script lang="ts">
    import { LoadingSpinner } from "@daedalus-discord/webkit";

    export let data: any;

    const votes = new Set();
    for (const vote of data.votes) votes.add(`${vote.poll}/${vote.user}`);

    const key = (id: string) => {
        let val = 0;

        for (const poll of data.polls) {
            if (poll.required?.includes(id)) {
                if (votes.has(`${poll.id}/${id}`)) val = 0.8 * val;
                else val = 0.6 * val + 0.4;
            }
        }

        return val;
    };

    data.ids = data.ids.sort((x: string, y: string) => key(y) - key(x));
</script>

<div class="container">
    <div id="table-wrapper">
        <table>
            <tr>
                <td />
                {#each data.polls as poll}
                    <th style="cursor: default" title={poll.question}>{poll.id}</th>
                {/each}
            </tr>

            {#each data.ids as id}
                <tr>
                    <td class="row">
                        <span class="mention user" data-id={id}>
                            <i class="material-icons">pending</i> Loading User...
                        </span>
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

    tr:nth-child(even) {
        background-color: rgb(var(--invert-rgb), 10%);
    }

    :global {
        span.mention {
            top: 0px !important;
        }
    }
</style>
