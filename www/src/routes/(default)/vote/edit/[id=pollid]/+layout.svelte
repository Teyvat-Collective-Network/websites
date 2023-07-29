<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;
</script>

{#if data.observer}
    <slot />
{:else}
    <Redirect />
{/if}
