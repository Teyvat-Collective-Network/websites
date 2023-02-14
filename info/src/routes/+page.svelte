<script>
    import Testimonial from "../lib/Testimonial.svelte";
</script>

<div class="container">
    <br />
    <div id="main">
        <div id="box">
            <div id="box-1"><p>Welcome to the Teyvat Collective Network</p></div>
            <div id="box-2">
                <p>
                    The mission of the TCN is to unite all mains servers across Teyvat and provide
                    support and promote collaboration between partners.
                </p>
            </div>
        </div>
        <h3>Testimonials</h3>
        <Testimonial
            image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png"
            name="Shenhe Mains"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis
            tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl
            vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam
            varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum
            faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu
            dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget
            tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
        </Testimonial>
    </div>
</div>

<style lang="scss">
    #box {
        display: grid;
        grid-template-columns: 4fr 6fr;
        gap: 1em;

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }

        & > div {
            padding: 1rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            border-radius: 5px;
        }
    }

    #box-1 {
        background-color: var(--background-2);
        font-weight: 600;
        font-size: 200%;
        line-height: 120%;
    }

    #box-2 {
        background-color: var(--accent-less);
        font-weight: 400;
        font-size: 150%;
        line-height: 150%;
        justify-content: center;
    }
</style>
