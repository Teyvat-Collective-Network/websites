<script lang="ts">
    import TimeMention from "./TimeMention.svelte";
    import User from "./UserMention.svelte";
    import type { FormAnswer } from "./types";

    export let answer: FormAnswer;

    const ans = answer;
    const value = answer.answer;
</script>

<div id="item">
    {#if typeof value === "string"}
        {#if ans.user}
            <User id={value} />
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
    {:else}
        <TimeMention date={value} show_date={ans.show_date} show_time={ans.show_time} />
    {/if}
</div>

<style lang="scss">
    :global {
        #item span.mention {
            top: 2px;
        }
    }
</style>
