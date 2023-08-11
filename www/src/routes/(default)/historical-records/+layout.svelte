<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";
    import type { LocalsData } from "$lib/types";

    export let data: LocalsData;
</script>

{#if !data.user}
    <Redirect to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/historical-records`)}" />
{:else if !data.council}
    <Callout style="red">
        <p>You are not authorized to access this page!</p>
    </Callout>
{:else}
    <slot />
{/if}
