<script lang="ts">
    import Testimonial from "$lib/Testimonial.svelte";

    export let data: {
        auth: boolean;
        testimonials: { image: string; name: string; content: string }[];
    };
</script>

<template lang="pug">
    .container
        br
        #main
            #box
                #box-1
                    p Welcome to the Teyvat Collective Network (TCN)
                #box-2
                    p The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote collaboration between partners.
            h4.row(style="gap: 10px") Testimonials
                +if("data.auth")
                    a(href="/admin/testimonials"): i.material-icons edit
            #testimonials
                +each("data.testimonials as testimonial")
                    Testimonial(
                        image!="{ testimonial.image }",
                        name!="{ testimonial.name }",
                        on:open!="{ () => (stop = true) }"
                    ) {@html testimonial.content}
</template>

<style lang="scss">
    #box {
        display: grid;
        grid-template-columns: 4fr 6fr;
        gap: 20px;

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }

        & > div {
            padding: 20px 40px;
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

    #testimonials {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
        gap: 10px;
    }
</style>
