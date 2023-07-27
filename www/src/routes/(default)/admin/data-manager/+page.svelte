<script lang="ts">
    import { without } from "$lib/util";

    export let data: any;

    async function save() {
        fetch("/api/data-manager", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => (res.ok ? alert("Saved!") : alert("An error occurred!")));
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
        <div class="panel">
            <h2>Data Manager</h2>
            <p>Edit website internal data here.</p>
        </div>
        <div class="panel">
            <h4>Guild Map</h4>
            <p>
                This data is used to render guild mentions. Guilds not in the TCN that are not
                specified here will appear as <span class="mention">
                    <i class="material-icons">domain_disabled</i> &nbsp; ID
                </span>.
            </p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {#each data.guild_map as item, index}
                    <tr>
                        <td><input type="text" bind:value={item.id} placeholder="ID" /></td>
                        <td><input type="text" bind:value={item.name} placeholder="Name" /></td>
                        <td>
                            <a
                                href={"javascript:void(0)"}
                                class="row"
                                on:click={() => (data.guild_map = without(data.guild_map, index))}
                                style="color: var(--red-text)"
                            >
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>
                {/each}
                <br />
                <button
                    on:click={() => (data.guild_map = [...data.guild_map, { id: "", name: "" }])}
                >
                    Add Entry
                </button>
            </table>
        </div>
        <div class="panel">
            <h4>User Map</h4>
            <p>
                This data is used to render user mentions. Users whose accounts are deleted will
                appear as <span class="mention">
                    <i class="material-icons">alternate_email</i> <b>Deleted User abcd1234</b>#5678
                </span>
                and invalid IDs will appear as
                <span class="mention">
                    <i class="material-icons">pin</i> &nbsp;
                    <code class="plain" style="padding: 0">ID</code>
                </span>, unless a display name is specified here.
            </p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Display Name</th>
                </tr>
                {#each data.user_map as item, index}
                    <tr>
                        <td><input type="text" bind:value={item.id} placeholder="ID" /></td>
                        <td
                            ><input
                                type="text"
                                bind:value={item.name}
                                placeholder="Display Name"
                            /></td
                        >
                        <td>
                            <a
                                href={"javascript:void(0)"}
                                class="row"
                                on:click={() => (data.user_map = without(data.user_map, index))}
                                style="color: var(--red-text)"
                            >
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>
                {/each}
                <br />
                <button
                    on:click={() => (data.user_map = [...data.user_map, { id: "", name: "" }])}
                >
                    Add Entry
                </button>
            </table>
        </div>
        <div class="panel">
            <button on:click={save}>Save</button>
        </div>
    </div>
</div>
