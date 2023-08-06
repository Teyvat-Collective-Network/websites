<script lang="ts">
    import type { FormAnswer } from "./types";

    export let answer: FormAnswer;

    const ans = answer;
    const value = answer.answer;
</script>

<div id="item">
    {#if typeof value === "string"}
        {#if ans.user}
            <span class="mention user" data-id={value}>
                <i class="material-icons">pending</i> &nbsp; Loading User...
            </span>
        {:else}
            {#each value.split(/\r\f|\n/) as line, index}
                {#if index !== 0}<br />{/if}{line}
            {/each}
        {/if}
    {:else if typeof value === "number"}
        <code class="plain" style="padding: 0; color: var(--green-text)">{value}</code>
    {:else if Array.isArray(value)}
        <ul style="margin: 10px 0">
            {#each value as x}
                <li>{x.text}</li>
            {/each}
        </ul>
    {:else if value.getTime}
        {#if ans.show_time}
            <span class="mention" data-id={ans.show_date ? Math.floor(value.getTime() / 1000) : ""}>
                <i class="material-icons">schedule</i> &nbsp;
                <span
                    class="time {ans.show_date ? '' : 'short'}"
                    data-timestamp={Math.floor(value.getTime() / 1000)}
                />
            </span>
        {:else}
            <span class="mention">
                <i class="material-icons">schedule</i>
                &nbsp;{value.getFullYear()}-{value.getMonth() + 1}-{value.getDate()}
            </span>
        {/if}
    {/if}
</div>

<style lang="scss">
    :global {
        #item span.mention {
            top: 2px;
        }
    }
</style>
