<script lang="ts">
    import Callout from "../../../lib/Callout.svelte";
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/info/quickstart", "Quickstart"]}>
        <div id="main">
            <h1>Discord Help</h1>
            <Linkable e="h2" id="permissions" value="Discord Permissions" />
            <p>
                If you have absolutely no knowledge of Discord permissions, a good place to start
                would the official <a
                    href="https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ"
                    >Permissions FAQ</a
                > support article.
            </p>
            <Callout style="warn">
                <p>
                    An important thing to know about permissions is that allow overrides always
                    apply over deny overrides, regardless of hierarchy.
                </p>
            </Callout>
            <p>
                For a list of all permissions and what they do, visit <a
                    href="/info/discord/permission-list">this page</a
                >.
            </p>
            <p>
                For more information about permissions and some recommendations for good structure,
                check out <a href="/info/discord/permissions">this page</a>.
            </p>
            <Linkable e="h2" id="webhooks-embeds" value="Webhooks &amp; Embeds" />
            <p>
                This is a guide on how to use embeds and webhooks in Discord. This guide features
                Discohook, Embed Generator (discord.club), and Leaf Embeds.
            </p>
            <p>
                Webhooks are resources you can create in a text channel that can be used to post
                messages to the channel by any user or application that has the URL.
            </p>
            <p>Embeds are a way to organize information and add styling to your resources.</p>
            <p>
                To view the full guide, visit either the <a href="/info/discord/webhooks"
                    >webhooks</a
                >
                or
                <a href="/info/discord/embeds">embeds</a> page.
            </p>
        </div>
    </Navigation>
</div>
