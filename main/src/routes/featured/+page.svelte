<script lang="ts">
    export let data: any;
</script>

<div class="container">
    <div id="main">
        <h1 class="row" style="gap: 20px">
            Featured Content
            {#if data.auth}
                <a href="/admin/featured"><i class="material-icons">edit</i></a>
            {/if}
        </h1>

        {#each data.announcements as item}
            <div class="announcement {item.highlight ? 'highlight' : ''}">
                <div>
                    <i class="material-icons">{item.icon}</i>
                    <span>{item.title}</span>
                </div>
                <div>
                    {@html item.body}
                </div>
            </div>
            <br />
        {/each}
    </div>
</div>

<style lang="scss">
    .announcement {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
        border-radius: 5px;

        div:first-of-type {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1em;

            span {
                font-weight: 400;
                font-size: 120%;
            }
        }

        &:not(.highlight) {
            background-color: var(--background-2);
        }

        &.highlight {
            background-color: var(--accent-less);
        }
    }
</style>
