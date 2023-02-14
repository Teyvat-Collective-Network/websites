<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import { onMount } from "svelte";

    export let dark: boolean;
    export let user: any;
    export let api_user: any;

    let open: boolean = false;
    let href: string;

    const close = () => (open = false);

    let doc: Document | null = null;

    onMount(() => {
        document
            .querySelectorAll("#contents > a:not([href='javascript:void(0)'])")
            .forEach((e: any) => (e.onclick = () => setTimeout(close)));
        page.subscribe(
            (x) => (
                (href = x.url.href),
                document.querySelectorAll("#contents > a").forEach((e: any) => {
                    e.style.backgroundColor = e.href === href ? "#00000022" : "";
                })
            ),
        );

        doc = document;
    });

    let index = 0;
    $: open &&
        (index = [...document.querySelectorAll("#contents > a")].findIndex(
            (e: any) => e.href === href,
        ));
    $: (doc?.querySelectorAll("#contents > a:not(.hidden)")?.[index] as any)?.focus();

    let info_open: boolean = false;
    let staff_open: boolean = false;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.ctrlKey && e.key === "k") {
            e.preventDefault();
            open = !open;
        } else if (e.key === "Escape") open = false;
        else if (open && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
            e.preventDefault();

            const length = [...document.querySelectorAll("#contents > a:not(.hidden)")].length;

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

<div id="bar" />
<div id="spacer" />

<div id="sidebar" class={open ? "open" : ""}>
    <div id="contents">
        <a
            href={"javascript:void(0)"}
            class="t1"
            on:click={() => {
                dark = !dark;
                document.cookie = `mode=${dark ? "dark" : "light"};max-age=31536000;samesite=none`;
            }}
        >
            <i class="material-icons">{dark ? "light_mode" : "dark_mode"}</i>
            Switch to {dark ? "Light" : "Dark"} Mode
        </a>
        <a href="/" class="t1">Home Page</a>
        <a href="/about" class="t1">About Us</a>
        <a href="/partners" class="t1">Partners</a>
        <a href="/calendar" class="t1">Calendar</a>
        <a href="/featured" class="t1">Featured Content</a>
        <a href="/join" class="t1">Joining the TCN</a>
        <a href="/contact" class="t1">Contact Us</a>
        <a href={"javascript:void(0)"} class="t1" on:click={() => (info_open = !info_open)}>
            Info Pages
            <i class="material-icons">{info_open ? "keyboard_arrow_down" : "chevron_right"}</i>
        </a>
        <a href="/info/rules" class="t2 {info_open ? '' : 'hidden'}">Rules</a>
        <a href="/info/definitions-organization" class="t2 {info_open ? '' : 'hidden'}"
            >Definitions &amp; Organization</a
        >
        <a href="/info/hq" class="t2 {info_open ? '' : 'hidden'}">HQ</a>
        <a href="/info/directory" class="t3 {info_open ? '' : 'hidden'}">Directory</a>
        <a href="/info/voting" class="t3 {info_open ? '' : 'hidden'}">Voting</a>
        <a href="/info/procedures" class="t3 {info_open ? '' : 'hidden'}">Procedures</a>
        <a href="/info/akasha" class="t3 {info_open ? '' : 'hidden'}">Akasha System</a>
        <a href="/info/quickstart" class="t2 {info_open ? '' : 'hidden'}">Quickstart</a>
        <a href="/info/partner-list" class="t3 {info_open ? '' : 'hidden'}"
            >Partner List &amp; Autosync</a
        >
        <a href="/info/banshares" class="t3 {info_open ? '' : 'hidden'}">Banshares</a>
        <a href="/info/global" class="t3 {info_open ? '' : 'hidden'}">Global Chat</a>
        <a href="/info/staff-link" class="t3 {info_open ? '' : 'hidden'}">Staff Link</a>
        <a href="/info/other-bots" class="t3 {info_open ? '' : 'hidden'}">Other Bots</a>
        <a href="/info/discord" class="t2 {info_open ? '' : 'hidden'}">Discord Help</a>
        {#if user}
            {#if api_user?.guilds?.length > 0}
                <a
                    href={"javascript:void(0)"}
                    class="t1"
                    on:click={() => (staff_open = !staff_open)}
                >
                    Staff Area
                    <i class="material-icons"
                        >{staff_open ? "keyboard_arrow_down" : "chevron_right"}</i
                    >
                </a>
                <a href="/banshare" class="t2 {staff_open ? '' : 'hidden'}">Submit a Banshare</a>
            {/if}
            <a
                href="{PUBLIC_TCN_AUTH}/logout?redirect={encodeURIComponent(PUBLIC_DOMAIN)}"
                class="t1"
            >
                Log Out
                <i class="material-icons">logout</i>
            </a>
        {:else}
            <a href="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(PUBLIC_DOMAIN)}" class="t1">
                Log In
                <i class="material-icons">login</i>
            </a>
        {/if}
    </div>
    <div id="footer">&copy; 2023 TCN Developers</div>
</div>

<div id="backdrop" class={open ? "open" : ""} on:click={close} on:keydown={close} />

<style lang="scss">
    #bar,
    #spacer {
        top: 0;
        left: 0;
        right: 0;
        height: 80px;

        @media screen and (min-width: 1360px) {
            display: none;
        }
    }

    #bar {
        position: fixed;
        background-color: var(--background-X);
    }

    svg {
        cursor: pointer;
        position: fixed;
        width: 32px;
        height: 32px;
        padding: 24px;
        z-index: 10;
    }

    rect {
        fill: var(--accent-more);
        transition: transform 250ms cubic-bezier(0, 1, 0.6, 1.4),
            opacity 250ms cubic-bezier(0, 1, 0.6, 1.4);
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--background-1);
        width: 25%;
        height: 100%;
        z-index: 5;
        transition: transform 250ms, opacity 250ms;

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
        background-color: rgb(var(--pure-rgb), 40%);
        backdrop-filter: blur(2px);
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: opacity 250ms;

        &:not(.open) {
            opacity: 0%;
            pointer-events: none;
        }

        &.open {
            opacity: 100%;
        }
    }

    #contents {
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        padding-top: 92px;
    }

    #footer {
        padding: 1em;
        font-weight: 400;
    }

    .t1 {
        font-weight: 600;
        padding-left: 1em;
    }

    .t2 {
        font-weight: 400;
        padding-left: 2em;
    }

    .t3 {
        font-weight: 300;
        padding-left: 3em;
    }

    a {
        outline: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }

    a:hover,
    a:focus {
        background-color: #00000011;
    }

    a.hidden {
        display: none;
    }
</style>
