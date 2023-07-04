<script lang="ts">
    export let id: string;
    export let name: string;
    export let code: string = "";
    export let link: string = `https://discord.gg/${code}`;
    export let image: string;
    export let button: string = "Join";

    let open: boolean = false;
</script>

<div class="outer">
    <div id="top">
        <img src={image} alt="{name} Icon" width="150px" height="150px" />
        <a href="/server/{id}"><b>{name}</b></a>
        <slot />
    </div>
    <div class="row">
        <a href={link} target="_blank" rel="noreferrer" class="button">{button}</a>
    </div>
</div>

<style lang="scss">
    div.outer {
        justify-content: space-between;
        background-color: var(--background-2);
        padding: 1em;
        border-radius: 5px;
        height: 100%;
        box-sizing: border-box;
    }

    #top,
    div.outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }

    img {
        border-radius: 5px;
    }

    b {
        font-size: 150%;
        text-align: center;
    }
</style>
