<script lang="ts">
    export let e: string;
    export let icon: string = "";
    export let text: string;
</script>

<svelte:element this={e} class="item">
    <i class="material-icons">{icon}</i>
    {text}
</svelte:element>

<style lang="scss">
    .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
</style>
