<script lang="ts">
    export let icon: string;

    let other_classes: string = "";
    export { other_classes as class };
</script>

<i class="material-icons {other_classes}" {...$$props}>{icon}</i>
