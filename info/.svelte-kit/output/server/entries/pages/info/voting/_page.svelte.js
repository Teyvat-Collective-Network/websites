import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { L as Linkable } from "../../../../chunks/Linkable.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render($$result, { last: ["/info/hq", "HQ"] }, {}, {
    default: () => {
      return `<div id="${"main"}"><h1>Voting</h1>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "terminology",
          e: "h2",
          value: "Terminology"
        },
        {},
        {}
      )}<ul><li>A <b>minor vote</b> requires 60% of eligible voters to vote to be valid. Most votes are minor.</li><li>A <b>major vote</b> requires 75% of eligible votesr to vote to be valid. Votes that change the rules are required to be major, and some other things may be major as well.</li><li><b>Quorum</b> refers to the voter turnout requirement, and <b>reaching quorum</b> means having enough people vote.</li><li><b>Abstaining</b> is an option for all votes that allows a voter to declare that they do not wish to provide input. If you believe you cannot make an unbiased decision based on what is in line with your server and the network&#39;s values, you may abstain. This counts towards quorum and counts as meeting the voting requirement.</li><li>A <b>proposal vote</b> is a vote for a motion where the only options are yes and no.</li><li>A <b>selection vote</b> is a multiple choice vote.</li><li>An <b>election vote</b> is a ranked multiple choice vote for electing observers.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "before-voting",
          e: "h2",
          value: "Before Voting"
        },
        {},
        {}
      )}<p>Votes must be presented to the council for at least 24 hours before they can be started, and any concerns raised must be addressed first.</p><ul><li>This excludes procedural votes like elections, inductions, and counter-votes as protected by the rules, which can be started as soon as their individual conditions are met.</li><li>In the case of a removal vote, documentation presented against the user or server must be made available to the subject for at least 7 days to allow time to respond (up to a 1 week extension is protected if the involved parties are on break).<ul><li>Once the response has been provided, at least 2 days must be given for the council to read the presented information and response and raise any concerns or discuss the topic before any removal votes or actions votes may be started.</li></ul></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "voting-procedure",
          e: "h2",
          value: "Voting Procedure"
        },
        {},
        {}
      )}<ul><li>Information required to make an informed decision will be included with the vote.</li><li>Votes will be open for 48 hours (or more) and an automatic reminder will be sent to missing voters at least 24 hours before the vote closes.</li><li>If quorum is not reached or the vote is tied, the vote will be extended by 48 hours once.</li><li>If the above happens a second time, an observer vote will resolve the issue.</li><li>Abstaining counts as voting for the purposes of quorum and the member requirement to vote.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "proposal-votes",
          e: "h3",
          value: "Proposal Votes"
        },
        {},
        {}
      )}<ul><li>If <b>≥60%</b> of votes are in favor, the motion passes.</li><li>If <b>≤40%</b> of votes are in favor, the motion fails.</li><li>If the approval is between 40% and 60%, the vote is considered a tie.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "selection-votes",
          e: "h3",
          value: "Selection Votes"
        },
        {},
        {}
      )}<ul><li>The most popular option, even if not a majority, is selected, and a tie only occurs if it is a tie for #1 (unless otherwise specified).</li><li>For induction votes:<ul><li>If the server&#39;s mascot character is not confirmed as playable, the &quot;Induct Now&quot; and &quot;Induct Later&quot; options are first counted together.</li><li>If the induct options together are the most popular option, the server is accepted, and then the two options are weighed against each other like a proposal vote to decide if the induction happens immediately or is postponed.</li><li>If the above ties, the re-vote will only include the two induct options.</li></ul></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "election-votes",
          e: "h3",
          value: "Election Votes"
        },
        {},
        {}
      )}<p>See more information on elections themselves <a href="${"/info/procedures"}">here</a>.</p><ul><li>If only one candidate exists, there will just be a proposal vote to decide if they will be elected.</li><li>Otherwise, a ranked vote will be held.<ul><li>Even if there is only one spot, rank all candidates, as if your first choice isn&#39;t the winner, your second choice will still affect the results.</li><li>To tally the votes, each candidate will be assigned a score which is the sum of their points from each ballot. Ranking a user with an <b>X</b> gives that user <b>candidate count - X</b> points. Any users with a <b>&lt;50%</b> approval rating are dropped out and the top remaining users win the election.</li><li>The results will display the winning candidates in alphabetical order but do not display the actual ranking.</li></ul></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "observer-votes",
          e: "h3",
          value: "Observer Votes"
        },
        {},
        {}
      )}<ul><li>If the primary council cannot make a decision due to failure to reach quorum or the inability to resolve a tie, the observer committee will make a determination to resolve the deadlock.</li><li>All observers must vote (or abstain) and the majority decision will be the final determination.</li><li>If the observers tie, they are expected to have a discussion, either privately or publicly, to weigh out the impacts and come to an agreement. The decision must be resolved at this stage; there is no higher authority that can make the final call.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "how-to-vote",
          e: "h2",
          value: "How To Vote"
        },
        {},
        {}
      )}<ul><li><b>All Votes</b><ul><li>Click <b>Abstain</b> to submit a blank ballot.</li><li>Click <b>View Your Vote</b> to see what you have currently voted.</li><li>Click <b>List Voters</b> to see a list of voters. If the vote is anonymous, only observers can use this to check who has voted but not for what. If the vote is not, anyone can use this to see what everyone has voted for.</li></ul></li><li><b>Proposal Votes</b><ul><li>Click the up or down arrow to vote for or against the motion.</li><li>Make sure you read the proposal carefully so you know which direction the vote is in. For example, for votes to reject servers before observation, voting in favor means in favor of rejection.</li></ul></li><li><b>Selection Votes</b><ul><li>Click the dropdown and select your desired option(s).</li><li>Most selection votes will just allow a single selection, but the functionality exists for multi-selection votes.</li></ul></li><li><b>Election Votes</b><ul><li>To vote, click the button and a popup will be generated where you can fill in your vote.</li><li>If you are editing your vote, your previous vote will be filled into the popup so you don&#39;t need to redo everything.</li><li>The popup will contain many lines in the format <code>[candidate name]: [#]</code></li><li>To rank candidates, put a <b>1</b> next to your most preferred candidate, a <b>2</b> next to the second, etc.</li><li>Enter <b>0</b> to abstain from voting on a candidate.</li><li>Enter <b>-1</b> to vote against a candidate.</li><li>Abstaining on the vote itself is no different from entering <b>0</b> for every candidate.</li></ul></li></ul></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
