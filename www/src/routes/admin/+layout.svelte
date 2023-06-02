<script lang="ts">
    import Redirect from "$lib/Redirect.svelte";

    export let data: { noaccess?: boolean };
</script>

{#if data.noaccess}
    <Redirect />
{:else}
    <slot />
{/if}
