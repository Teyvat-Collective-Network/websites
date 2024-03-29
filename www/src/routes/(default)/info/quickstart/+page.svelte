<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation
        last={["/info/constitution", "TCN Constitution"]}
        next={["/info/discord", "Discord Help"]}
    >
        <div id="main">
            <h1>Quickstart</h1>
            <Linkable id="requirements" e="h2" value="Requirements" />
            <p>
                The following things are required for you to set up, so you may want to start with
                them first.
            </p>
            <Linkable id="partner-list" e="h3" value="Partner List" />
            <p>
                You must display the list of TCN servers and other TCN partners in a publicly
                visible channel, clearly separated from your server's individual partners. You can
                find the most up-to-date version in <b>#partner-list</b>, but you do not have to
                follow this format.
            </p>
            <p>
                For a list of full requirements and information on how to use autosync to
                automatically keep your partner list up-to-date, check out <a
                    href="/info/partner-list">this page</a
                >.
            </p>
            <Linkable id="partner-event-channel" e="h3" value="Partner Event Channel" />
            <p>
                You must follow <b>#network-events</b> in a publicly visible channel in your server.
                You can make this the same channel as where you post other partner events.
            </p>
            <Callout style="warn">
                <p>
                    The destination channel must be a regular text channel and not an announcement
                    channel itself.
                </p>
            </Callout>
            <Linkable id="optional" e="h2" value="Optional Features" />
            <p>
                These features are optional. You can set them up to provide better tools for your
                staff or a better experience for your members, but if you do not want them, we will
                not ask you to give a reason for why you are not using them. We may reach out to you
                and see if you have any feature requests or changes that would make it work better
                for you, but you are not required to explain anything.
            </p>
            <Linkable id="banshares" e="h3" value="Banshares" />
            <p>
                Banshares are our way of sharing information on problematic users so you can
                eliminate potential threats or annoyances before they happen in your server. You are
                not required to execute banshares; it is just to provide you with information for
                you to act as you see fit.
            </p>
            <p>
                To post banshares, go to <a href="https://banshare.teyvatcollective.network"
                    >https://banshare.teyvatcollective.network</a
                >.
            </p>
            <p>
                To learn how to set up banshares and how to use the form, there is more information
                on <a href="/info/banshares">this page</a>.
            </p>
            <Linkable id="global" e="h3" value="Global Chat" />
            <p>
                Global chat is a feature available to all TCN servers that allows people to chat
                with people from other servers. There is a global channel available to link all of
                your members as well as two separate channels for your staff. All of these are
                optional and you may use all, some, or none.
            </p>
            <p>
                For how to set up global chat, how to operate it, important things to know, and how
                to moderate across it, there is more information on <a href="/info/global"
                    >this page</a
                >.
            </p>
            <Linkable id="staff-link" e="h3" value="Staff Link" />
            <p>
                You can add your staff to the API (which gives them the role in the TCN Hub and
                allows them to publish banshares) using <code>/staff add</code> on the TCN bot. To
                make things easier, you can also link roles to automatically add and remove staff.
                See <a href="/info/staff-link">this page</a> for how to use this feature.
            </p>
            <Linkable id="other-bots" e="h3" value="Other Bots" />
            <p>
                We have several other bots either officially or unofficially available for you that
                you may be interested in. Check out how to use them on <a href="/info/other-bots"
                    >this page</a
                >. Here is a list of them:
            </p>
            <Callout style="info">
                <p>These bots are not TCN-exclusive, so feel free to use them in other servers!</p>
            </Callout>
            <ul>
                <li>
                    <b>Genshin Wizard</b> [@hattvr]
                    <span style="color: var(--text-accent)">Official Partner</span> - A Genshin Impact
                    utility bot.
                </li>
                <li><b>Ruin Hunter</b> [@leaf.moe] - A configurable anti-raid bot.</li>
                <li><b>Banhammer</b> [@hyperneutrino] - A utility bot for massbanning.</li>
                <li><b>Daedalus</b> [@hyperneutrino] - A general-purpose bot.</li>
            </ul>
        </div>
    </Navigation>
</div>
