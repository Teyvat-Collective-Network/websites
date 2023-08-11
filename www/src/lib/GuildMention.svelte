<script lang="ts">
    import Icon from "./Icon.svelte";

    export let id: string;

    let other_classes: string = "";
    export { other_classes as class };
</script>

<span {...$$props} class="mention guild {other_classes}" data-id={id}>
    <Icon icon="pending" /> &nbsp; Loading Server...
</span>
