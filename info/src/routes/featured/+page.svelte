<script lang="ts">
    import Card from "../../lib/Card.svelte";
    import Navigation from "../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/", "Home"]} next={["/rules", "Rules"]}>
        <div id="main">
            <h1>Featured Content</h1>
            <div class="announcement">
                <Card icon="campaign" title="New Banshare System">
                    <p>
                        We are rolling out our new banshare system over the next few weeks. Instead
                        of just publishing them through an announcement channel, it will now be
                        posted by a bot. This lets us ensure banshares are only being used in TCN
                        servers but also allows for automated actions. Servers can now set a
                        threshold to automatically ban users or have a button to execute a banshare
                        with one simple click.
                    </p>
                    <p>To get started, go to <a href="/banshares">the banshare setup page</a>.</p>
                </Card>
            </div>
        </div>
    </Navigation>
</div>

<style lang="scss">
    .announcement {
        background-color: #00000033;
        padding: 0 1em 1em 1em;
        border: 2px solid var(--darker);
        border-radius: 5px;
    }
</style>
