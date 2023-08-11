<script lang="ts">
    import type { TCNGuild } from "$lib/types";

    export let data:
        | { id: string; missing: true }
        | (TCNGuild & { missing: undefined; owner_tag?: string; advisor_tag?: string });
</script>

<div class="container">
    <div id="main">
        {#if data.missing}
            There is no server in the TCN with ID <b>{data.id}</b>!
        {:else}
            <div class="row" style="gap: 1em">
                <img src="/images/characters/{data.character}.png" alt="{data.name} Icon" width="75" />
                <h2>
                    {data.name} (<a href="https://discord.gg/{data.invite}" target="_blank" rel="noreferrer">Join</a>)
                </h2>
            </div>
            <b>Server Owner</b>: <a href="/user/{data.owner}">{data.owner_tag}</a> (<code>{data.owner}</code>)
            {#if data.advisor}
                <br />
                <b>Council Advisor</b>: <a href="/user/{data.advisor}">{data.advisor_tag}</a> (<code
                    >{data.advisor}</code
                >)
            {/if}
        {/if}
        <br /><br />
        <a href="/partners">&lt; Back to Partner List</a>
    </div>
</div>
