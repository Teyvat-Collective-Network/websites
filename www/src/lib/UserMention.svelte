<script lang="ts">
    import Icon from "./Icon.svelte";

    export let id: string;

    let other_classes: string = "";
    export { other_classes as class };
</script>

<span class="mention user {other_classes}" data-id={id} {...$$props}>
    <Icon icon="pending" /> &nbsp; Loading User...
</span>
