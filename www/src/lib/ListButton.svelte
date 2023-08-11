<script lang="ts">
    import Icon from "./Icon.svelte";
    import { swap, without } from "./util";

    export let array: unknown[];
    export let index: number;
    export let del: boolean = false;
    export let up: boolean | null = null;
    export let down: boolean | null = null;

    up ??= !down;
    down ??= !up;
</script>

{#if del || index != (up ? 0 : array.length - 1)}
    <a
        href={"javascript:void(0)"}
        class="row"
        on:click={() => (array = del ? without(array, index) : swap(array, index, index + (up ? -1 : 1)))}
        style={del ? "color: var(--red-text)" : ""}
    >
        <Icon icon={del ? "delete" : up ? "expand_less" : "expand_more"} />
    </a>
{/if}
