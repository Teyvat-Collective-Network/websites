<script lang="ts" context="module">
    export const actions = {
        induct: ["Induct", "Owner", "Advisor"],
        uninduct: ["Uninduct", "Owner", "Advisor"],
        withdrawn: ["Withdrawn", "Owner", "Advisor"],
        "leaves-by-default": ["Leaves by Default", "Owner", "Advisor"],
        "abdicate-owner": ["Abdicate Owner", "Owner"],
        "abdicate-advisor": ["Abdicate Advisor", "Advisor"],
        "owner-abdicates-advisor": ["Owner Abdicates Advisor", "Owner", "Advisor"],
        "advisor-leaves": ["Advisor Leaves", "Advisor"],
        "transfer-ownership": ["Transfer Ownership", "Old Owner", "New Owner"],
        "add-advisor": ["Add Advisor", "Advisor"],
        "switch-advisor": ["Switch Advisor", "Old Advisor", "New Advisor"],
        elected: ["Elected", "Observer"],
        "abdicate-observer": ["Abdicate Observer", "Observer"],
        "term-end": ["Term End", "Observer"],
        "re-elected": ["Re-elected", "Observer"],
        "observer-steps-down": ["Observer Steps Down", "Observer"],
        "owner-defers-vote": ["Owner Defers Vote", "Owner", "Advisor"],
        "owner-reclaims-vote": ["Owner Reclaims Vote", "Owner", "Advisor"],
        "add-bot": ["Add Bot", "Developer"],
        "add-developer": ["Add Developer", "Developer"],
    } as Record<string, [string, string, string?]>;
</script>

<script lang="ts">
    import { goto } from "$app/navigation";

    import { swap } from "$lib/util";

    export let data: any;

    async function save() {
        fetch("/api/membership-changes", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data.entries),
        }).then((res) => (res.ok ? goto("/membership-changes") : alert("an error occurred!")));
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "s" && e.ctrlKey) {
            save();
            e.preventDefault();
        }
    }}
/>

<div class="container">
    <div id="main">
        <h3>Editing Membership Changes</h3>
        <table>
            {#each data.entries as entry, index}
                {@const last = index === 0 ? null : data.entries[index - 1]}
                {@const next = index === data.entries.length - 1 ? null : data.entries[index + 1]}

                <tr>
                    <td>
                        <input
                            type="number"
                            placeholder="Year"
                            bind:value={entry.year}
                            style="width: 80px"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            placeholder="Month"
                            bind:value={entry.month}
                            style="width: 80px"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            placeholder="Date"
                            bind:value={entry.date}
                            style="width: 80px"
                        />
                    </td>
                    <td><input type="text" placeholder="Server ID" bind:value={entry.guild} /></td>
                    <td>
                        <select bind:value={entry.action}>
                            {#each Object.entries(actions) as [key, value]}
                                <option value={key}>{value[0]}</option>
                            {/each}
                        </select>
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder={actions[entry.action][1]}
                            bind:value={entry.primary}
                        />
                    </td>
                    <td>
                        {#if actions[entry.action].length > 2}
                            <input
                                type="text"
                                placeholder={actions[entry.action][2]}
                                bind:value={entry.secondary}
                            />
                        {/if}
                    </td>
                    <td>
                        {#if last && (last.year > entry.year || (last.year === entry.year && (last.month > entry.month || (last.month === entry.month && last.date >= entry.date))))}
                            <a
                                href={"javascript:void(0)"}
                                class="row"
                                on:click={() =>
                                    (data.entries = swap(data.entries, index, index - 1))}
                            >
                                <i class="material-icons">expand_less</i>
                            </a>
                        {/if}
                    </td>
                    <td>
                        {#if next && (entry.year > next.year || (entry.year === next.year && (entry.month > next.month || (entry.month === next.month && entry.date >= next.date))))}
                            <a
                                href={"javascript:void(0)"}
                                class="row"
                                on:click={() =>
                                    (data.entries = swap(data.entries, index, index + 1))}
                            >
                                <i class="material-icons">expand_more</i>
                            </a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </table>
        <br />
        <div class="row" style="gap: 10px">
            <button
                on:click={() =>
                    (data.entries = [
                        ...data.entries,
                        {
                            year: new Date().getFullYear(),
                            month: new Date().getMonth() + 1,
                            date: new Date().getDate(),
                            action: "induct",
                            guild: "",
                            primary: "",
                            secondary: "",
                        },
                    ])}
            >
                Add Entry
            </button>
            <button on:click={save}>Save</button>
        </div>
    </div>
</div>
