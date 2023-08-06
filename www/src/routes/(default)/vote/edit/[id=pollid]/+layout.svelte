<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;
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
