<script lang="ts">
    export let e: string;
    export let id: string;
    export let value: string;
</script>

<svelte:element this={e} {id}>
    <a href="#{id}"><i class="material-icons">link</i></a>
    <span>{@html value}</span>
</svelte:element>

<style lang="scss">
    a {
        float: left;
        padding-right: 0.5em;
    }
</style>
