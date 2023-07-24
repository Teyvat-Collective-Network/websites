<script lang="ts">
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation next={["/info/quickstart", "Quickstart"]}>
        <div id="main">
            <div>
                <h1><b>TCN</b> Constitution</h1>
                <span
                    ><b
                        >This version is missing many details! It is not the complete or official
                        constitution; read the <a href="/info/constitution">full version</a> instead.</b
                    ></span
                >
                <Linkable id="preface" e="h2" value="Preface" />
                <Linkable id="definitions" e="h3" value="Definitions" />
                <ul>
                    <li>
                        The <b>Teyvat Collective Network Council</b> (the <b>Council</b>) is the
                        group of representatives from each TCN server.
                    </li>
                    <li>Each server's owner is on the council as the <b>Server Owner</b>.</li>
                    <li>
                        Each server owner can choose another council member as their <b
                            >Council Advisor</b
                        >.
                    </li>
                    <li>
                        Each server has a primary representative who is the server owner by default
                        unless delegated<sup><a href="#delegation">[link]</a></sup>.
                    </li>
                    <li>Each council member may only have one position on the council.</li>
                </ul>
                <Linkable id="objectives" e="h3" value="Objectives" />
                <p>
                    The objective of the TCN is to unite mains servers and facilitate communication,
                    collaboration, and the sharing of information and resources to enable stable,
                    healthy communities.
                </p>
                <p>
                    The objective of the TCN Council is to provide the space to allow the TCN's
                    objectives to be realized, provide help and resources, and promote and uphold
                    the TCN's reputation, stability, and future. Linkable#duties(e="h2",
                    value="Duties")
                </p>
                <Linkable id="constituent-servers" e="h3" value="Constituent Servers" />
                <h4>Partner List</h4>
                <p>Servers must display the <b>TCN Partner List</b>:</p>
                <ul>
                    <li>It must be clearly separate from other partner lists.</li>
                    <li>It must contain all and only TCN servers.</li>
                    <li>It must be publicly visible.</li>
                    <li>
                        It must contain the TCN website URL, the TCN Hub invite and description, the
                        Genshin Wizard website URL and description, and the Genshin Impact Tavern
                        invite and description.
                    </li>
                </ul>
                <h4>Network Events</h4>
                <p>
                    Servers must follow <span class="mention">#network-events</span> in a publicly visible
                    channel.
                </p>
                <h4>Terms of Service</h4>
                <p>Servers must follow the Discord Terms of Service and Community Guidelines.</p>
                <Linkable id="council-members" e="h3" value="Council Members" />
                <h4>HQ Membership</h4>
                <ul>
                    <li>Council members are required to be in the HQ Discord server.</li>
                    <li>
                        If a member does not join within 7 days or leaves, they will be contacted by
                        an observer.
                    </li>
                    <li>
                        Opportunity will be given to explain and there will be no punishment for
                        genuine mistakes or if there is reasonable justification.
                    </li>
                    <li>
                        If a member deliberately refuses to (re)join or fails to respond within 7
                        days (or longer, if it is seen fit), they will be removed from the council
                        with no vote needed.
                    </li>
                </ul>
                <h4>Discussions</h4>
                <ul>
                    <li>
                        Council members are <b>encouraged</b> to participate in all discussions and
                        <b>expected</b> to do so when it involves their server.
                    </li>
                    <li>
                        Discussions are expected to be civil and aligned with our purpose and goals.
                    </li>
                    <li>
                        Discussions are to be kept private to HQ unless explicit permission is given
                        otherwise.
                    </li>
                </ul>
                <h4>Voting</h4>
                <ul>
                    <li>
                        Each server's primary representative is required to vote on all matters
                        unless specified otherwise.
                    </li>
                    <li>
                        All members are expected to vote on elections and any other special-case
                        votes that are opened to everyone.
                    </li>
                    <li>
                        Voters are expected to take voting seriously and vote for what they believe
                        is the best for their server and the TCN.
                    </li>
                    <li>
                        Voters are expected to read the provided summaries and/or materials to make
                        an informed decision.
                    </li>
                </ul>
                <Linkable id="external-affairs" e="h2" value="External Affairs &amp; Management" />
                <Linkable id="tcn-neutrality" e="h3" value="TCN Neutrality" />
                <p>
                    The TCN does <b>not</b> hold any stance or opinion on any matters. The council votes
                    on actions, but there is no collective opinion. The following is not exhaustive.
                </p>
                <ul>
                    <li>
                        The TCN cannot collectively agree with or disagree with any statement. It
                        can decide to act in a particular fashion but that does not reflect on
                        anyone or the network's opinion.
                    </li>
                    <li>
                        Nobody, including staff of TCN servers, may use the TCN's name to reinforce
                        any of their statements or to add credibility or authority.
                    </li>
                    <li>
                        Only observers may represent the TCN or authorize people to represent the
                        TCN when acting on external actions that the council has voted and agreed
                        upon. This does not represent the network or any server or council member's
                        opinion or perspective.
                    </li>
                </ul>
                <Linkable id="staff-management" e="h3" value="Staff Management" />
                <ul>
                    <li>
                        A major vote may require a server to remove a staff member or be uninducted
                        if there is sufficient reason to believe that the staff member's actions
                        and/or behavior constitutes a risk to the TCN's reputation such as spreading
                        misinformation or violating the above rules.
                        <ul>
                            <li>
                                Staff members are allowed to dislike the TCN or disagree with its
                                actions - this rule only applies to making lies that degrade the
                                TCN's reputation or speaking on behalf of the network or using its
                                name inappropriately.
                            </li>
                        </ul>
                    </li>
                </ul>
                <Linkable id="observer-committee" e="h2" value="Observer Committee" />
                <ul>
                    <li>
                        Anyone may become an observer through election. There may be up to 8
                        observers at a time. Observers have a term length of 6 months and must be
                        re-elected to continue serving their position.
                    </li>
                    <li>
                        The observer committee has the following duties and responsibilities:
                        <ul>
                            <li>
                                Observe applicant servers for induction (not every individual
                                observer must conduct a particular number or proportion of
                                observations, or any if the committee is able to handle the
                                workload).
                            </li>
                            <li>
                                Administration tasks including operating votes and handling changes
                                that the council has agreed upon.
                            </li>
                            <li>
                                Represent the network when acting on behalf of the council in line
                                with what has been agreed upon by vote.
                            </li>
                            <li>Review and publish banshares and network event posts.</li>
                            <li>Enforce rules and ensure civility.</li>
                            <li>
                                Any other exception handling such as handling threats to HQ or
                                network security.
                            </li>
                        </ul>
                    </li>
                    <li>
                        The observer committee is subject to the following restrictions:
                        <ul>
                            <li>
                                As with everyone else, they do not speak on behalf of the network or
                                its constituent servers or council members with respect to their
                                opinions and perspectives.
                            </li>
                            <li>
                                Observers may not make major decisions or change TCN rules on their
                                own; those must be passed by vote through the council.
                            </li>
                        </ul>
                    </li>
                </ul>
                <Linkable id="removal" e="h2" value="Removal from the TCN" />
                <p>
                    Servers and council members are subject to removal from the TCN / the council
                    for the following reasons / via the following methods:
                </p>
                <h3>Servers</h3>
                <ul>
                    <li>Voluntarily, by the server owner.</li>
                    <li>
                        Removal of the server owner without a transfer to a new server owner within
                        two weeks.
                    </li>
                </ul>
                <h3>Server Owners</h3>
                <ul>
                    <li>
                        Unexplained absence (failure to meet membership duties)<sup
                            ><a href="#absence">[link]</a></sup
                        >.
                    </li>
                </ul>
                <h3>Council Advisors</h3>
                <ul>
                    <li>
                        Removal by the server owner for any reason (none needs to be given by the
                        server owner).
                    </li>
                    <li>
                        Unexplained absence (failure to meet membership duties)<sup
                            ><a href="#absence">[link]</a></sup
                        > while they are the primary representative of their server.
                    </li>
                </ul>
                <h3>Observers</h3>
                <ul>
                    <li>
                        Removal from the TCN council will remove an observer from their position.
                    </li>
                    <li>
                        Observers may be removed from their position if they are found to fail to
                        meet the expectations of an observer or to fulfill their observer duties
                        without being removed from the council.
                    </li>
                </ul>
                <h3>Voluntary Departure</h3>
                <ul>
                    <li>
                        A member may voluntarily leave the council at any time. Observers may
                        voluntarily step down without leaving the council at any time.
                    </li>
                </ul>
                <h3>Involuntary Removal</h3>
                <ul>
                    <li>
                        If a server is found to not meet the expectations of the TCN, a major vote
                        may be started to remove it from the TCN with penalty. If this occurs, its
                        representatives may be transferred to another council position, and if not,
                        will lose their eligibility to remain on the council.
                    </li>
                    <li>
                        If a member is found to not meet the expectations of the TCN, either in
                        terms of fulfilling their duties or due to individual behavior, a major vote
                        may be started to forcefully remove them from the network.
                    </li>
                    <li>
                        Documentation presented against a server or member must be made available to
                        the target for at least 7 days to allow time to respond.
                    </li>
                    <li>
                        Once a response has been provided, a minimum of 2 days must be given to the
                        council to read the presented information and response before any votes
                        regarding the issue.
                    </li>
                </ul>
                <Linkable id="induction" e="h2" value="Induction" />
                <ul>
                    <li>Servers must be observed for 28 days before they can be voted on.</li>
                    <li>
                        A server is eligible for a reduced observation of 14 days if it was removed
                        without penalty within the last two months or it was observed in the past
                        six months.
                    </li>
                    <li>
                        Upon application, a notice must be posted with a ping for the alert role.
                    </li>
                    <li>
                        A minor vote may be conducted to reject a server without observing them.
                    </li>
                    <li>
                        A major vote may be conducted to stop observation and immediately reject the
                        server.
                    </li>
                    <li>A minor vote will determine the outcome of the induction process.</li>
                    <li>
                        If a server is approved, it may join the network anytime within the next two
                        months. If more than two months pass, it will need to undergo the induction
                        process again.
                    </li>
                </ul>
                <Linkable id="external-partners" e="h2" value="External Partners" />
                <ul>
                    <li>Organizations other than servers may request to partner with the TCN.</li>
                    <li>
                        In these cases, one or more observers will discuss with one or more
                        representatives directly to arrange the details and what both sides will
                        offer to each other.
                    </li>
                    <li>
                        A major vote will be required every time to establish an external partner.
                    </li>
                </ul>
                <Linkable id="voting" e="h2" value="Voting" />
                <Linkable id="general-protocols" e="h3" value="General Protocols" />
                <ul>
                    <li>
                        A minor vote requires 60% of eligible voters to vote and a major vote
                        requires 75%.
                    </li>
                    <li>Voters may always choose to abstain which counts as voting.</li>
                    <li>
                        Votes, except procedural ones like elections, must be presented to the
                        council at least 24 hours before they are conducted, extended for
                        discussion. Any concerns raised must be addressed and resolved first.
                    </li>
                    <li>
                        If the voter turnout requirement is not met, the vote will be extended by 48
                        hours once.
                    </li>
                    <li>
                        If a vote ties, a discussion will be opened to try to solidify the council's
                        stance, and then the vote will be redone as-is (unless stated otherwise).
                    </li>
                    <li>
                        If extension happens twice or a tie happens twice, an observer vote will
                        resolve the issue.
                    </li>
                </ul>
                <Linkable id="proposal-votes" e="h3" value="Proposal Votes" />
                <ul>
                    <li>The vote will tie if the margin is strictly within 40%-60%.</li>
                </ul>
                <Linkable id="multiple-choice-votes" e="h3" value="Multiple Choice Votes" />
                <ul>
                    <li>
                        By default, the most popular option, even if not a majority, is selected,
                        and a tie only occurs if there is an exact tie for #1. This can be adapted
                        per vote based on what is sensible for the motion.
                    </li>
                </ul>
                <Linkable id="election-votes" e="h3" value="Election Votes" />
                <ul>
                    <li>Election votes must be open to all council members.</li>
                    <li>
                        If only one candidate exists, there will be a proposal vote to decide if
                        they are elected.
                    </li>
                    <li>Otherwise, a ranked vote will be held.</li>
                </ul>
                <Linkable id="induction-votes" e="h3" value="Induction Votes" />
                <ul>
                    <li>
                        By default, the options are the induct the server, reject the server, or
                        extend observation.
                    </li>
                    <li>
                        If the server's character is not officially confirmed as playable when the
                        vote occurs, a fourth option will exist to pre-approve the server but not
                        induct them until later.
                    </li>
                </ul>
                <Linkable id="observer-votes" e="h3" value="Observer Votes" />
                <ul>
                    <li>
                        If the voters cannot make a decision due to not reaching quorum or tying
                        twice, the observer committee will vote to resolve the issue.
                    </li>
                    <li>
                        All observers must vote (or abstain) and the majority decision will be the
                        final determination.
                    </li>
                    <li>
                        The observer vote is not permitted to tie; they must come to a consensus.
                    </li>
                </ul>
                <Linkable id="event-promotion" e="h2" value="Event Promotion" />
                <ul>
                    <li>
                        Events involving at least one TCN server may be posted to <span
                            class="mention">#network-events</span
                        > and published across the network (the webhook URL is pinned in the channel).
                    </li>
                    <li>
                        Events must be SFW (or only the SFW parts may be promoted) and must follow
                        TCN rules, Discord Terms of Service or Community Guidelines, and Genshin
                        Impact Terms of Service (plus any other similar terms or guidelines).
                    </li>
                </ul>
                <Linkable id="membership-changes" e="h2" value="Membership Changes" />
                <ul>
                    <li>
                        When a person who is not on the TCN council is about to be added to the
                        council, an alert will be posted with role ping.
                    </li>
                    <li>
                        24 hours must pass to allow for counter-votes. A minor vote may deny the
                        user entry into the council.
                    </li>
                    <li>
                        Change in position of existing council members does not require any advance
                        notice and cannot be counter-voted.
                    </li>
                </ul>
                <Linkable id="delegation" e="h2" value="Delegation" />
                <ul>
                    <li>
                        A server owner may delegate their responsibilities and the position of
                        primary representative to their council advisor.
                    </li>
                    <li>The delegation may only occur for up to 60 days.</li>
                    <li>
                        During delegation, the server owner can not be considered absent but the
                        council advisor may be.
                    </li>
                    <li>
                        If the council advisor is removed during this time, the server owner will
                        regain the ability to vote but will not be penalized for absence.
                    </li>
                </ul>
                <Linkable id="absence" e="h2" value="Absence" />
                <p>
                    This is meant as an incomplete guideline for what counts as absence. If these
                    conditions are met, it does not meant the council member should always be
                    removed, and likewise, these conditions do not have to always be met to deem
                    someone as failing to meet their responsibilities. A vote is required to remove
                    someone even if these conditions are met.
                </p>
                <ul>
                    <li>
                        Failure to respond to official inquiries or outreach from observers (e.g.
                        regarding missing or outdated partner list) for over 3 weeks.
                    </li>
                    <li>
                        Failure to vote thrice in a row (if the member is absent for a vote, any
                        overlapping votes will not count).
                    </li>
                    <li>
                        If they have not been present to support their server's advisor or staff
                        such that it is actively inhibiting the server's ability to succeed.
                    </li>
                </ul>
                <Linkable id="extras" e="h2" value="Extras" />
                <p>This section lists extra rules that do not fit with anything else.</p>
                <ul>
                    <li>
                        AI chat bots are not allowed in global chats. An AI chat bot is roughly
                        defined as a bot that responds to prompts by generating its answer rather
                        than in a predetermined fashion. Edge cases will be discussed with the
                        hosting server and may be decided by the observer team or by vote.
                    </li>
                </ul>
            </div>
        </div>
    </Navigation>
</div>

<style lang="scss">
    :global {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
        }
    }
</style>
