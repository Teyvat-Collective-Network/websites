<script lang="ts">
    import Icon from "./Icon.svelte";

    export let id: string;

    let other_classes: string = "";
    export { other_classes as class };
</script>

<span class="mention guild {other_classes}" data-id={id} {...$$props}>
    <Icon icon="pending" /> &nbsp; Loading Server...
</span>
