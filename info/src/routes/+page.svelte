<script lang="ts">
    import { onMount } from "svelte";
    import Testimonial from "../lib/Testimonial.svelte";

    let scroller: Element;
    let stop: boolean = false;
    let paused: boolean = false;

    const max_frames: number = 400;
    let frames: number = max_frames;
    let x: number = 0;

    function scroll() {
        if (!paused) {
            frames--;
            if (frames === 0) {
                if (scroller.scrollWidth <= scroller.scrollLeft + scroller.clientWidth)
                    scroller.scrollTo({ left: 0, behavior: "smooth" });
                else scroll_right(false);

                frames = max_frames;
            }
        }

        if (!stop) requestAnimationFrame(scroll);
    }

    onMount(() => {
        scroller?.scrollTo({ left: 0 });

        scroll();

        document.querySelectorAll("#scroller > button").forEach((e: any) => {
            e.onclick = (ev: any) => {
                scroller?.scrollTo({
                    left: e.offsetLeft - scroller.clientWidth / 2 + 260,
                    behavior: "smooth",
                });
                stop = true;
            };
        });
    });

    function scroll_left(do_stop: boolean = true) {
        scroller?.scrollTo({ left: x - (x % 520 || 520), behavior: "smooth" });
        stop ||= do_stop;
    }

    function scroll_right(do_stop: boolean = true) {
        scroller?.scrollTo({
            left: x + ((((520 - x) % 520) + 520) % 520 || 520),
            behavior: "smooth",
        });

        stop ||= do_stop;
    }

    function pause() {
        frames = max_frames;
        paused = true;
    }

    function unpause() {
        paused = false;
    }
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
                on:mouseover!="{ pause }",
                on:mouseout!="{ unpause }",
                on:focus!="{ pause }",
                on:blur!="{ unpause }"
            )
                #scroller(bind:this!="{ scroller }", on:scroll!="{ (e) => (x = e.target.scrollLeft) }")
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 1",
                        on:open!="{ () => (stop = true) }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 2",
                        on:open!="{ () => (stop = true) }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 3",
                        on:open!="{ () => (stop = true) }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 4",
                        on:open!="{ () => (stop = true) }"
                    ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas at odio quis tincidunt. Nam odio nunc, facilisis at efficitur sed, condimentum eget erat. Nam id nisl vestibulum, fermentum sapien at, tempus libero. Morbi semper pharetra placerat. Etiam varius ornare eros, ac pulvinar mi aliquam vel. Curabitur nec lectus ut ante rutrum faucibus. Phasellus fermentum finibus elit sit amet tristique. Duis scelerisque odio eu dapibus porttitor. Nunc ut pharetra arcu, sed eleifend justo. Cras pulvinar, purus eget tincidunt eleifend, mi justo aliquet metus, in porta nunc nisl a tortor.
                    Testimonial(
                        image="https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
                        name="Shenhe Mains 5",
                        on:open!="{ () => (stop = true) }"
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
        cursor: default;
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
