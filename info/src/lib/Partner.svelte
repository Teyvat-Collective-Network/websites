<script lang="ts">
    export let name: string;
    export let code: string;
    export let image: string;
</script>

<div class="outer">
    <img src={image} alt="{name} Icon" width="200px" />
    <b>{name}</b>
    <slot />
    <a href="https://discord.gg/{code}" class="button">Join</a>
</div>

<style lang="scss">
    div.outer {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--background-2);
        padding: 1em;
        border-radius: 5px;
    }

    b {
        font-size: 150%;
        text-align: center;
    }

    a.button {
        font-weight: 400;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
</style>
