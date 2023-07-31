<script lang="ts">
    export let answer: any;

    const ans = answer;
    answer = answer.answer;
</script>

<div id="item">
    {#if typeof answer === "string"}
        {#if ans.user}
            <span class="mention user" data-id={answer}>
                <i class="material-icons">pending</i> &nbsp; Loading User...
            </span>
        {:else}
            {#each answer.split(/\r\f|\n/) as line, index}
                {#if index !== 0}<br />{/if}{line}
            {/each}
        {/if}
    {:else if typeof answer === "number"}
        <code class="plain" style="padding: 0; color: var(--green-text)">{answer}</code>
    {:else if Array.isArray(answer)}
        <ul style="margin: 10px 0">
            {#each answer as x}
                <li>{x.text}</li>
            {/each}
        </ul>
    {:else if answer.getTime}
        {#if ans.show_time}
            <span
                class="mention"
                data-id={ans.show_date ? Math.floor(answer.getTime() / 1000) : ""}
            >
                <i class="material-icons">schedule</i> &nbsp;
                <span
                    class="time {ans.show_date ? '' : 'short'}"
                    data-timestamp={Math.floor(answer.getTime() / 1000)}
                />
            </span>
        {:else}
            <span class="mention">
                <i class="material-icons">schedule</i>
                &nbsp;{answer.getFullYear()}-{answer.getMonth() + 1}-{answer.getDate()}
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
