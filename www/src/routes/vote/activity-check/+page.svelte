<script lang="ts">
    import { LoadingSpinner } from "@daedalus-discord/webkit";

    export let data: any;

    let users = [];
    let loading = true;

    for (const id of data.ids) {
    }
</script>

<div class="container">
    {#if loading}
        <LoadingSpinner size={50} text="" />
    {/if}

    <table>
        {#each data.ids as id}
            <tr>
                <td><code>{id} {data.map[id]}</code></td>
            </tr>
        {/each}
    </table>
</div>

<style lang="scss">
    table,
    tr,
    td {
        border: 1px solid var(--text-primary);
        border-collapse: collapse;
    }

    td {
        padding: 5px;
    }

    tr:nth-child(even) {
        background-color: rgb(var(--invert-rgb), 7%);
    }
</style>
