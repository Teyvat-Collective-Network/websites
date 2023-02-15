<script lang="ts">
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/hq', 'HQ'] }")
            #main
                h1 Voting
                Linkable#terminology(e="h2", value="Terminology")
                ul
                    li A <b>minor vote</b> requires 60% of eligible voters to vote to be valid. Most votes are minor.
                    li A <b>major vote</b> requires 75% of eligible votesr to vote to be valid. Votes that change the rules are required to be major, and some other things may be major as well.
                    li <b>Quorum</b> refers to the voter turnout requirement, and <b>reaching quorum</b> means having enough people vote.
                    li <b>Abstaining</b> is an option for all votes that allows a voter to declare that they do not wish to provide input. If you believe you cannot make an unbiased decision based on what is in line with your server and the network's values, you may abstain. This counts towards quorum and counts as meeting the voting requirement.
                    li A <b>proposal vote</b> is a vote for a motion where the only options are yes and no.
                    li A <b>selection vote</b> is a multiple choice vote.
                    li An <b>election vote</b> is a ranked multiple choice vote for electing observers.
                Linkable#before-voting(e="h2", value="Before Voting")
                p Votes must be presented to the council for at least 24 hours before they can be started, and any concerns raised must be addressed first.
                ul
                    li This excludes procedural votes like elections, inductions, and counter-votes as protected by the rules, which can be started as soon as their individual conditions are met.
                    li In the case of a removal vote, documentation presented against the user or server must be made available to the subject for at least 7 days to allow time to respond (up to a 1 week extension is protected if the involved parties are on break).
                        ul
                            li Once the response has been provided, at least 2 days must be given for the council to read the presented information and response and raise any concerns or discuss the topic before any removal votes or actions votes may be started.
                Linkable#voting-procedure(e="h2", value="Voting Procedure")
                ul
                    li Information required to make an informed decision will be included with the vote.
                    li Votes will be open for 48 hours (or more) and an automatic reminder will be sent to missing voters at least 24 hours before the vote closes.
                    li If quorum is not reached or the vote is tied, the vote will be extended by 48 hours once.
                    li If the above happens a second time, an observer vote will resolve the issue.
                    li Abstaining counts as voting for the purposes of quorum and the member requirement to vote.
                Linkable#proposal-votes(e="h3", value="Proposal Votes")
                ul
                    li If <b>&ge;60%</b> of votes are in favor, the motion passes.
                    li If <b>&le;40%</b> of votes are in favor, the motion fails.
                    li If the approval is between 40% and 60%, the vote is considered a tie.
                Linkable#selection-votes(e="h3", value="Selection Votes")
                ul
                    li The most popular option, even if not a majority, is selected, and a tie only occurs if it is a tie for #1 (unless otherwise specified).
                    li For induction votes:
                        ul
                            li If the server's mascot character is not confirmed as playable, the "Induct Now" and "Induct Later" options are first counted together.
                            li If the induct options together are the most popular option, the server is accepted, and then the two options are weighed against each other like a proposal vote to decide if the induction happens immediately or is postponed.
                            li If the above ties, the re-vote will only include the two induct options.
                Linkable#election-votes(e="h3", value="Election Votes")
                p See more information on elections themselves <a href="/info/procedures">here</a>.
                ul
                    li If only one candidate exists, there will just be a proposal vote to decide if they will be elected.
                    li Otherwise, a ranked vote will be held.
                        ul
                            li Even if there is only one spot, rank all candidates, as if your first choice isn't the winner, your second choice will still affect the results.
                            li To tally the votes, each candidate will be assigned a score which is the sum of their points from each ballot. Ranking a user with an <b>X</b> gives that user <b>candidate count - X</b> points. Any users with a <b>&lt;50%</b> approval rating are dropped out and the top remaining users win the election.
                            li The results will display the winning candidates in alphabetical order but do not display the actual ranking.
                Linkable#observer-votes(e="h3", value="Observer Votes")
                ul
                    li If the primary council cannot make a decision due to failure to reach quorum or the inability to resolve a tie, the observer committee will make a determination to resolve the deadlock.
                    li All observers must vote (or abstain) and the majority decision will be the final determination.
                    li If the observers tie, they are expected to have a discussion, either privately or publicly, to weigh out the impacts and come to an agreement. The decision must be resolved at this stage; there is no higher authority that can make the final call.
                Linkable#how-to-vote(e="h2", value="How To Vote")
                ul
                    li
                        b All Votes
                        ul
                            li Click <b>Abstain</b> to submit a blank ballot.
                            li Click <b>View Your Vote</b> to see what you have currently voted.
                            li Click <b>List Voters</b> to see a list of voters. If the vote is anonymous, only observers can use this to check who has voted but not for what. If the vote is not, anyone can use this to see what everyone has voted for.
                    li
                        b Proposal Votes
                        ul
                            li Click the up or down arrow to vote for or against the motion.
                            li Make sure you read the proposal carefully so you know which direction the vote is in. For example, for votes to reject servers before observation, voting in favor means in favor of rejection.
                    li
                        b Selection Votes
                        ul
                            li Click the dropdown and select your desired option(s).
                            li Most selection votes will just allow a single selection, but the functionality exists for multi-selection votes.
                    li
                        b Election Votes
                        ul
                            li To vote, click the button and a popup will be generated where you can fill in your vote.
                            li If you are editing your vote, your previous vote will be filled into the popup so you don't need to redo everything.
                            li The popup will contain many lines in the format <code>[candidate name]: [#]</code>
                            li To rank candidates, put a <b>1</b> next to your most preferred candidate, a <b>2</b> next to the second, etc.
                            li Enter <b>0</b> to abstain from voting on a candidate.
                            li Enter <b>-1</b> to vote against a candidate.
                            li Abstaining on the vote itself is no different from entering <b>0</b> for every candidate.
</template>
