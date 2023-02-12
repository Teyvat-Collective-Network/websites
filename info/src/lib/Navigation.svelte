<script lang="ts">
    export let last: [string, string] | null = null;
    export let next: [string, string] | null = null;
</script>

{#each [0, 1] as x}
    <nav>
        <div>
            {#if last}<a href={last[0]}>&lt; {last[1]}</a>{/if}
        </div>

        <div>
            {#if next}<a href={next[0]}>{next[1]} &gt;</a>{/if}
        </div>
    </nav>

    {#if x === 0} <slot /> {/if}
{/each}

<style lang="scss">
    nav {
        background-color: var(--accent-darker);
        padding: 0.25em 1em;
        border-radius: 5px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
