<script lang="ts">
    export let e: string = "h4";
    export let title: string;
    export let show: boolean;
</script>

<svelte:element this={e} class="row" style="gap: 10px">
    {title}
    <a href={"javascript:void(0)"} on:click={() => (show = !show)}>
        <i class="material-icons">{show ? "expand_less" : "expand_more"}</i>
    </a>
</svelte:element>
