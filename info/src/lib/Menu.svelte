<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let open: boolean = false;
    let href: string;

    const close = () => (open = false);

    let doc: Document | null = null;

    onMount(() => {
        document
            .querySelectorAll("#contents > a")
            .forEach((e: any) => (e.onclick = () => setTimeout(close)));
        page.subscribe(
            (x) => (
                (href = x.url.href),
                document.querySelectorAll("#contents > a").forEach((e: any) => {
                    e.style.backgroundColor = e.href === href ? "#00000044" : "";
                })
            )
        );
        doc = document;
    });

    let index = 0;
    $: open &&
        (index = [...document.querySelectorAll("#contents > a")].findIndex(
            (e: any) => e.href === href
        ));
    $: (doc?.querySelector(`#contents > a:nth-child(${index + 1})`) as any)?.focus();
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.ctrlKey && e.key === "k") {
            e.preventDefault();
            open = !open;
        } else if (e.key === "Escape") open = false;
        else if (open && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
            e.preventDefault();

            const length = [...document.querySelectorAll("#contents > a")].length;

            if (e.key === "ArrowUp") index = (index + length - 1) % length;
            else index = (index + 1) % length;
        }
    }}
/>

<svg
    viewBox="0 0 100 100"
    class={open ? "open" : ""}
    on:click={() => (open = !open)}
    on:keydown={() => (open = !open)}
>
    <rect id="top" x="10" y="10" width="80" height="10" />
    <rect id="mid" x="10" y="45" width="80" height="10" />
    <rect id="bot" x="10" y="80" width="80" height="10" />
</svg>

<div id="sidebar" class={open ? "open" : ""}>
    <div id="contents">
        <a href="/" class="t1">Home Page</a>
        <a href="/featured" class="t1">Featured Content</a>
        <a href="/rules" class="t1">Rules</a>
        <a href="/definitions-organization" class="t1">Definitions &amp; Organization</a>
        <a href="/join" class="t1">Joining the TCN</a>
        <a href="/observation-faq" class="t2">Observation FAQ</a>
        <a href="/hq" class="t1">HQ</a>
        <a href="/directory" class="t2">Directory</a>
        <a href="/voting" class="t2">Voting</a>
        <a href="/procedures" class="t2">Procedures</a>
        <a href="/akasha" class="t2">Akasha System</a>
        <a href="/quickstart" class="t1">Quickstart</a>
        <a href="/partner-list" class="t2">Partner List &amp; Autosync</a>
        <a href="/banshares" class="t2">Banshares</a>
        <a href="/global" class="t2">Global Chat</a>
        <a href="/staff-link" class="t2">Staff Link</a>
        <a href="/other-bots" class="t2">Other Bots</a>
        <a href="/discord" class="t1">Discord Help</a>
    </div>
</div>

<div id="backdrop" class={open ? "open" : ""} on:click={close} on:keydown={close} />

<style lang="scss">
    svg {
        cursor: pointer;

        position: fixed;
        width: 32px;
        top: 0.5em;
        left: 0.5em;
        z-index: 200;

        padding: 1em;
        background: radial-gradient(closest-side, rgb(var(--accent-rgb), 50%), transparent);
        backdrop-filter: blur(2px);
    }

    rect {
        fill: var(--accent-lighter);
        transition: 250ms cubic-bezier(0, 1, 0.6, 1.4);
    }

    #top {
        transform-origin: 15% 15%;
    }

    #mid {
        transform-origin: 50% 50%;
    }

    #bot {
        transform-origin: 15% 85%;
    }

    .open {
        #top {
            transform: rotateZ(45deg) scaleX(1.414);
        }

        #mid {
            transform: translateX(-50%);
            opacity: 0;
        }

        #bot {
            transform: rotateZ(-45deg) scaleX(1.414);
        }
    }

    #sidebar {
        position: fixed;
        background-color: var(--darkest);
        width: 25%;
        height: 100%;
        z-index: 100;
        padding-top: 80px;
        transition: 250ms;

        @media screen and (max-width: 1000px) {
            width: 75%;
        }

        &:not(.open) {
            transform: translateX(-100%);
            opacity: 0%;
            pointer-events: none;
        }

        &.open {
            transform: translateX(0);
            opacity: 100%;
        }
    }

    #backdrop {
        position: fixed;
        background-color: rgb(var(--darkest-rgb), 50%);
        backdrop-filter: blur(2px);
        width: 100%;
        height: 100%;
        z-index: 50;
        transition: 250ms;

        &:not(.open) {
            opacity: 0%;
            pointer-events: none;
        }

        &.open {
            opacity: 100%;
        }
    }

    #contents {
        height: calc(100% - 80px);
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }

    .t1 {
        font-weight: 600;
        padding-left: 1em;
    }

    .t2 {
        font-weight: 400;
        padding-left: 2em;
    }

    a {
        outline: none;
    }

    a:hover,
    a:focus {
        background-color: #00000022;
    }
</style>
