<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;
</script>

{#if data.council}
    <slot />
{:else}
    <Redirect />
{/if}
