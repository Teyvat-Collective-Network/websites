<script lang="ts">
    import Icon from "./Icon.svelte";

    export let date: Date;
    export let show_date: boolean = true;
    export let show_time: boolean = true;

    let other_classes: string = "";
    export { other_classes as class };

    const timestamp = Math.floor(date.getTime() / 1000);
</script>

{#if show_date || show_time}
    <span class="mention {other_classes}" data-id={show_date && show_time ? timestamp : ""} {...$$props}>
        <Icon icon="schedule" />
        {#if show_time}
            &nbsp; <span class="time {show_date ? '' : 'short'}" data-timestamp={timestamp} />
        {:else}
            &nbsp;{date.getFullYear()}-{(date.getMonth() + 1).toString().padStart(2, "0")}-{date
                .getDate()
                .toString()
                .padStart(2, "0")}
        {/if}
    </span>
{/if}
