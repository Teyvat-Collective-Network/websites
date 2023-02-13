<script lang="ts">
    import Card from "../../../lib/Card.svelte";
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation next={["/info/definitions-organization", "Definitions & Organization"]}>
        <div id="main">
            <h1><b>TCN</b> Rules and Guidelines</h1>
            <Linkable e="h2" id="purpose-goals" value="Purpose &amp; Goals" />
            <p>The purpose and goals of the council are:</p>
            <div class="cards">
                <Card icon="handshake" title="Communicate">
                    <p>
                        Provide a space for Genshin Impact character mains servers to communicate
                        and share ideas.
                    </p>
                </Card>
                <Card icon="help_center" title="Resources & Help">
                    <p>
                        Provide resources and help for managing and building communities, such as
                        Discord bots or providing assistance with moderation.
                    </p>
                </Card>
                <Card icon="keyboard_capslock" title="Promote">
                    <p>Promote and uphold the TCN's reputation, stability, and future.</p>
                </Card>
            </div>
            <p>
                Servers and council members are expected to uphold these values and vote in line
                with what they believe would achieve these goals.
            </p>
            <Linkable e="h2" id="membership" value="Membership" />
            <p>
                Each individual may only represent one TCN server, so no user may own or advise
                multiple TCN servers or be an advisor while owning another TCN server.
            </p>
            <p>
                Ownership of other servers does not matter and involvement with servers but not as a
                council advisor, even TCN servers, is not a problem.
            </p>
            <Linkable e="h2" id="member-duties" value="Member Duties" />
            <p>There are two core duties that TCN members must partake in.</p>
            <div class="cards">
                <Card icon="forum" title="Discussions">
                    <ul>
                        <li>We encourage all members to participate in all discussions.</li>
                        <li>
                            We expect members to participate in matters directly involving their
                            server.
                        </li>
                        <li>Discussions are expected to be civil and transparent.</li>
                        <li>
                            Discussions are to be kept within HQ, as HQ is a private server, and
                            leaked information tends to bring unwanted attention and sometimes
                            harassment.
                        </li>
                    </ul>
                </Card>
                <Card icon="how_to_vote" title="Voting">
                    <ul>
                        <li>
                            All members of the primary council are expected to vote on all matters.
                        </li>
                        <li>All members are expected to vote in elections and on open votes.</li>
                        <li>
                            Voters are expected to vote seriously and according to their values and
                            what they believe is best for their server and the network.
                        </li>
                        <li>
                            Voters are expected to read the provided summaries and information to
                            make a well-informed decision.
                        </li>
                    </ul>
                </Card>
            </div>
            <Linkable e="h2" id="server-requirements" value="Server Requirements" />
            <ul>
                <li>
                    Servers must display the <b>TCN partner list</b> in their server. Specifically:
                    <ul>
                        <li>
                            It must be clearly separate from other partner lists (as we do not
                            restrict or control servers' other affiliations).
                        </li>
                        <li>It must contain all TCN servers and only TCN servers.</li>
                        <li>The list must be visible to your general server population.</li>
                        <li>
                            The list does not need to follow a particular format, as long as it
                            contains all and only TCN servers, the TCN website URL (<a
                                href="https://teyvatcollective.network"
                                >https://teyvatcollective.network</a
                            >), the TCN Hub URL (<a href="https://discord.gg/FG2wpbywSx"
                                >https://discord.gg/FG2wpbywSx</a
                            >) and description, and the Genshin Wizard URL (<a
                                href="https://genshinwizard.com">https://genshinwizard.com</a
                            >) and description. See the default formatted list in the TCN Hub's
                            <b>#partner-list</b> for an example.
                        </li>
                    </ul>
                </li>
                <li>
                    Servers must follow <b>#network-events</b> in a channel visible to the general population
                    of their server.
                </li>
                <li>Servesr must follow the Discord Terms of Service and Community Guidelines.</li>
            </ul>
            <Linkable e="h2" id="external-affairs" value="External Affairs &amp; Management" />
            <ul>
                <li>
                    The TCN does <b>not</b> hold an official or collective stance or opinion on any matters.
                    The council votes on actions the network will take as a whole, but nobody, including
                    observers, may speak on behalf of the TCN, nor does the TCN itself agree or disagree
                    with any perspectives.
                </li>
                <li>
                    Only observers may represent the TCN or approve people to represent the TCN when
                    acting on external actions. They do not speak for the rest of the network nor is
                    their opinion the TCN's opinion, but they may <b>act</b> on behalf of the network.
                </li>
                <li>
                    A major vote may be conducted to require a server to remove a staff member or be
                    uninducted if there is sufficient reason to believe that their actions and/or
                    behavior violates the TCN's core principles irredeemably or if they are
                    deliberately spreading misinformation about or misrepresenting the TCN.
                    <ul>
                        <li>
                            Staff members do not need to like the TCN or approve of its actions;
                            rather, this refers to making lies to degrade the TCN's reputation or
                            speaking on behalf of it or using its name for individual matters
                            without approval.
                        </li>
                    </ul>
                </li>
            </ul>
            <Linkable e="h2" id="observer-committee" value="Observer Committee" />
            <p>
                Any council member may become an observer through <a
                    href="/info/procedures#elections">election</a
                >. There may be no more than 8 observers at any time. Observers have a term length
                of 6 months, after which they must be re-elected to continue their position.
            </p>
            <div class="cards">
                <Card icon="visibility" title="Observation">
                    <p>
                        One of the primary observer duties is to observe applicant servers for
                        induction. Read more about the observation process <a
                            href="/info/procedures#observation-induction">here</a
                        >.
                    </p>
                    <p>
                        Observers do not have to carry out a particular quota of observations or any
                        at all, as long as the team can handle all of the incoming applications.
                    </p>
                </Card>
                <Card icon="construction" title="Administration">
                    <p>
                        Observers carry out server changes and decisions by the council including
                        managing votes. They cannot make major decisions or change TCN rules; those
                        must go through a vote.
                    </p>
                    <p>
                        Observers can also perform other administrative tasks that they feel they
                        can help with.
                    </p>
                </Card>
                <Card icon="campaign" title="Representation">
                    <p>
                        Observers represent the network when dealing with external affairs. They
                        speak on behalf of the TCN when taking actions as decided by vote. Observers
                        are therefore also expected to act in line with the council's decisions.
                        Their opinions do not represent that of the network or any of its servers.
                    </p>
                </Card>
            </div>
            <Linkable e="h2" id="removal" value="Removal from the TCN" />
            <p>
                Servers and council members may be removed from the TCN and HQ respectively for
                various reasons listed below.
            </p>
            <ul>
                <li>
                    <b>Servers</b>
                    <ul>
                        <li>Voluntarily, by the server owner.</li>
                        <li>
                            If the server owner is removed.
                            <ul>
                                <li>
                                    If the server is transfered to another owner, the server can
                                    remain in the TCN.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Server Owners</b>
                    <ul>
                        <li>
                            Unexplained absence (failure to meet the membership duties) for 30 days.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Council Advisor</b>
                    <ul>
                        <li>Removal by the server owner for any reason.</li>
                        <li>
                            Unexplained absence (failure to meet the membership duties) for 30 days
                            if the server owner has delegated their duties to the council advisor.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Observers</b>
                    <ul>
                        <li>
                            If they are no longer eligible to be in HQ (not a server owner or
                            council advisor).
                        </li>
                        <li>
                            If they are found to not meet the expectations in fulfilling their
                            observer duties, a major vote may be started to forcefully remove them
                            from their position.
                            <ul>
                                <li>
                                    Unless they are voted to be removed from HQ entirely, being
                                    demoted does not affect their position in the council.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Voluntary Departure</b>
                    <ul>
                        <li>A member may voluntarily leave any of their positions at any time.</li>
                        <li>
                            Observers may leave their position as observer while keeping their
                            position in the council at any time.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Involuntary Removal</b>
                    <ul>
                        <li>
                            If a server is found to not meet the expectations or rules of the TCN, a
                            major vote may be started to forcefully remove it from the TCN. If this
                            happens, its representatives are also removed immediately.
                        </li>
                        <li>
                            If a member is found to not meet the expectations or rules of the TCN,
                            either in terms of fulfilling their duties or due to individual
                            behavior, a major vote may be started to forcefully remove them from the
                            network.
                            <ul>
                                <li>
                                    If this happens, they may not be moved to a different position
                                    and will be kicked from HQ and must follow the procedure to be
                                    re-added later.
                                </li>
                                <li>
                                    If the server owner is removed, their server must be transfered
                                    or leave the TCN.
                                </li>
                                <li>
                                    If the council advisor is removed while the server owner's
                                    duties are delegated to them, the server is exempted from
                                    requirements such as voting until the server owner's planned
                                    absence ends, after which it is their responsibility to find a
                                    new council advisor if they need it.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <Linkable e="h2" id="induction" value="Induction of New Servers" />
            <ul>
                <li>A minor vote may be started to reject an applicant without observing them.</li>
                <li>
                    A major vote may be started to cancel an ongoing observation and reject the
                    server immediately.
                </li>
                <li>
                    A minor vote will determine if the server will be inducted or rejected or if
                    observation must be extended.
                </li>
                <li>
                    If the server's mascot character is not officially confirmed by Hoyoverse as
                    playable, voters may also decide to approve the server but not induct them until
                    later.
                    <ul>
                        <li>
                            In this case, this option and the regular induct option will be counted
                            together to decide the outcome.
                        </li>
                        <li>
                            If these two options are the most favored, then they will be compared
                            following the standard proposal vote condition, and if the vote is tied,
                            a re-vote will happen with only these two options.
                        </li>
                    </ul>
                </li>
                <li>
                    If a server is approved by vote and there is a delay of more than 2 months
                    before its induction for any reason, it will be re-observed by a different
                    observer for 14 days.
                </li>
            </ul>
            <Linkable e="h2" id="additional" value="Additional" />
            <p>
                All details in the <a href="/info/procedures">procedures page</a> are also enforced as
                rules.
            </p>
            <Linkable e="h2" id="changes" value="Changes" />
            <p>These rules and guidelines may only be changed by agreement through a major vote.</p>
            <Linkable e="h3" id="changelog" value="Changelog" />
            <ul>
                <li>
                    The rules and guidelines were rewritten to focus more on protecting the
                    integrity of the network, and technical aspects were moved to <a
                        href="/info/definitions-organization">Definitions &amp; Organization</a
                    >
                    and <a href="/info/procedures">Procedures</a>.
                </li>
            </ul>
        </div>
    </Navigation>
</div>
