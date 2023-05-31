import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './index2-4b0ff9cf.js';
import { L as Linkable } from './Linkable-15397560.js';
import { N as Navigation } from './Navigation-7feba243.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<style lang="${"scss"}">u {
  text-decoration: none;
}</style>`}

<div class="${"container"}">${validate_component(Navigation, "Navigation").$$render($$result, { last: ["/info/hq", "HQ"] }, {}, {
    default: () => {
      return `<div id="${"main"}"><h1>Directory</h1><p><a${add_attribute("href", "javascript:void(0)", 0)}><!-- HTML_TAG_START -->${"View Full Descriptions"}<!-- HTML_TAG_END --></a></p>${validate_component(Linkable, "Linkable").$$render($$result, { id: "stats", e: "h3", value: "Stats" }, {}, {})}<ul><li><u><b>Members: #</b></u> - <!-- HTML_TAG_START -->${"the number of members in the TCN council"}<!-- HTML_TAG_END --></li><li><u><b>Max Votes: #</b></u> - <!-- HTML_TAG_START -->${"the number of votes available (= the number of servers)"}<!-- HTML_TAG_END --></li><li><u><b>Quorum: #/#</b></u> - <!-- HTML_TAG_START -->${"the number of votes required for minor votes"}<!-- HTML_TAG_END --></li><li><u><b>Higher Quorum: #/#</b></u> - <!-- HTML_TAG_START -->${"the number of votes required for major votes"}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "information",
          e: "h3",
          value: "Information"
        },
        {},
        {}
      )}<ul><li><u><b>info-and-rules</b></u> - <!-- HTML_TAG_START -->${"our landing channel which contains some basic information that you should know and some HQ-specific rules"}<!-- HTML_TAG_END --></li><li><u><b>directory</b></u> - <!-- HTML_TAG_START -->${"this page in embed form"}<!-- HTML_TAG_END --></li><li><u><b>eli5-tcn-rules</b></u> - <!-- HTML_TAG_START -->${`the <a href="/info/rules">TCN rules</a>, summarized into ELI5 ("Explain Like I'm 5") format`}<!-- HTML_TAG_END --></li><li><u><b>react-roles</b></u> -${`a place to pick up optional ping and access roles`}</li><li><u><b>partner-list</b></u> - <!-- HTML_TAG_START -->${"a full list of TCN partners and their council members"}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "important",
          e: "h3",
          value: "Important"
        },
        {},
        {}
      )}<ul><li><u><b>announcements</b></u> - <!-- HTML_TAG_START -->${"important HQ news and announcements"}<!-- HTML_TAG_END --></li><li><u><b>reports</b></u> - <!-- HTML_TAG_START -->${"observation reports for applicant servers"}<!-- HTML_TAG_END --></li><li><u><b>summaries</b></u> - <!-- HTML_TAG_START -->${"summaries for important discussions as well as weekly summaries"}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render($$result, { id: "voting", e: "h3", value: "Voting" }, {}, {})}<ul><li><u><b>vote-here</b></u> - <!-- HTML_TAG_START -->${"where votes are posted"}<!-- HTML_TAG_END --></li><li><u><b>vote-suggestions</b></u> - <!-- HTML_TAG_START -->${"use <code>/suggest</code> in <b>bot-commands</b> to post a suggestion"}<!-- HTML_TAG_END --></li><li><u><b>elections</b></u> - <!-- HTML_TAG_START -->${'election nominations and statements are posted here (<a href="/info/voting">more info</a>)'}<!-- HTML_TAG_END --></li><li><u><b>vote-help</b></u> - <!-- HTML_TAG_START -->${'information on how to use the voting system (<a href="/info/voting">more info</a>)'}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "banshares",
          e: "h3",
          value: "Banshares"
        },
        {},
        {}
      )}<ul><li><u><b>ban-share-logs</b></u> - <!-- HTML_TAG_START -->${'where banshares are first posted and published from (<a href="/info/banshares">more info</a>)'}<!-- HTML_TAG_END --></li><li><u><b>ban-share-chat</b></u> - <!-- HTML_TAG_START -->${`discussion about banshares, or bringing up "unofficial" banshares that you don't want to publish`}<!-- HTML_TAG_END --></li><li><u><b>ban-share-guide</b></u> - <!-- HTML_TAG_START -->${'how to use banshares (also see <a href="/info/banshares">this page</a>)'}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "business",
          e: "h3",
          value: "Business"
        },
        {},
        {}
      )}<ul><li><u><b>akasha-terminal</b></u> - ${escape("t")}he <a href="${"/info/akasha"}">Akasha Terminal</a>, our centralized information management system.</li><li><u><b>global-logs</b></u> - <!-- HTML_TAG_START -->${'edit, delete, and ban logs for global channels (<a href="/info/global">more info</a>)'}<!-- HTML_TAG_END --></li><li><u><b>bot-commands</b></u> - <!-- HTML_TAG_START -->${"use bot commands here"}<!-- HTML_TAG_END --></li><li><u><b>network-events</b></u> - <!-- HTML_TAG_START -->${"the event feed for TCN servers' events (you must follow this in your server)"}<!-- HTML_TAG_END --></li><li><u><b>event-discussion</b></u> - <!-- HTML_TAG_START -->${"discuss events posted in <b>#network-events</b>, co-ordinate with other servers, etc."}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render(
        $$result,
        {
          id: "discussions",
          e: "h3",
          value: "Discussions"
        },
        {},
        {}
      )}<ul><li><u><b>applicants</b></u> - <!-- HTML_TAG_START -->${"applicant servers will be posted here"}<!-- HTML_TAG_END --></li><li><u><b>partner-discussion</b></u> - <!-- HTML_TAG_START -->${"discuss non-TCN partnership applications or affiliations here (see the pinned FAQ)"}<!-- HTML_TAG_END --></li><li><u><b>official-business</b></u> - <!-- HTML_TAG_START -->${"official discussion channel for HQ or network things, often used for things like reports, concerns, etc."}<!-- HTML_TAG_END --></li><li><u><b>tcn-discussion</b></u> - <!-- HTML_TAG_START -->${"official discussion channel for the TCN, often used for things like discussing TCN changes, network management, etc."}<!-- HTML_TAG_END --></li><li><u><b>dev-chat</b></u> - <!-- HTML_TAG_START -->${"development-related discussions/conversations; also report bugs or provide feedback for TCN dev projects here"}<!-- HTML_TAG_END --></li><li><u><b>observer-chat</b></u> - <!-- HTML_TAG_START -->${"read-only channel for observers to transparently discuss some things"}<!-- HTML_TAG_END --></li><li><u><b>project-board</b></u> - <!-- HTML_TAG_START -->${"a list of projects the TCN is working on and their progress"}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render($$result, { id: "help", e: "h3", value: "Help" }, {}, {})}<ul><li><u><b>ask-questions</b></u> - <!-- HTML_TAG_START -->${"for asking any questions to your fellow council members"}<!-- HTML_TAG_END --></li><li><u><b>assets</b></u> - <!-- HTML_TAG_START -->${"feel free to post bots, emoji, asset shops, etc. for other people to see"}<!-- HTML_TAG_END --></li></ul>${validate_component(Linkable, "Linkable").$$render($$result, { id: "general", e: "h3", value: "General" }, {}, {})}<ul><li><u><b>introductions</b></u> - <!-- HTML_TAG_START -->${"feel free to introduce yourself here"}<!-- HTML_TAG_END --></li><li><u><b>general</b></u> - <!-- HTML_TAG_START -->${"main (topicless) conversation channel"}<!-- HTML_TAG_END --></li><li><u><b>honkai</b></u> - <!-- HTML_TAG_START -->${"Honkai Impact + Honkai Star Rail"}<!-- HTML_TAG_END --></li><li><u><b>coomer-content</b></u> - <!-- HTML_TAG_START -->${"NSFW channel (must be 18+ to access)"}<!-- HTML_TAG_END --></li><li><u><b>genshin-leaks</b></u> - <!-- HTML_TAG_START -->${"leaks discussion; avoid this if you don't want spoilers or leaks"}<!-- HTML_TAG_END --></li><li><u><b>starboard</b></u> - <!-- HTML_TAG_START -->${"4 stars required"}<!-- HTML_TAG_END --></li><li><u><b>vc-text</b></u> - <!-- HTML_TAG_START -->${"no-mic channel"}<!-- HTML_TAG_END --></li><li><u><b>General</b></u> - <!-- HTML_TAG_START -->${"general voice channel"}<!-- HTML_TAG_END --></li></ul></div>`;
    }
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4649ef7d.js.map
