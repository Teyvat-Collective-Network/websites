<script lang="ts">
    import { Modal } from "@daedalus-discord/webkit";
    import { createEventDispatcher } from "svelte";

    export let image: string;
    export let name: string;

    export let open: boolean = false;

    let element: Element;

    const dispatch = createEventDispatcher();
</script>

<button id="testimonial" on:click={() => ((open = true), dispatch("open"))} bind:this={element}>
    {#if image}
        <img src={image} alt="{name} Icon" />
    {/if}
    <div id="right" class={image ? "" : "full"}>
        <span>{name}</span>
        <div><slot /></div>
    </div>
</button>

<Modal
    bind:open
    background_color="var(--background-1)"
    overlay_color="rgb(var(--pure-rgb), 80%)"
    on:close={() => dispatch("close")}
>
    <div id="top">
        {#if image}
            <img src={image} alt="{name} Icon" />
        {/if}
        <span>{name}</span>
    </div>
    <div id="bottom">
        <slot />
    </div>
</Modal>

<style lang="scss">
    #testimonial {
        all: unset;

        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        height: 200px;
        background-color: var(--background-2);
        border-radius: 5px;
    }

    img {
        padding: 15px;
        width: calc(min(max(5vw - 45px, 0px), 25px) + 100px);
    }

    #right {
        display: inline-flex;
        flex-direction: column;
        width: calc(100% - min(max(5vw - 45px, 0px), 25px) - 130px);

        &.full {
            width: 100%;
        }
    }

    span {
        font-size: 150%;
        font-weight: 400;
        width: 320px;
        height: 20px;
        margin: 15px;
    }

    #right > div {
        display: inline-block;
        height: 5.25em;
        margin: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    #top {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #bottom {
        padding: 1em;
    }
</style>
