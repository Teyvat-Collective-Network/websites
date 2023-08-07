<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";
    import type { LocalsData } from "$lib/types";

    export let data: LocalsData;
</script>

{#if !data.observer}
    <Redirect />
{:else}
    <slot />
{/if}
