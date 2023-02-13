<div class="container">
    <br />
    <div id="main">
        <div id="box-1"><p>Welcome to the Teyvat Collective Network</p></div>
        <div id="box-2">
            <p>
                The mission of the TCN is to unite all mains servers across Teyvat and provide
                support and promote collaboration between partners.
            </p>
        </div>
        <div id="box-3">
            <p>
                The TCN is a network of over 40 quality Discord servers, each dedicated to a
                playable character from the game Genshin Impact.
            </p>
            <a href="/partners" class="button">Our Partners</a>
        </div>
        <div id="box-4">
            <p>
                Do you own a Discord server dedicated to a playable Genshin Impact character and
                want to join the TCN? Apply here!
            </p>
            <a href="/join" class="button">Apply To Join</a>
        </div>
    </div>
</div>

<style lang="scss">
    #main {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 4fr;
        grid-template-areas: "a b b b" "c c d d";
        gap: 1em;

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, auto);
            grid-template-areas: "a" "b" "c" "d";
        }

        & > div {
            padding: 1em;
            display: flex;
            flex-direction: column;
            align-items: center;

            border-radius: 5px;
        }
    }

    #box-1 {
        grid-area: a;
        background-color: var(--background-2);
        font-weight: 600;
        font-size: 200%;
        line-height: 120%;
    }

    #box-2 {
        grid-area: b;
        background-color: var(--accent-less);
        font-weight: 400;
        font-size: 150%;
        line-height: 150%;
        justify-content: center;
    }

    #box-3 {
        grid-area: c;
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }

    #box-4 {
        grid-area: d;
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }
</style>
