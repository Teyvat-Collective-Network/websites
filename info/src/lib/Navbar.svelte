<div class="container">
    <div id="left">
        <img src="/favicon.png" alt="Icon" />
        <span id="title">Teyvat Collective Network</span>
    </div>
    <div id="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/partners">Partners</a>
        <a href="/join" class="button">Apply Now</a>
    </div>
</div>

<style lang="scss">
    .container,
    #left,
    #links {
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #left {
        gap: 1.5rem;
    }

    .container {
        justify-content: space-between;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 1200px) {
        #links {
            display: none;
        }
    }

    #title {
        font-weight: 600;
        font-size: 150%;
    }

    a {
        color: var(--text-primary);
        font-weight: 400;
        transition: border-bottom 200ms, color 200ms;
    }

    a:not(.button) {
        margin: 1rem;
        border-bottom: 3px solid transparent;
    }

    a:not(.button):hover {
        color: var(--accent);
        border-bottom: 3px solid var(--accent);
    }
</style>
