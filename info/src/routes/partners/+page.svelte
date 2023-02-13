<script lang="ts">
    import Partner from "../../lib/Partner.svelte";
    export let data: { partners: { name: string; code: string; image: string; blurb: string }[] };
</script>

<div class="container">
    <div id="main">
        <h1>Our Partners</h1>
        {#each data.partners as { name, code, image, blurb }}
            <Partner {name} {code} {image}>{@html blurb}</Partner>
        {/each}
    </div>
</div>

<style lang="scss">
    #main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1rem;
    }

    h1 {
        grid-column: 1 / -1;
    }
</style>
