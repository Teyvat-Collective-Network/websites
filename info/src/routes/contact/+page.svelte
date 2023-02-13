<script lang="ts">
    import { onMount } from "svelte";
    import Callout from "../../lib/Callout.svelte";
    import Linkable from "../../lib/Linkable.svelte";
</script>

<div class="container">
    <div id="main">
        <h1>Contact Us</h1>
        <Linkable e="h2" id="hub" value="TCN Hub" />
        <p>
            Join the TCN Hub to contact observers and other server staff and ask questions or give
            feedback about the TCN!
        </p>
        <br />
        <div id="invite">
            <div id="banner" />
            <img id="icon" src="/favicon.png" alt="icon" />
            <b id="title">TCN Hub</b>
            <a id="join" href="https://discord.gg/FG2wpbywSx" class="button">JOIN</a>
        </div>
        <Linkable e="h2" id="observers" value="Observers" />
        {#await new Promise((r) => onMount(() => r(null))) then}
            {#await fetch("/api/observers")}
                <p>Loading observers...</p>
            {:then response}
                {#await response.json()}
                    <p>Loading observers...</p>
                {:then [observers, error]}
                    {#if error}
                        <Callout style="red">
                            <p>{error}</p>
                        </Callout>
                    {/if}

                    {#if observers}
                        <ul>
                            {#each observers as observer}
                                <li>
                                    <a href="https://discord.com/users/{observer.id}"
                                        >{observer.tag}</a
                                    >
                                    (<code>{observer.id}</code>)
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/await}
            {:catch}
                <Callout style="red">
                    <p>Fetching observers failed; please check your internet connection.</p>
                </Callout>
            {/await}
        {/await}
    </div>
</div>

<style lang="scss">
    #invite {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 3fr 2fr;
        grid-template-areas: "a a a" "b c d";
        gap: 1rem;
        border-radius: 5px;
        align-items: center;
        background-color: rgb(var(--pure-rgb), 50%);
        width: min(100%, max(40%, 400px));
    }

    img {
        width: 100%;
    }

    #banner {
        grid-area: a;
        height: 100%;
        background-image: url(https://i.imgur.com/DXyVcRR.png);
        background-size: cover;
        background-position: bottom;
    }

    #icon {
        grid-area: b;
        padding: 0 0 1rem 1rem;
    }

    #title {
        grid-area: c;
        padding: 0 0 1rem 1rem;
    }

    #join {
        grid-area: d;
        margin: 0 1rem 1rem 0;
    }
</style>
