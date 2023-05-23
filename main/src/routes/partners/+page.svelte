<script lang="ts">
    import Partner from "$lib/Partner.svelte";
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

<template lang="pug">
    .container
        #main
            h1 Our Partners
            #box
                #box-1
                    p The TCN is a network of {data.partners.length} high-quality Genshin Impact Discord servers that are dedicated to fostering Mains-style fan communities.
                #box-2
                    p Do you own a Discord server dedicated to a playable Genshin Impact character and want to join the TCN? Apply here!
                    a.button(href="/join") Apply To Join
            #searchbar.wide
                i.material-icons search
                input(type="text", bind:value!="{ query }")
            .external.wide(class!="{ fuzzy('genshin wizard', query) ? '' : 'hidden' }")
                img(
                    src="https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png",
                    alt="Genshin Wizard Icon"
                )
                div
                    h3 Genshin Wizard
                    p The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility bot. Check out their website below!
                    a.button(href="https://genshinwizard.com") Website
            +each("data.partners as { character, name, invite, description }")
                div(class!="{ fuzzy(name, query) || fuzzy(character, query) ? '' : 'hidden' }")
                    Partner(
                        name!="{ name }",
                        code!="{ invite }",
                        image!="/images/characters/{character}.png"
                    )
                        +if("description")
                            p {@html description ?? ""}
                            +else
                                span
</template>

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

    #box {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 20px;
        padding-bottom: 40px;

        & > div {
            padding: 20px 40px;
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

    :global {
        a.button {
            font-weight: 400;
            padding: 0.5em 1.5em !important;
        }
    }
</style>
