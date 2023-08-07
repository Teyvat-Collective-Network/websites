<script lang="ts">
    import Partner from "$lib/Partner.svelte";
    import type { TCNGuild } from "$lib/types";

    export let data: { partners: TCNGuild[] };

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
            <input type="text" bind:value={query} placeholder="Filter Servers" />
        </div>
        <div class="external wide {fuzzy('genshin wizard', query) ? '' : 'hidden'}">
            <img
                src="https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png"
                alt="Genshin Wizard Icon"
                width="192"
                height="192"
            />
            <div>
                <h3>Genshin Wizard</h3>
                <p>
                    The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility
                    bot. Check out their website below!
                </p>
                <a href="https://genshinwizard.com" class="button" target="_blank" rel="noreferrer"
                    >Website</a
                >
            </div>
        </div>
        <div class="external wide {fuzzy('genshin impact tavern', query) ? '' : 'hidden'}">
            <img
                src="https://i.imgur.com/pwzRnxW.png"
                alt="Genshin Impact Tavern Icon"
                width="192"
                height="192"
            />
            <div>
                <h3>Genshin Impact Tavern</h3>
                <p>
                    The TCN is partnered with Genshin Impact Tavern, a multifaceted Discord
                    Community Server for Genshin Impact! Check out their RPG-like experience through
                    a custom bot, which lets you earn Mora that can be used to redeem official
                    merchandise, their Cat's Tail Gathering TCG tournament, and more! <i
                        >Genshin Impact Tavern is an officially endorsed server.</i
                    >
                </p>
                <a
                    href="https://discord.gg/genshinimpacttavern"
                    class="button"
                    target="_blank"
                    rel="noreferrer">Join</a
                >
            </div>
        </div>
        {#each data.partners as { id, character, name, invite, description }}
            <div class={fuzzy(name, query) || fuzzy(character, query) ? "" : "hidden"}>
                <Partner {id} {name} code={invite} image="/images/characters/{character}.png">
                    {#if description}
                        <p>{@html description ?? ""}</p>
                    {:else}
                        <span />
                    {/if}
                </Partner>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    #main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 20px;
    }

    h1,
    .wide {
        grid-column: 1 / -1;
    }

    #searchbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }

    .external {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
        background-color: var(--background-2);
        padding: 20px 40px;
        border-radius: 5px;

        & > div {
            & > h3 {
                margin: 0;
            }

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;

            margin: 20px 0;
        }

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }
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

    :global {
        a.button {
            font-weight: 400;
            padding: 0.5em 1.5em !important;
        }
    }
</style>
