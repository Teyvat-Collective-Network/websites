<script lang="ts">
    import { onMount } from "svelte";
    import Testimonial from "../lib/Testimonial.svelte";

    let scroller: Element;
    let perma_paused: boolean = false;
    let paused: boolean = false;

    let x: number = 0;

    function scroll() {
        if (!perma_paused && !paused && open.every((x) => !x)) {
            x += 0.2;
            scroller.scrollTo({ left: x });
        }

        requestAnimationFrame(scroll);
    }

    onMount(scroll);

    function scroll_left() {
        scroller.scrollTo({ left: x - (x % 520 || 520), behavior: "smooth" });
        perma_paused = true;
    }

    function scroll_right() {
        scroller.scrollTo({
            left: x + ((((520 - x) % 520) + 520) % 520 || 520),
            behavior: "smooth",
        });

        perma_paused = true;
    }

    const open: boolean[] = [];
</script>

<template lang="pug">
    .container
        br
        #main
            #box
                #box-1
                    p Welcome to the Teyvat Collective Network
                #box-2
                    p The mission of the TCN is to unite all mains servers across Teyvat and provide support and promote collaboration between partners.
            h4 Testimonials
            #scroll-box(
                on:mouseover!="{ () => (paused = true) }",
                on:focus!="{ () => (paused = true) }",
                on:mouseout!="{ () => (paused = false) }",
                on:blur!="{ () => (paused = false ) }"
            )
                #scroller(bind:this!="{ scroller }", on:scroll!="{ (e) => (x = e.target.scrollLeft) }")
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 1",
                        bind:open!="{ open[0] }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 2",
                        bind:open!="{ open[1] }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 3",
                        bind:open!="{ open[2] }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 4",
                        bind:open!="{ open[3] }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 5",
                        bind:open!="{ open[4] }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                button.scroller(style="left: -20px", on:click!="{ scroll_left }"): i.material-icons keyboard_arrow_left
                button.scroller(style="right: -20px", on:click!="{ scroll_right }"): i.material-icons keyboard_arrow_right
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

    #scroll-box {
        position: relative;
    }

    #scroller {
        display: flex;
        flex-direction: row;
        gap: 20px;
        overflow-x: scroll;
        border-radius: 5px;
    }

    button.scroller {
        all: unset;
        position: absolute;
        top: 80px;
        display: grid;
        align-items: center;
        justify-items: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        outline: none;
        background-color: var(--background-1);
        border: 2px solid var(--background-2);
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
