<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";
    import type { LocalsData } from "$lib/types";

    export let data: LocalsData & { missing?: boolean };
</script>

{#if data.observer}
    {#if data.missing}
        <Redirect to="/vote" />
    {:else}
        <slot />
    {/if}
{:else}
    <Redirect />
{/if}
