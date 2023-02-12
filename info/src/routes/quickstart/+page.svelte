<script lang="ts">
    import Callout from "../../lib/Callout.svelte";
    import Linkable from "../../lib/Linkable.svelte";
    import Navigation from "../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/hq", "HQ"]} next={["/discord", "Discord Help"]}>
        <div id="main">
            <h1>Quickstart</h1>
            <Linkable e="h2" id="requirements" value="Requirements" />
            <p>
                The following things are required for you to set up, so you may want to start with
                them first.
            </p>
            <Linkable e="h3" id="partner-list" value="Partner List" />
            <p>
                You must display the list of TCN servers and other TCN partners in a publicly
                visible channel, clearly separated from your server's individual partners. You can
                find the most up-to-date version in <b>#partner-list</b>, but you do not have to
                follow this format.
            </p>
            <p>
                For a list of full requirements and information on how to use autosync to
                automatically keep your partner list up-to-date, check out <a href="/partner-list"
                    >this page</a
                >.
            </p>
            <Linkable e="h3" id="partner-event-channel" value="Partner Event Channel" />
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
            <Linkable e="h2" id="optional" value="Optional Features" />
            <p>
                These features are optional. You can set them up to provide better tools for your
                staff or a better experience for your members, but if you do not want them, we will
                not ask you to give a reason for why you are not using them. We may reach out to you
                and see if you have any feature requests or changes that would make it work better
                for you, but you are not required to explain anything.
            </p>
            <Linkable e="h3" id="banshares" value="Banshares" />
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
                on <a href="/banshares">this page</a>.
            </p>
            <Linkable e="h3" id="global" value="Global Chat" />
            <p>
                Global chat is a feature available to all TCN servers that allows people to chat
                with people from other servers. There is a global channel available to link all of
                your members as well as two separate channels for your staff. All of these are
                optional and you may use all, some, or none.
            </p>
            <p>
                For how to set up global chat, how to operate it, important things to know, and how
                to moderate across it, there is more information on <a href="/global">this page</a>.
            </p>
            <Linkable e="h3" id="staff-link" value="Staff Link" />
            <p>
                You can add your staff to the API (which gives them the role in the TCN Hub and
                allows them to publish banshares) using <b>/staff add</b> on the TCN bot. To make
                things easier, you can also link roles to automatically add and remove staff. See
                <a href="/staff-link">this page</a> for how to use this feature.
            </p>
            <Linkable e="h3" id="other-bots" value="Other Bots" />
            <p>
                We have several other bots either officially or unofficially available for you that
                you may be interested in. Check out how to use them on <a href="/other-bots"
                    >this page</a
                >. Here is a list of them:
            </p>
            <Callout style="green">
                <p>These bot are not TCN-exclusive, so feel free to use them in other servers!</p>
            </Callout>
            <Linkable e="h4" id="ruin-hunter" value="Ruin Hunter" />
            <p>
                Made by <b>Leaf#1950</b>, this is an anti-raid bot that detects large influxes of
                new accounts and bans them to keep your server safe from raids. You can also turn
                this on and off easily (such as if you are expecting a higher rate of incoming
                users) and adjust the thresholds.
            </p>
            <Linkable e="h4" id="banhammer" value="Banhammer" />
            <p>
                This is a utility bot dedicated to massbanning by
                <b>HyperNeutrino#1759</b>. It allows you to ban many users at once from an online
                file of IDs such as a Pastebin raw file, which is useful if the number of users is
                very high and copy-pasting them into chat would take many messages.
            </p>
            <Callout style="green">
                <p>
                    This feature also exists on <b>Daedalus</b>, which also includes many other
                    features, and is much more comprehensive there.
                </p>
            </Callout>
            <Linkable e="h4" id="daedalus" value="Daedalus" />
            <p>
                Daedalus is a modern, general-purpose bot containing a wide array of features for
                all your server management needs, featuring full slash-command support, buttons and
                dropdowns for a smooth experience, modals, high customizability, transparent
                permissions, etc. It is developed by
                <b>HyperNeutrino#1759</b>.
            </p>
            <Linkable e="h4" id="genshin-wizard" value="Genshin Wizard" />
            <p>
                <b>Genshin Wizard</b> - The TCN is officially partnered with Genshin Wizard, a
                multi-purpose Genshin Impact bot with a comprehensive set of features allowing you
                to view your in-game stats, flex your builds, view build guides and hundreds of
                high-quality infographics, etc. To get more information or for setup, please contact
                the support team on their
                <a href="https://discord.gg/BTT5Zr7Dmp">Discord server</a> and open a ticket. Mention
                that you are part of the TCN and would like help setting up.
            </p>
            <Callout style="info">
                <p>
                    This bot is not developed by a TCN council member, it is just a partner of the
                    TCN. It is not exclusive to us and frequently partners with other servers as
                    well.
                </p>
            </Callout>
        </div>
    </Navigation>
</div>
