import { c as create_ssr_component, v as validate_component } from './index2-4b0ff9cf.js';
import { L as Linkable } from './Linkable-15397560.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render($$result, { last: ["/info/hq", "HQ"] }, {}, {
    default: () => {
      return `<div id="${"main"}"><h1>Procedures</h1>${validate_component(Linkable, "Linkable").$$render($$result, { id: "voting", e: "h2", value: "Voting" }, {}, {})}<p>See the page on voting <a href="${"/info/voting"}">here</a>.</p>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "elections",
          e: "h2",
          value: "Elections"
        },
        {},
        {}
      )}<p>See the page on voting <a href="${"/info/voting"}">here</a> for information on how to vote and the mechanisms.</p><ul><li>An election will be started if a change occurs that causes an increase in the amount of empty positions or if there are empty positions and someone requests a new election. This may be caused by an observer being removed during their term or if the number of seats is raised.</li><li>Additionally, 9 days before the scheduled end of an observer&#39;s term, an election will be started to minimize downtime or dragging the observer&#39;s term beyond the scheduled date.</li><li>Nominations will be open for 7 days. Anyone may be nominated except observers whose term is not about to end. Self-nominations are allowed.</li><li>A nominee may accept their nomination and may write a statement. Alternatively, they may reject and stay out of the election. Statements are open for the same 7 day period, but may be extended if someone is nominated last-minute or needs more time.</li><li>If a nominee does not respond within the statement period or within 2 days of their nomination (whichever is later), they automatically reject their nomination.</li><li>Once all statements are done, a minor vote is conducted open to all members except the candidates.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "delegation",
          e: "h2",
          value: "Delegation"
        },
        {},
        {}
      )}<ul><li>A server owner may delegate their responsibilities, including the position on the primary council, to their council advisor at any time.</li><li>Each server starts with 60 days of eligibility on induction. Delegating for one day uses one day, and while the server owner is the active representative, they regain one day per day up to 60 days. This is to prevent the server owner from permanently becoming inactive and leaving their duties to the council advisor, as the server should be given to the active staff in that case.</li><li>During delegation, the server owner is not subject to activity requirements, but the council advisor may be considered absent if they fail to uphold the server owner&#39;s responsibilities.<ul><li>If the council advisor is removed, the server is allowed to not meet activity requirements until the server owner&#39;s scheduled return and it is the server owner&#39;s responsibliity to find another council advisor if they need one when they return.</li></ul></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "observation-induction",
          e: "h2",
          value: "Observation &amp; Induction"
        },
        {},
        {}
      )}<ul><li>When a server applies, the <b>New Applicant Alert</b> role will be automatically pinged to give people a chance to raise concerns and start a vote to reject.</li><li>An observer may only observe one server concurrently.</li><li>Read more about the entire observation and induction process <a href="${"/join"}">here</a>.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "event-promotion",
          e: "h2",
          value: "Event Promotion"
        },
        {},
        {}
      )}<ul><li>Events that involve at least one TCN server may be posted to <b>#network-events</b> and published across the network (the webhook URL is pinned in the channel).</li><li>All servers are required to follow this channel in a publicly visible channel.</li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "membership-changes",
          e: "h2",
          value: "Membership Changes"
        },
        {},
        {}
      )}<ul><li>24 hours before the planned introduction of people into the council, a notice will be sent pinging the <b>New Council Member Alert</b> role to give people a chance to vote to deny entry.</li><li>A minor vote may be started to deny a person entry into HQ and the council.</li><li>All other membership changes, including changing positions and leaving the council, do not require advance notice or a vote.</li></ul></div>`;
    }
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-00d1e2a6.js.map
