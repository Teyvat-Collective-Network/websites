<script lang="ts">
    import { Modal } from "@daedalus-discord/webkit";

    export let image: string;
    export let name: string;

    export let open: boolean = false;
</script>

<button id="testimonial" on:click={() => (open = true)}>
    <img src={image} alt="{name} Icon" />
    <div id="right">
        <span>{name}</span>
        <div><slot /></div>
    </div>
</button>

<Modal bind:open background_color="var(--background-1)" overlay_color="rgb(var(--pure-rgb), 80%)">
    <div id="top">
        <img src={image} alt="{name} Icon" />
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
        width: 500px;
        height: 200px;
        background-color: var(--background-2);
        border-radius: 5px;

        transition: transform 250ms;

        &:hover {
            transform: scale(1.04);
        }
    }

    img {
        padding: 15px;
        width: 120px;
    }

    #right {
        display: inline-flex;
        flex-direction: column;
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
        width: 320px;
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
