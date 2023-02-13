<script lang="ts">
    export let banner: string | null = null;
    export let icon: string;
    export let title: string;
    export let code: string;
</script>

<div id="invite">
    {#if banner}
        <div id="banner" style="background-image: url({banner})" />
    {:else}
        <div id="banner" style="background-color: rgb(var(--pure-rgb), 50%)" />
    {/if}
    <img id="icon" src={icon} alt="icon" />
    <b id="title">{title}</b>
    <a id="join" href="https://discord.gg/{code}" class="button">JOIN</a>
</div>

<style lang="scss">
    #invite {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 3fr 2fr;
        grid-template-areas: "a a a" "b c d";
        gap: 1em;
        border-radius: 5px;
        align-items: center;
        background-color: rgb(var(--pure-rgb), 50%);
        width: min(100%, max(40%, 400px));
    }

    #banner {
        grid-area: a;
        height: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 5px 5px 0 0;
    }

    #icon {
        grid-area: b;
        max-width: 100%;
        margin: 0 0 1em 1em;
        border-radius: 10px;
    }

    #title {
        grid-area: c;
        padding: 0 0 1em 1em;
    }

    #join {
        grid-area: d;
        margin: 0 1em 1em 0;
    }
</style>
