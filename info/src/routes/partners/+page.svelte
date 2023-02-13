<script lang="ts">
    import Partner from "../../lib/Partner.svelte";
    export let data: { partners: { name: string; code: string; image: string; blurb: string }[] };
</script>

<div class="container">
    <div id="main">
        <h1>Our Partners</h1>
        <Partner
            name="Genshin Wizard"
            link="https://genshinwizard.com"
            image="https://genshinwizard.com/wp-content/uploads/2022/09/cropped-genshinwizard_logo-192x192.png"
            button="Website"
        >
            <p>
                The TCN is partnered with Genshin Wizard, a multi-purpose Genshin Impact utility
                bot. Check out their website below!
            </p>
        </Partner>
        {#each data.partners as { name, code, image, blurb }}
            <Partner {name} {code} {image}><p>{@html blurb}</p></Partner>
        {/each}
    </div>
</div>

<style lang="scss">
    #main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1em;
    }

    h1 {
        grid-column: 1 / -1;
    }
</style>
