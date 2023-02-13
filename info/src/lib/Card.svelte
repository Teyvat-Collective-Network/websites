<script lang="ts">
    export let icon: string | null = null;
    export let title: string;
    export let expandable: boolean = false;
    export let open: boolean = false;

    export let icon_color: string = "inherit";

    let open_: boolean;
    $: open_ = !expandable || open;
</script>

<div class="{expandable ? 'expandable' : ''} {open_ ? 'open' : ''}">
    <button on:click={() => (open = !open)}>
        <h5>
            {#if icon}
                <i class="material-icons" style="color: {icon_color}">{icon}</i>
            {/if}
            <span>
                {title}
            </span>
        </h5>
    </button>
    <div id="slot">
        <slot />
    </div>
</div>

<style lang="scss">
    div {
        button {
            cursor: pointer;
            all: unset;
            width: 100%;
            padding: 0 1em;
            margin-bottom: -1em;

            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
        }

        & > div {
            padding: 0 1em 1em 1em;
        }
    }

    div.expandable {
        & > div {
            overflow-y: hidden;
            transition: max-height 500ms;
            max-height: 500px;
        }

        &:not(.open) > div {
            max-height: 0;
        }
    }

    h5 {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-left: 1em;
        }
    }
</style>
