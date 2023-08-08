<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import Testimonial from "$lib/Testimonial.svelte";
    import type { LocalsData, TCNGuild, Testimonial as TestimonialType } from "$lib/types";

    export let data: LocalsData & {
        partners: TCNGuild[];
        testimonials: TestimonialType[];
    };
</script>

<div class="container">
    <br />
    <div id="main">
        <div id="box">
            <div id="box-1">
                <p>Welcome to the Teyvat Collective Network (TCN)</p>
            </div>
            <div id="box-2">
                <p>
                    The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote
                    collaboration between partners.
                </p>
            </div>
            <div id="box-3">
                <p>
                    The TCN is a network of {data?.partners?.length} high-quality Genshin Impact Discord servers that are
                    dedicated to fostering Mains-style fan communities.
                </p>
            </div>
            <div id="box-4">
                <p>
                    Do you own a Discord server dedicated to a playable Genshin Impact character and want to join the
                    TCN? Apply here!
                </p>
                <a href="/join" class="button">Apply To Join</a>
            </div>
        </div>
        <br />
        <h4 class="row" style="gap: 10px">
            Testimonials
            {#if data.observer}
                <a href="/admin/testimonials"><Icon icon="edit" /></a>
            {/if}
        </h4>
        <div id="testimonials">
            {#each data.testimonials as testimonial}
                <Testimonial image={testimonial.image} name={testimonial.name}>
                    {@html testimonial.content}
                </Testimonial>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    #box {
        display: grid;
        gap: 20px;
        grid-template-columns: 4fr 1fr 1fr 4fr;

        & > div {
            padding: 20px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
        }

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;

            & > div {
                grid-column: 1;
            }
        }
    }

    #box-1 {
        grid-column: 1;
        background-color: var(--background-2);
        font-weight: 600;
        font-size: 200%;
        line-height: 120%;
    }

    #box-2 {
        grid-column: 2 / 5;
        background-color: var(--accent-less);
        font-weight: 400;
        font-size: 150%;
        line-height: 150%;
        justify-content: center;
    }

    #box-3 {
        grid-column: 1 / 3;
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }

    #box-4 {
        grid-column: 3 / 5;
        background-color: var(--background-2);
        font-size: 125%;
        line-height: 175%;
    }

    #testimonials {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
        gap: 10px;
    }
</style>
