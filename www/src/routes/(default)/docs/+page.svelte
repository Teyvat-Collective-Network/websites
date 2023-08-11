<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";
    import type { Doc, LocalsData } from "$lib/types";

    export let data: LocalsData & { docs: Doc[] };
</script>

<div class="container">
    <div id="main">
        {#if !data.user}
            <Redirect to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/docs`)}" />
        {:else if !data.council}
            <Callout style="red">
                <p>You are not authorized to use the TCN Documents feature!</p>
            </Callout>
        {:else}
            <h1>Documents</h1>
            <p>
                Council members can create markdown documents here, which feature Discord authentication and can be
                restricted to specified users, the TCN council, TCN staff, observers, etc.
            </p>
            <h2>Your Documents</h2>
            {#if data.docs?.length}
                <ul>
                    {#each data.docs ?? [] as { id, name }}
                        <li>
                            <a href="/docs/edit/{id}" style="color: var(--blue-text)">[edit]</a>
                            <a href="/doc/{id}">{name}</a>
                        </li>
                    {/each}
                </ul>
            {:else}
                <p>You haven't written any documents yet.</p>
            {/if}
            <br />
            <a href="/docs/edit/new" class="button">New Document</a>
        {/if}
    </div>
</div>
