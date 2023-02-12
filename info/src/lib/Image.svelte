<script lang="ts">
    export let src: string;
    export let alt: string;

    export let open: boolean = false;
</script>

<div class="box">
    <img
        class="base"
        {src}
        {alt}
        on:click={() => (open = true)}
        on:keydown={() => (open = true)}
        style="max-width: 100%"
    />
    <div
        class="lightbox {open ? 'open' : ''}"
        on:click={() => (open = false)}
        on:keydown={() => (open = false)}
    >
        <img {src} {alt} style="max-width: 75%" />
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
        background-color: rgb(var(--extra-dark-rgb), 80%);
        transition: 200ms ease-in-out;

        img {
            transition: 200ms ease-in-out;
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
