<script lang="ts">
    export let src: string;
    export let alt: string;

    export let width: string = "";
    export let height: string = "";

    export let transparent: boolean = false;

    export let open: boolean = false;

    export let classes: string = "";
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && (open = false)} />

<div class="box">
    <img
        class="base {classes}"
        {src}
        {alt}
        {width}
        {height}
        on:click={() => (open = true)}
        on:keydown={() => (open = true)}
        style="max-width: 100%"
    />
    <div
        class="lightbox {open ? 'open' : ''}"
        on:click={() => (open = false)}
        on:keydown={() => (open = false)}
    >
        <img
            {src}
            {alt}
            class={transparent ? "transparent" : ""}
            style="max-width: 75%; max-height: 75%"
        />
    </div>
</div>

<style lang="scss">
    .box {
        display: inline-block;
    }

    .lightbox {
        display: inline-grid;
        align-items: center;
        justify-items: center;
        position: fixed;
        inset: 0;
        z-index: 25;
        background-color: rgb(var(--pure-rgb), 80%);
        backdrop-filter: blur(1px);
        transition: opacity 200ms;

        img {
            transition: transform 200ms;

            &:not(.transparent) {
                background-color: var(--background-X);
            }
        }

        &:not(.open) {
            opacity: 0%;
            pointer-events: none;

            img {
                transform: scale(1);
            }
        }

        &.open {
            opacity: 100%;

            img {
                transform: scale(1.2);
            }
        }
    }
</style>
