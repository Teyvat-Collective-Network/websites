<script lang="ts">
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/discord#webhooks-embeds", "Discord Help"]}>
        <div id="main">
            <h1>Embeds</h1>
            <Linkable e="h2" id="embed-color" value="Embed Color" />
            <p>
                You should pick one embed color that you like and stick to it for most/all of your
                embeds for consistency and organization. If you want am embed to appear colorless,
                use <code>0x2d3136</code> (dark mode).
            </p>
            <Linkable e="h2" id="text-color" value="Text Color" />
            <p>
                You cannot color text by default, but you can use code block syntax highlighting to
                get a similar effect. Check out <a
                    href="https://docs.google.com/document/d/1tyBtgNfGc6ae7t033dFxdqCSfG9kgiuwrFxlJTvyuu8/edit"
                    >this document</a
                > for a list.
            </p>
            <Linkable e="h2" id="timestamps" value="Timestamps" />
            <p>
                Discord doesn't make it obvious that this feature even exists, but you can show a
                specific date to a user both absolutely and relatively. The format is <code
                    >&lt;t:timestamp:format&gt;</code
                >. You can use
                <a href="https://discord-timestamp-generator.vercel.app/">this website</a> to generate
                these.
            </p>
            <Linkable e="h2" id="limits" value="Embed Limits" />
            <p>Discord places size limits on embeds.</p>
            <ul>
                <li>The author name can be up to 256 characters.</li>
                <li>The title can be up to 256 characters.</li>
                <li>The description can be up to 4096 characters.</li>
                <li>Field names are mandatory and can be up to 256 characters.</li>
                <li>Field values are mandatory and can be up to 1024 characters.</li>
                <li>The footer text can be up to 2048 characters, but it is not formatted.</li>
                <li>
                    The total length of the listed fields over all embeds in one message can be up
                    to 6000 characters,
                </li>
                <li>A message may have up to 10 embeds.</li>
                <li>An embed may have up to 25 fields.</li>
            </ul>
        </div>
    </Navigation>
</div>
