<script lang="ts">
    import type { UserRouteData } from "$lib/types";

    export let data: UserRouteData;

    const arrays = [
        [data.api?.owns, "Server Owner"],
        [data.api?.advises, "Council Advisor"],
        [data.api?.staff, "Staff"],
    ] as const;
</script>

<div class="container">
    <div id="main">
        {#if data.discord}
            <div class="row" style="gap: 1em">
                <img
                    src={data.discord.icon}
                    alt="{data.discord.tag} Profile Avatar"
                    width="75"
                    style="border-radius: 50%"
                />
                <h2>{data.discord.tag}</h2>
            </div>
            {#each arrays as [array, title]}
                {#if array?.length}
                    <b>{title} of</b>
                    {#each array as server, index}
                        {#if index !== 0}, {/if}
                        <a href="/server/{server.id}">{server.name}</a>
                    {/each}
                    <br />
                {/if}
            {/each}
        {:else}
            No user with ID <b>{data.id}</b> could be found!
            <br />
        {/if}
        <a href="/">&lt; Home</a>
    </div>
</div>
