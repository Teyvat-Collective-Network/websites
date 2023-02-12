<script lang="ts">
    import Callout from "../lib/Callout.svelte";
    import Card from "../lib/Card.svelte";
    import Linkable from "../lib/Linkable.svelte";
    import Navigation from "../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation next={["/featured", "Featured Content"]}>
        <div id="main">
            <h1>Welcome!</h1>
            <Linkable e="h2" id="what-is-tcn" value="What is the TCN?" />
            <p>
                We are a network of over 40 high-quality Genshin Impact Discord servers, each
                dedicated to a character from the game.
            </p>
            <Linkable e="h3" id="purpose" value="Purpose" />
            <p class="prominent">
                The mission of the TCN is to unite all mains servers across Teyvat and provide
                support and promote collaboration between partners.
            </p>
            <Linkable e="h3" id="organization" value="Organization" />
            <p>
                The TCN does not enforce any particular structure on its member servers. TCN servers
                are not required to change their server setup, follow a template, enforce particular
                rules, or give any permissions to TCN observers. Our only requirements are to
                display a list of TCN partner servers and cross-post event promotions from partner
                servers.
            </p>
            <p>The TCN is divided into three components. Click a card to learn more.</p>
            <div class="cards">
                <Card icon="business" title="Individual Servers" expandable>
                    <p>
                        These are the individual servers of the TCN, each a mains server dedicated
                        to a specific character.
                    </p>
                    <p>
                        Find a list of TCN servers <a href="/partners">here</a>.
                    </p>
                </Card>
                <Card icon="hub" title="The Hub" expandable>
                    <p>
                        This is the official public server for the TCN, where you can contact
                        observers and other server staff and ask questions or give feedback about
                        the TCN.
                    </p>
                    <p><a href="https://discord.gg/FG2wpbywSx">Join the Hub!</a></p>
                </Card>
                <Card icon="high_quality" title="HQ" expandable>
                    <p>
                        This is the headquarters server for the TCN. It is private to the TCN
                        council, which consists of each server's owner and up to one other trusted
                        member. This server facilitates communication and coordination of servers.
                    </p>
                </Card>
            </div>
            <Linkable e="h3" id="benefits" value="Benefits of the TCN" />
            <p>Click a card to learn more.</p>
            <div class="cards">
                <Card icon="info" title="Information" expandable>
                    <p>
                        As a member server of the TCN, you get access to information on members,
                        ongoing issues, as well as informative resources like server setup and tools
                        and on-demand help for the technical aspects and community and staff
                        management.
                    </p>
                </Card>
                <Card icon="handshake" title="Connections" expandable>
                    <p>
                        TCN servers have quick and easy access to communication with each other. In
                        addition to being able to more quickly resolve any issues and form strong
                        relationships with many other prominent servers, you have the unique
                        opportunity to more easily start collaborations for things like events,
                        which you can also promote through the TCN’s event announcement feed.
                    </p>
                </Card>
                <Card icon="insights" title="Growth" expandable>
                    <p>
                        When you join the TCN, you automatically become a TCN partner of over 40
                        servers and will have your server listed on the partner list in all of them.
                        Additionally, you will be able to get tips on how to improve your server
                        environment and grow a strong, healthy community.
                    </p>
                </Card>
            </div>
            <Linkable e="h3" id="core-values" value="Our Core Values" />
            <p>Click a card to learn more.</p>
            <div class="cards">
                <Card icon="forum" title="Transparency" expandable>
                    <p>
                        We prioritize two-way communication with our member servers. We are always
                        open to feedback and will reach out for opportunities to improve the network
                        to work for our members, and not the other way around.
                    </p>
                </Card>
                <Card icon="how_to_vote" title="Democracy" expandable>
                    <p>
                        In addition to communicating major changes with our members clearly, we
                        propose these changes and vote on major decisions on them, and the observer
                        team does not have any more of a say in matters than everyone else. Each
                        server gets one vote in all important matters. We also implement follow-up
                        changes based on feedback.
                    </p>
                </Card>
                <Card icon="group" title="Collaboration" expandable>
                    <p>
                        We don't expect everyone in the TCN to like everyone else, but even when
                        discussions are heated we treat each other with civility and get to the core
                        of the issue and come to a resolution that can benefit us all as much as
                        possible. Additionally, we learn from conflicts, and every mistake or
                        dispute is an opportunity to not just fix the root of the issue but improve
                        other parts of the network.
                    </p>
                </Card>
            </div>
            <Linkable e="h3" id="where-to-start" value="Where to start?" />
            <Callout style="info">
                <p>If you haven't already, make sure to read the <a href="/rules">TCN rules</a>!</p>
            </Callout>
            <p>
                You can just read through all of the pages at your own pace, but you may be
                interested in following one of our organized workflows. Click a card to start one,
                or click the menu button in the top left corner to navigate through these pages at
                your own pace.
            </p>
        </div>
    </Navigation>
</div>
