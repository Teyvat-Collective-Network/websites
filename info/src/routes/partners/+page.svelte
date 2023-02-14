<script lang="ts">
    import Partner from "../../lib/Partner.svelte";
    export let data: { partners: any[] };

    let query: string = "";

    function fuzzy(string: string, query: string): boolean {
        const lower = query.toLowerCase();
        string = string.toLowerCase();

        let i = 0;
        for (const char of lower) {
            if ((i = string.indexOf(char, i)) === -1) return false;
            i++;
        }

        return true;
    }
</script>

<div class="container">
    <div id="main">
        <h1>Our Partners</h1>
        <div id="searchbar" class="wide">
            <i class="material-icons">search</i>
            <input type="text" bind:value={query} />
        </div>
        {#if !query}
            <div id="box">
                <div id="box-1">
                    <p>
                        The TCN is a network of {data.partners.length} high-quality Genshin Impact Character
                        Mains-style Discord servers that focus on creating fan communities.
                    </p>
                </div>
                <div id="box-2">
                    <p>
                        Do you own a Discord server dedicated to a playable Genshin Impact character
                        and want to join the TCN? Apply here!
                    </p>
                    <a href="/join" class="button">Apply To Join</a>
                </div>
            </div>
            <div class="external wide">
                <img
                    src="https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png"
                    alt="Genshin Wizard Icon"
                />
                <div>
                    <h3>Genshin Wizard</h3>
                    <p>
                        The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact
                        utility bot. Check out their website below!
                    </p>
                    <a href="https://genshinwizard.com" class="button">Website</a>
                </div>
            </div>
        {/if}
        {#each data.partners as { character, name, invite, icon, description }}
            <div class={fuzzy(name, query) || fuzzy(character, query) ? "" : "hidden"}>
                <Partner {name} code={invite} image={icon}><p>{@html description}</p></Partner>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    #main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1em;
    }

    h1,
    .wide {
        grid-column: 1 / -1;
    }

    #searchbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        margin-bottom: 2em;
    }

    .external {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
        background-color: var(--background-2);
        padding: 1em 2em;
        border-radius: 5px;

        & > div {
            margin-bottom: 2em;
        }

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }
    }

    #box {
        grid-column: 1/ -1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1em;
        padding-bottom: 2em;

        & > div {
            padding: 1rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            border-radius: 5px;
        }
    }

    #box-1 {
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }

    #box-2 {
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }

    .hidden {
        position: fixed;
        width: 0;
        height: 0;
        top: 100vh;
        left: 100vw;
        opacity: 0;
        pointer-events: none;
    }
</style>
