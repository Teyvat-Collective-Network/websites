<script lang="ts">
    export let name: string;
    export let code: string = "";
    export let link: string = `https://discord.gg/${code}`;
    export let image: string;
    export let button: string = "Join";
</script>

<div class="outer">
    <div id="top">
        <img src={image} alt="{name} Icon" width="200px" />
        <b>{name}</b>
        <slot />
    </div>
    <a href={link} class="button">{button}</a>
</div>

<style lang="scss">
    div.outer {
        justify-content: space-between;
        background-color: var(--background-2);
        padding: 1.5em;
        border-radius: 5px;
    }

    #top,
    div.outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }

    b {
        font-size: 150%;
        text-align: center;
    }

    a.button {
        font-weight: 400;
        padding-left: 1.5em;
        padding-right: 1.5em;
    }
</style>
