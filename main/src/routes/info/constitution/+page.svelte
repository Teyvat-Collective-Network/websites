<script lang="ts">
    import Card from "$lib/Card.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(next!="{ ['/info/hq', 'HQ'] }")
            #main
                div
                    h1 <b>TCN</b> Constitution
                    a(href="/info/constitution/simple") simple version
                    Linkable#preface(e="h2", value="Preface")
                    Linkable#definitions(e="h3", value="Definitions")
                    ul
                        li The <b>Teyvat Collective Network</b> refers to the collective entity formed by all constituent servers and the <b>TCN Hub</b>
                        li The <b>Teyvat Collective Network Council</b> (or just the <b>Council</b>) refers to the designated group of representatives from each constituent server.
                            ul
                                li Each server's owner must be present on the council as the <b>Server Owner</b>.
                                li Each server may designate one other person to be present on the council as the <b>Council Advisor</b>.
                                li Each server has a primary representative, who is by default the server owner unless delegated<sup><a href="#delegation">[link]</a></sup> to the council advisor.
                        li The <b>Observer Committee</b> refers to elected official administrators of the council itself who carry out official/administrative actions and tasks<sup><a href="#observer-committee">[link]</a></sup>.
                        li <b>HQ</b> refers to the private server belonging to the council which is used for internal operations and collaboration/communication.
                        li The <b>TCN Hub</b> refers to the public server which serves to provide a medium of communication between the council and TCN members and the general public.
                    Linkable#objectives(e="h3", value="Objectives")
                    p The objective of the TCN is to unite mains servers and facilitate communication, collaboration, and the sharing of information and resources to enable stable, healthy communities.
                    ul
                        li <b>Information</b> - The TCN seeks to provide information on ongoing events, incidents, and problematic users, and help and resources for technical issues, staff management, and community management and building.
                        li <b>Connections</b> - The TCN seeks to provide a space for Genshin Impact communities to maintain close relationships, offer a direct line of communication for coordination for events and other collaborations and unite community managers in the collective pursuit of building strong, healthy environments for respective communities.
                    p The objective of the TCN Council is to provide the space to allow the TCN's objectives to be realized, provide help and resources, and promote and uphold the TCN's reputation, stability, and future.
                    ul
                        li <b>Communication</b> - The Council seeks to establish and maintain communication between communities to facilitate the goals of the network.
                        li <b>Promotion</b> - The Council seeks to promote and uphold the TCN's reputation and stability as well as maintain its growth and development.
                        li <b>Growth</b> - The Council seeks to discuss and develop methods to grow the TCN both in terms of its size (number of servers) and its ability to provide resources and meet its goals for its constituent servers.
                    Linkable#structure(e="h3", value="Structure")
                    h4 Observer Committee
                    p The observer committee is a group of TCN Council members who are elected by the Council to carry out official/administrative tasks, represent the network, and maintain its values and enforce rules within the network and HQ. The specific responsibilities and expectations of the observer committee and the mechanics of elections is discussed later in the constitution [TODO].
                    h4 Constituent Servers
                    p Member servers of the TCN are character mains servers that have passed an induction vote to join the network. Each server must be associated with one playable character and cannot rebrand while within the network, but one playable character may have multiple constituent servers.
                    h4 External Partners
                    p The TCN may choose to partner with other entities case-by-case but this is a very special consideration. This is only done if the other entity has something to provide for the network as a whole and/or all of its constituent servers<sup><a href="#external-partners">[link]</a></sup>.
                    Linkable#duties(e="h2", value="Duties")
                    Linkable#constituent-servers(e="h3", value="Constituent Servers")
                    h4 Partner List
                    p Servers must display the <b>TCN Partner List</b>:
                    ul
                        li It must be clearly separate from other partner lists (servers' other affiliations are not restricted or controlled by the TCN).
                        li It must contain all TCN servers and must not contain any non-TCN servers.
                        li It must be visible to the general public of the server.
                        li In addition to TCN servers, it must contain the TCN website URL, the TCN Hub invite and description, and the Genshin Wizard website URL and description.
                    h4 Network Events
                    p Servers must follow <span class="mention">#network-events</span> in a channel visible to the general public of the server.
                    ul
                        li Servers are permitted to delete event promotions under specific circumstances<sup><a href="#event-promotion">[link]</a></sup>.
                    h4 Terms of Service
                    p Servers must follow the Discord Terms of Service and Community Guidelines.
                    Linkable#council-members(e="h3", value="Council Members")
                    h4 Discussions
                    ul
                        li Council members are <b>encouraged</b> to participate in all discussions where they feel that they have perspectives or considerations to contribute.
                        li Council members are <b>expected</b> to participate in matters involving their server.
                        li Discussions are expected to be civil and aligned with the purpose and goals of the TCN and the Council.
                        li Discussions are to be kept private to HQ unless explicit permission is given by all parties involved to share it outside of HQ.
                    h4 Voting
                    ul
                        li Each server's primary representative is required to vote on all matters unless specified otherwise.
                        li All members are expected to vote on elections and any other special-case votes that are opened to everyone.
                        li Voters are expected to take voting seriously and vote in line with what they believe is the best for their server and the best for the network in terms of the purpose and goals of the TCN and the Council.
                        li Voters are expected to read the provided summaries and/or materials to make an informed decision.
                    Linkable#external-affairs(e="h2", value="External Affairs &amp; Management")
                    Linkable#tcn-neutrality(e="h3", value="TCN Neutrality")
                    p The TCN does <b>not</b> hold and official or collective stance or opinion on any matters. The council votes on actions that the network agrees to execute, but there is no collective opinion and nobody, including observers, may speak on behalf of the TCN's stance or opinion. The following is not exhaustive.
                    ul
                        li The TCN cannot collectively agree with or disagree with any statement. It can decide to act in a particular fashion but that does not reflect on anyone or the network's opinion.
                        li Nobody, including staff of TCN servers, may use the TCN's name to reinforce any of their statements or to add credibility or authority.
                            ul
                                li It is allowed to mention the TCN or specify that a server belongs to the TCN when writing a document; this rule simply states that there shall be no attempt to use the TCN's name for effect in the document rather than just to state involvement.
                        li Only observers may represent the TCN or authorize people to represent the TCN when acting on external actions that the council has voted and agreed upon. While they may act on behalf of the network, this does not represent the network or any constituent server or council member's opinion or perspective.
                    Linkable#staff-management(e="h3", value="Staff Management")
                    ul
                        li A major vote may be conducted to require a server to remove a staff member or be uninducted if there is sufficient reason to believe that the staff member's actions and/or behavior constitutes a risk to the TCN's reputation or stability such as spreading misinformation or violating the aforementioned rules.
                        ul
                            li Staff members are allowed to dislike the TCN or disagree with its actions - this rule only applies to making lies that degrade the TCN's reputation or speaking on behalf of the network or using its name inappropriately.
                    Linkable#observer-committee(e="h2", value="Observer Committee")
                    ul
                        li Any council member may become an observer through election. There may be up to 8 observers at a time. Observers have a term length of 6 months and must be re-elected to continue serving their position.
                        ul
                            li The term limit is 6 calendar months meaning it ends on the same day-of-month 6 months later, not an exact number of days later.
                            li There is a grace period of 2 weeks (14 days) after the term ends to be re-elected. If the election is ongoing, this period will be extended for however long is needed to finish the election.
                        li The observer committee has the following duties and responsibilities:
                        ul
                            li Observe applicant servers for induction (not every individual observer must conduct a particular number or proportion of observations, or any if the committee is able to handle the workload).
                            li Administration tasks including handling and executing server changes and decisions by the council.
                            li Manage votes including elections.
                            li Represent the network when acting on behalf of the council in line with what has been agreed upon by vote.
                            li Review and publish banshares and network event posts.
                            li Enforce rules.
                            li Ensure civility.
                            ul
                                li Specifically, observers may choose to freeze conversations if it has derailed and become unproductive following warnings about maintaining civility.
                            li Any other exception handling such as handling threats to HQ or network security.
                        li The observer committee is subject to the following restrictions:
                        ul
                            li As with everyone else, they do not speak on behalf of the network or its constituent servers or council members with respect to their opinions and perspectives.
                            li Observers may not make major decisions or change TCN rules on their own; those must be passed by vote through the council.
                    Linkable#removal(e="h2", value="Removal from the TCN")
                    p Servers and council members are subject to removal from the TCN / the council for the following reasons / via the following methods:
                    h3 Servers
                    ul
                        li Voluntary withdrawal by the server owner.
                        li Removal of the server owner without a transfer to a new server owner.
                        ul
                            li If the server owner has been removed, they may have up to one week to declare a new server owner who will be added following the standard procedure for adding new council members, and up to two weeks after declaring the new owner to transfer the server. These deadlines may be stretched within reason in case of exceptional circumstances.
                            li If the outgoing server owner chooses to or fails to meet the timelines as specified above, the server will be removed without penalty and must be reinducted to return.
                    h3 Server Owners
                    ul
                        li Unexplained absence (failure to meet membership duties)<sup><a href="#absence">[link]</a></sup>.
                    h3 Council Advisors
                    ul
                        li Removal by the server owner for any reason (none needs to be given by the server owner).
                        li Unexplained absence (failure to meet membership duties)<sup><a href="#absence">[link]</a></sup> while they are the primary representative of their server.
                    h3 Observers
                    ul
                        li Removal from the TCN council will remove an observer from their position. That is, observers must be council members, and the position of observer does not protect them from removal.
                        li Observers may be removed from their position if they are found to fail to meet the expectations of an observer or to fulfill their observer duties without being removed from the council.
                    h3 Voluntary Departure
                    ul
                        li A member may voluntarily leave the council at any time. Observers may voluntarily step down without leaving the council at any time.
                    h3 Involuntary Removal
                    ul
                        li If a server is found to not meet the expectations or rules of the TCN, a major vote may be started to remove it from the TCN with penalty. If this occurs, its representatives may be transferred to another council position, and if not, will lose their eligibility to remain on the council.
                        li If a member is found to not meet the expectations or rules of the TCN, either in terms of fulfilling their duties or due to individual behavior, a major vote may be started to forcefully remove them from the network.
                            ul
                                li If this happens, they may not be transferred to another council position and must follow the usual procedure to return to the council.
                                li If a council advisor is removed while being the primary representative, the server is exempt from activity requirements until the server owner's planned absence ends, after which it is their responsibility to find a new council advisor if needed.
                        li Documentation presented against a server or council member must be made available to the target for at least 7 days to allow time to respond (extended for up to 7 days if any involved party is on break), extended if the documentation is particularly long.
                        li Once a response has been provided, a minimum of 2 days must be given to the council to read the presented information and response, extended for discussion or if the documentation or response is particularly long, before any votes regarding the issue.
                    Linkable#induction(e="h2", value="Induction")
                    ul
                        li Servers must be observed for 28 days before they can be voted on.
                        li A server is eligible for a reduced observation of 14 days if:
                            ul
                                li It was removed without penalty and fewer than two months have passed between its removal and its application.
                                li Its most recent observation ended fewer than six months ago.
                        li A minor vote may be conducted to require a server to undergo full observation regardless of its eligibility.
                        li Upon application, a notice must be posted with a ping for the alert role.
                        li A minor vote may be conducted to reject a server without observing them.
                            ul
                                li A minimum of 72 hours will be provided after their application is posted before an observer may reach out to the applicant. This period may be extended if there is ongoing discussion, and while the voting process is active, observation may not begin, but an observer may reach out to provide transparency on the timeline.
                        li A major vote may be conducted to stop observation and immediately reject the server.
                        li Once observation has finished, a report will be published by the observer.
                        li A minimum of 24 hours, extended for discussion, must pass between publication and voting.
                        li A minor vote will determine the outcome of the induction process.
                        li If a server is approved, it may join the network anytime within the next two months. A server that has been approved may be removed in the same way as a TCN server, which will revoke its right to join the TCN. If more than two months pass, it will need to undergo the induction process again.
                    Linkable#external-partners(e="h2", value="External Partners")
                    ul
                        li Organizations other than servers (e.g. Discord bots, online utility resources, etc.) may request to partner with the TCN.
                        li In these cases, there is no standard procedure; rather, and one or more observers will discuss with one or more representatives directly to arrange the details and what both sides will offer to each other.
                        li It is expected that a third-party partner will treat all TCN servers as partners as well and vice versa.
                        li A major vote will be required every time to establish an external partner as they will need to be added to the constitution independently for the partner list section of the requirements<sup><a href="#constituent-servers">[link]</a></sup>.
                    Linkable#voting(e="h2", value="Voting")
                    Linkable#general-protocols(e="h3", value="General Protocols")
                    ul
                        li A minor vote requires 60% of eligible voters to vote and a major vote requires 75%.
                        li Votes' live results must be hidden (that is, the results may only be shown upon the vote's conclusion).
                        li Abstaining is always a permitted option and counts for the voter turnout and voting duty requirements. When tallying, abstain votes will be ignored.
                        li Votes must be presented to the council at least 24 hours before they are conducted, extended for discussion. Any concerns raised must be addressed and resolved first.
                            ul
                                li This excludes procedural votes such as elections, inductions, and counter-votes protected by the constitution, which are started based on their own individual requirements.
                        li Information required for voters to make an informed decision must be made available with the vote alert.
                        li Votes must be open for at least 48 hours and a DM or ping reminder will be sent at least 24 hours before the vote ends.
                        li If the voter turnout requirement is not met, the vote will be extended by 48 hours once.
                        li If a vote ties, a discussion will be opened to try to solidify the council's stance, and then the vote will be redone as-is (unless stated otherwise).
                        li If extension happens twice or a tie happens twice, an observer vote will resolve the issue.
                    Linkable#proposal-votes(e="h3", value="Proposal Votes")
                    ul
                        li If 60% or more votes are in favor, the motion passes.
                        li If 40% or fewer votes are in favor, the motion fails.
                        li Otherwise, the vote is considered a tie.
                    Linkable#multiple-choice-votes(e="h3", value="Multiple Choice Votes")
                    ul
                        li By default, the most popular option, even if not a majority, is selected, and a tie only occurs if there is an exact tie for #1. This can be adapted per vote based on what is sensible for the motion.
                    Linkable#election-votes(e="h3", value="Election Votes")
                    ul
                        li Election votes must be open to all council members.
                        li If only one candidate exists, there will be a proposal vote to decide if they are elected.
                        li Otherwise, a ranked vote will be held.
                            ul
                                li Each user may rank the up to K of the X candidates from 1 to K and abstain on or vote against the other X - K candidates.
                                li Each ballot gives a candidate X - R points where R is the ranking.
                                li An abstained ballot counts as abstaining for all candidates.
                                li If a candidate receives more rejections than rankings, they are dropped from the election.
                                li The top candidates up to the number of open positions are selected and announced in alphabetical order with no indication of the overall ranking.
                    Linkable#induction-votes(e="h3", value="Induction Votes")
                    ul
                        li By default, the options are the induct the server, reject the server, or extend observation.
                        li If the server's mascot character is not officially confirmed as playable when the vote occurs, a fourth option will exist to pre-approve the server but not induct them until later.
                        li The induct and pre-approve (if applicable) ballots are counted together and the reject and extend ballots are counted together and compared as per policy for a proposal vote. If there is a tie, the vote will be considered a tie.
                        li If there is not a tie, then the options within the group will be compared as per policy for a proposal vote. If there is a tie, the vote will be considered a tie as per usual tie policy but the re-vote will only have the options that tied.
                    Linkable#observer-votes(e="h3", value="Observer Votes")
                    ul
                        li If the voters cannot make a decision due to failure to reach quorum or the inability to resolve a tie, the observer committee will make a determination to resolve the deadlock.
                        li All observers must vote (or abstain) and the majority decision will be the final determination.
                        li If the observers tie, they are expected to have a discussion, either privately or publicly, to weigh out the impacts and come to an agreement. The decision must be resolved at this stage; there is no higher authority that can make the final call.
                    Linkable#event-promotion(e="h2", value="Event Promotion")
                    ul
                        li Events involving at least one TCN server may be posted to <span class="mention">#network-events</span> and published across the network (the webhook URL is pinned in the channel).
                        li Events must be SFW (or only the SFW parts may be promoted) and must follow TCN rules, Discord Terms of Service or Community Guidelines, and Genshin Impact Terms of Service (plus any other similar terms or guidelines).
                        li Servers may delete an event from their server's announcement feed if it involves non-TCN servers (e.g. to remove promotion of any servers they have a hostile relationship with) (but not if it only involves TCN servers) or if it involves their own server and has already been posted by them with promotion of all involved TCN servers (e.g. if X, Y, and Z mains in the TCN do a collab with A and B mains outside of the TCN, then X mains may delete it if they have already announced it themselves as long as they promote Y and Z mains in the announcement).
                    Linkable#membership-changes(e="h2", value="Membership Changes")
                    ul
                        li When a person who is not on the TCN council is about to be added to the council, an alert will be posted with role ping.
                        li 24 hours must pass to allow for counter-votes. A minor vote may deny the user entry into the council.
                        li Change in position of existing council members does not require any advance notice and cannot be counter-voted.
                    Linkable#delegation(e="h2", value="Delegation")
                    ul
                        li A server owner may delegate their responsibilities and the position of primary representative to their council advisor.
                        li Upon induction, a server starts with 60 days of time. For each day that the position is delegated, a day is used, and for each day that the server owner is the primary representative, the server gains a day up to 60 days total. This is to prevent the server owner from being indefinitely absent.
                        li During delegation, the server owner can not be considered absent but the council advisor may be considered absent if they fail to uphold the responsibilities of a primary representative and their server owner's duties on their behalf.
                        li If the council advisor is removed during this time, the server owner will regain the ability to vote but will not be penalized for failing to do so for the duration of their planned absence.
                    Linkable#absence(e="h2", value="Absence")
                    p This section is meant as a non-exhaustive guideline of absence. By default, if these conditions are met, a primary representative will be considered absent; however, this should not be seen as an authoritative statement that under these conditions the council member should always be removed, nor does it mean these conditions have to be met in order for someone to be considered as failing to meet their responsibilities. The council's judgement through voting is required to remove someone even if these conditions are met.
                    ul
                        li Failure to respond to official inquiries or outreach from observers (e.g. regarding missing or outdated partner list) for over 3 weeks.
                        li Failure to vote thrice in a row (if the member is absent for a vote, any overlapping votes will not count).
                        li If they have not been present to support their server's advisor or staff such that it is actively inhibiting the server's ability to succeed.
                    Linkable#extras(e="h2", value="Extras")
                    p This section lists any extra lone rules or regulations that do not fit into existing sections or do not belong together with anything else.
                    ul
                        li AI chat bots are not permitted in global channels. An AI chat bot is defined as a bot that responds to messages generatively. Chat bots are permitted provided they respond in a predetermined way, including random selection from a list of answers, obtaining a random response from an API or online repository, etc. This definition cannot be objective so borderline cases will be discussed with the hosting server and a binding decision may be made by the observer team or by vote if deemed the appropriate course of action.
</template>

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
