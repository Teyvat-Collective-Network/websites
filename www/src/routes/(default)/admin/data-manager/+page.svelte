<script lang="ts">
    import ConfirmLeave from "$lib/ConfirmLeave.svelte";
    import ListButton from "$lib/ListButton.svelte";
    import ToggleHeader from "$lib/ToggleHeader.svelte";

    export let data: any;

    async function save() {
        for (const key of ["elements", "weapons", "regions", "characters"])
            data[key] = data[key].sort((x: any, y: any) => x.name.localeCompare(y.name));

        fetch("/api/data-manager", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => (res.ok ? alert("Saved!") : alert("An error occurred!")));
    }

    const show = { guild_map: false, user_map: false, genshin_data: false };
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            save();
            e.preventDefault();
        }
    }}
/>

<ConfirmLeave />

<div class="container">
    <div id="main">
        <div class="panel">
            <h2>Data Manager</h2>
            <p>Edit website internal data here.</p>
        </div>
        <div class="panel">
            <ToggleHeader title="Genshin Data" bind:show={show.genshin_data} />
            {#if show.genshin_data}
                {#each ["elements", "weapons", "regions"] as key}
                    {@const caps = `${key[0].toUpperCase()}${key.slice(1)}`}

                    <h5>{caps}</h5>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Emoji</th>
                        </tr>
                        {#each data[key] as item, index}
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        class="mono"
                                        bind:value={item.name}
                                        style="width: 240px"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        class="mono"
                                        bind:value={item.emoji}
                                        style="width: 320px"
                                    />
                                </td>
                                <td>
                                    <ListButton bind:array={data[key]} {index} del />
                                </td>
                            </tr>
                        {/each}
                        <br />
                        <button
                            on:click={() => (data[key] = [...data[key], { name: "", emoji: "" }])}
                        >
                            Add {caps.slice(0, -1)}
                        </button>
                    </table>
                    <br />
                {/each}
                <h5>Characters</h5>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Element</th>
                        <th>Weapon</th>
                        <th>Region</th>
                    </tr>
                    {#each data.characters as character, index}
                        <tr>
                            <td>
                                <input type="text" bind:value={character.name} />
                            </td>
                            <td>
                                <input type="text" bind:value={character.id} />
                            </td>
                            {#each ["element", "weapon", "region"] as key}
                                <td>
                                    <select bind:value={character[key]}>
                                        {#each data[`${key}s`] as { name }}
                                            <option value={name}>{name}</option>
                                        {/each}
                                    </select>
                                </td>
                            {/each}
                            <td />
                            <td>
                                <ListButton bind:array={data.characters} {index} del />
                            </td>
                        </tr>
                    {/each}
                </table>
                <br />
                <button
                    on:click={() =>
                        (data.characters = [
                            ...data.characters,
                            { name: "", id: "", element: "", weapon: "", region: "" },
                        ])}
                >
                    Add Character
                </button>
            {/if}
        </div>
        <div class="panel">
            <ToggleHeader title="Guild Map" bind:show={show.guild_map} />
            <p>
                This data is used to render guild mentions. Guilds not in the TCN that are not
                specified here will appear as <span class="mention">
                    <i class="material-icons">domain_disabled</i> &nbsp; ID
                </span>.
            </p>
            {#if show.guild_map}
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {#each data.guild_map as item, index}
                        <tr>
                            <td><input type="text" bind:value={item.id} placeholder="ID" /></td>
                            <td><input type="text" bind:value={item.name} placeholder="Name" /></td>
                            <td><ListButton bind:array={data.guild_map} {index} del /></td>
                        </tr>
                    {/each}
                    <br />
                    <button
                        on:click={() =>
                            (data.guild_map = [...data.guild_map, { id: "", name: "" }])}
                    >
                        Add Entry
                    </button>
                </table>
            {/if}
        </div>
        <div class="panel">
            <ToggleHeader title="User Map" bind:show={show.user_map} />
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
            {#if show.user_map}
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
                            <td><ListButton bind:array={data.user_map} {index} del /></td>
                        </tr>
                    {/each}
                    <br />
                    <button
                        on:click={() => (data.user_map = [...data.user_map, { id: "", name: "" }])}
                    >
                        Add Entry
                    </button>
                </table>
            {/if}
        </div>
        <div class="panel">
            <button on:click={save}>Save</button>
        </div>
    </div>
</div>
