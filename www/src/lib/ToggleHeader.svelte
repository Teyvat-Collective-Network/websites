<script lang="ts">
    import Icon from "./Icon.svelte";

    export let e: string = "h4";
    export let title: string;
    export let show: boolean;
</script>

<svelte:element this={e} class="row" style="gap: 10px">
    {title}
    <a href={"javascript:void(0)"} on:click={() => (show = !show)}>
        <Icon icon={show ? "expand_less" : "expand_more"} />
    </a>
</svelte:element>
