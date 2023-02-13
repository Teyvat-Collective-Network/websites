<script lang="ts">
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";

    let full: boolean = false;
</script>

{#if !full}
    <style lang="scss">
        u {
            text-decoration: none;
        }
    </style>
{/if}

<div class="container">
    <Navigation last={["/info/hq", "HQ"]}>
        <div id="main">
            <h1>Directory</h1>
            <p>
                <a href={"javascript:void(0)"} on:click={() => (full = !full)}>
                    {@html full ? "View Simplified Version" : "View Full Descriptions"}
                </a>
            </p>
            <Linkable e="h3" id="stats" value="Stats" />
            <ul>
                <li>
                    <u><b>Members: #</b></u> - {@html full
                        ? "This is the size of the TCN council. If this is showing as #/#, then the number of users in the server is not matching the expected number of council members."
                        : "the number of members in the TCN council"}
                </li>
                <li>
                    <u><b>Max Votes: #</b></u> - {@html full
                        ? "This is the number of votes available, also the number of servers. If this is showing as #/#/#, then the number of people with the voter role, the number of voters in the API, and the number of servers in the network do not match."
                        : "the number of votes available (= the number of servers)"}
                </li>
                <li>
                    <u><b>Quorum: #/#</b></u> - {@html full
                        ? "This is the number of votes required for minor votes, which is 60% of the number of votes rounded up."
                        : "the number of votes required for minor votes"}
                </li>
                <li>
                    <u><b>Higher Quorum: #/#</b></u> - {@html full
                        ? "This is the number of votes reuqired for major votes, which is 75% of the number of votes rounded up."
                        : "the number of votes required for major votes"}
                </li>
            </ul>
            <Linkable e="h3" id="information" value="Information" />
            <ul>
                <li>
                    <u><b>info-and-rules</b></u> - {@html full
                        ? 'Initial landing information including HQ rules and expectations. If you\'re a bit confused by the setup instructions there, you may want to check out the <a href="/info/quickstart">quickstart guide</a>.'
                        : "our landing channel which contains some basic information that you should know and some HQ-specific rules"}
                </li>
                <li>
                    <u><b>directory</b></u> - {@html full
                        ? "This is a short-form directory of our channel structure."
                        : "this page in embed form"}
                </li>
                <li>
                    <u><b>eli5-tcn-rules</b></u> - {@html full
                        ? 'ELI5 stands for "Explain Like I\'m 5" - this is an extremely simplified version of the TCN rules. Note that in the case of a contradiction, the full rules <a href="/info/rules">here</a> are correct and not the ELI5 version, so this is not a substitute for reading the rules, but can be good to remind you of what rules exist and where to find a specific rule.'
                        : 'the <a href="/info/rules">TCN rules</a>, summarized into ELI5 ("Explain Like I\'m 5") format'}
                </li>
                <li>
                    <u><b>react-roles</b></u> -
                    {#if full}
                        You can assign yourself roles here:
                        <ul>
                            <li>
                                Please assign yourself a pronoun role. Even if you believe it may be
                                obvious, let's work together to ensure everyone is comfortable using
                                these roles and allow everyone to communicate in a way that makes
                                them feel welcome here.
                            </li>
                            <li>
                                You can assign yourself ping roles for announcements, new applicants
                                (servers applying to the TCN), new council members (this role is
                                pinged 24+ hours before new people are added to HQ except if they
                                are inducted), and weekly summaries.
                            </li>
                            <li>
                                Finally, we have the Honkai channel and NSFW channel access roles
                                and the Hangout Ping role, which is pinged from time to time for
                                informal/unofficial hangout events or voice calls.
                            </li>
                        </ul>
                    {:else}
                        a place to pick up optional ping and access roles
                    {/if}
                </li>
                <li>
                    <u><b>partner-list</b></u> - {@html full
                        ? "This is the list of TCN partners. This is not the format you should follow for your partner embeds; this is a full list including information like the server ID, character element, weapon, and region, and the council members for each."
                        : "a full list of TCN partners and their council members"}
                </li>
            </ul>
            <Linkable e="h3" id="important" value="Important" />
            <ul>
                <li>
                    <u><b>announcements</b></u> - {@html full
                        ? "Here, you can find news and updates for the network or the HQ server. You can pick up the ping role in <b>#react-roles</b> to be notified. We will ping <code>@everyone</code> when the partner embed changes to make sure everyone is aware of updates."
                        : "important HQ news and announcements"}
                </li>
                <li>
                    <u><b>reports</b></u> - {@html full
                        ? "Here is where observers publish their reports for servers. Make sure you check these over and notify us of any issues you may notice. We will release the reports in advance of the vote to give some time for review and feedback."
                        : "observation reports for applicant servers"}
                </li>
                <li>
                    <u><b>summaries</b></u> - {@html full
                        ? "Here is where summaries for discussions are posted. If you miss any long or important discussions, check here to see if there is a summary, and if not, you can request that we make one to give the highlights of the conversation. Additionally, each week, a summary of ongoing events, the past week, and upcoming plans is posted. You can pick up the ping role in <b>#react-roles</b> to be notified when this is posted."
                        : "summaries for important discussions as well as weekly summaries"}
                </li>
            </ul>
            <Linkable e="h3" id="voting" value="Voting" />
            <ul>
                <li>
                    <u><b>vote-here</b></u> - {@html full
                        ? "Here is where votes are posted for things like network rule changes, inductions, etc. If you are eligible to vote, you will automatically have the ping role. If you notice any issues with this system, please contact <b>HyperNeutrino#1759</b> or ping him in <b>#dev-chat</b>."
                        : "where votes are posted"}
                </li>
                <li>
                    <u><b>vote-suggestions</b></u> - {@html full
                        ? "Here is where your suggestions can be posted. Some things may be implemented directly following approval of the suggestion; specifically, changes that do not require formal votes such as adding new channels to HQ. Other things may go to a formal vote instead. All non-standard votes must be suggested 24 hours before the vote opens and you do not need to use the suggestion system; you can bring it up in <b>#official-business</b> or <b>#tcn-discussion</b>, but this is an easy way to gauge the council's consensus. Use <code>/suggest</code> in <b>#bot-commands</b>."
                        : "use <code>/suggest</code> in <b>bot-commands</b> to post a suggestion"}
                </li>
                <li>
                    <u><b>elections</b></u> - {@html full
                        ? 'This is where election nominations and statements will be posted. See the <a href="/info/voting">voting page</a> for information.'
                        : 'election nominations and statements are posted here (<a href="/info/voting">more info</a>)'}
                </li>
                <li>
                    <u><b>vote-help</b></u> - {@html full
                        ? 'This is the help channel for voting. The information here is more or less the same as in the voting info page <a href="/info/voting">here</a>.'
                        : 'information on how to use the voting system (<a href="/info/voting">more info</a>)'}
                </li>
            </ul>
            <Linkable e="h3" id="banshares" value="Banshares" />
            <ul>
                <li>
                    <u><b>ban-share-logs</b></u> - {@html full
                        ? 'This is where banshares are posted after being submitted to <a href="https://banshare.teyvatcollective.network">https://banshare.teyvatcollective.network</a>. See <a href="/banshares">this page</a> for how to set it up.'
                        : 'where banshares are first posted and published from (<a href="/info/banshares">more info</a>)'}
                </li>
                <li>
                    <u><b>ban-share-chat</b></u> - {@html full
                        ? "Here, you can discuss banshares, ask for more info on problematic users that you are contemplating bansharing, or post informal banshares that you think are not solid enough to publish across the network or that you only want to make available to council members at their discretion."
                        : 'discussion about banshares, or bringing up "unofficial" banshares that you don\'t want to publish'}
                </li>
                <li>
                    <u><b>ban-share-guide</b></u> - {@html full
                        ? 'This is the help channel for banshares. The information here is more or less the same as on <a href="/info/banshares">this page</a>.'
                        : 'how to use banshares (also see <a href="/info/banshares">this page</a>)'}
                </li>
            </ul>
            <Linkable e="h3" id="business" value="Business" />
            <ul>
                <li>
                    <u><b>akasha-terminal</b></u> - {full ? "T" : "t"}he
                    <a href="/info/akasha">Akasha Terminal</a>, our centralized information
                    management system.
                </li>
                <li>
                    <u><b>global-logs</b></u> - {@html full
                        ? 'This is the logging channel for the TCN global chats. If you need to find purged messages or view edit history for global channels, you can find them here, no matter which server they originated from. Find more information on global channels <a href="/info/global">here</a>.'
                        : 'edit, delete, and ban logs for global channels (<a href="/info/global">more info</a>)'}
                </li>
                <li>
                    <u><b>bot-commands</b></u> - {@html full
                        ? "As the name suggests, this is the bot command channel. Feel free to spam bot commands here. You can use bot commands elsewhere when appropriate, but this channel exists for spam."
                        : "use bot commands here"}
                </li>
                <li>
                    <u><b>network-events</b></u> - {@html full
                        ? "This is the announcement channel for cross-promoting events. It is mandatory to have a publicly visible channel following this announcement channel in each TCN server. If you would like to promote an event involving at least one TCN server, check the pins here for a webhook URL and notify an observer to publish it. Please mention that it's ready for posting so we know you've had a chance to look over its final version and check for any errors you may have missed."
                        : "the event feed for TCN servers' events (you must follow this in your server)"}
                </li>
                <li>
                    <u><b>event-discussion</b></u> - {@html full
                        ? "This is for discussing anything event-related. Typically, it is used for pointing out issues or requesting clarifications with cross-promoted events or asking an observer to publish one, but you can also discuss potential collabs with other TCN servers here."
                        : "discuss events posted in <b>#network-events</b>, co-ordinate with other servers, etc."}
                </li>
            </ul>
            <Linkable e="h3" id="discussions" value="Discussions" />
            <ul>
                <li>
                    <u><b>applicants</b></u> - {@html full
                        ? "New applicants to the TCN will be posted here and a ping will automatically be sent for people with the New Applicant Alert role (which you can obtain from #react-roles). Please bring up any opinions or history you have regarding the server that you would like to share with the rest of the network and let an observer know if you want to start a rejection vote to deny observation to the applicant."
                        : "applicant servers will be posted here"}
                </li>
                <li>
                    <u><b>partner-discussion</b></u> - {@html full
                        ? "This channel is for discussion one-on-one partnerships with non-TCN servers. If you received a partnership request and you want more information on the server, start a discussion forum post here for that server. Make sure you check if anyone else has posted about them yet and read the pinned FAQ post first."
                        : "discuss non-TCN partnership applications or affiliations here (see the pinned FAQ)"}
                </li>
                <li>
                    <u><b>official-business</b></u> - {@html full
                        ? "This is the primary discussion channel for things like reports (not observation reports, but reports on users), bringing up concerns, etc. Compared to <b>#tcn-discussion</b>, this is more external, but the distinction is not too important."
                        : "official discussion channel for HQ or network things, often used for things like reports, concerns, etc."}
                </li>
                <li>
                    <u><b>tcn-discussion</b></u> - {@html full
                        ? "This is the secondary discussion channel for things like improvements to the network or HQ, proposed changes, etc. Compared to <b>#official-business</b>, this is more internal, but the distinction is not too important. If in doubt, just post to <b>#official-business</b>, and if there is an ongoing conversation, post here as an overflow."
                        : "official discussion channel for the TCN, often used for things like discussing TCN changes, network management, etc."}
                </li>
                <li>
                    <u><b>dev-chat</b></u> - {@html full
                        ? "This channel is for discussions related to anything about development. Its primary purpose is so everyone can contribute to discussions regarding TCN dev projects such as the global bot, TCN systems like Paimon/Akasha System, the TCN management bot, the banshare system and website, etc. This includes suggestions, bug reports, updates from devs, etc. If you want to ask questions or discuss other dev projects, you may do so here, but consider using <b>#dev-chat</b> in the TCN Hub, as you may find more active developers there. For questions about using these bots or any other technical questions, <b>#ask-questions</b> is still more appropriate."
                        : "development-related discussions/conversations; also report bugs or provide feedback for TCN dev projects here"}
                </li>
                <li>
                    <u><b>observer-chat</b></u> - {@html full
                        ? "This is the public read-only observer discussion channel. The goal is to increase transparency, so when possible, observers will discuss their work here instead of privately. Feel free to bring up any questions or issues in a discussion channel."
                        : "read-only channel for observers to transparently discuss some things"}
                </li>
                <li>
                    <u><b>project-board</b></u> - {@html full
                        ? "This is our to-do list / task board. Ask an observer if you would like a project to be added here. Feel free to contribute to discussions and add your opinion to project threads."
                        : "a list of projects the TCN is working on and their progress"}
                </li>
            </ul>
            <Linkable e="h3" id="help" value="Help" />
            <ul>
                <li>
                    <u><b>ask-questions</b></u> - {@html full
                        ? "This is a general Q&A channel. You can ask for advice, information on certain users, help with TCN bots or other bots, etc."
                        : "for asking any questions to your fellow council members"}
                </li>
                <li>
                    <u><b>assets</b></u> - {@html full
                        ? "This is where you can find bots, emoji, and other server resources that other council members have recommended. If you come across anything you think might interest or benefit other TCN servers, feel free to introduce it to the network here!"
                        : "feel free to post bots, emoji, asset shops, etc. for other people to see"}
                </li>
            </ul>
            <Linkable e="h3" id="general" value="General" />
            <ul>
                <li>
                    <u><b>introductions</b></u> - {@html full
                        ? "Introduce yourself here! If you want to redo your introduction, you can edit it in-place, but if there’s important information you want everyone to see again e.g. you have changed your pronouns, you can repost it, just please delete the old version."
                        : "feel free to introduce yourself here"}
                </li>
                <li>
                    <u><b>general</b></u> - {@html full
                        ? "General chatter; there is no topic for this channel. The expectations of civility still apply, obviously, and feel free to create threads if you want to have more spammy conversations or post a bunch of images."
                        : "main (topicless) conversation channel"}
                </li>
                <li>
                    <u><b>honkai</b></u> - {@html full
                        ? "Channel for Honkai Impact and Honkai Star Rail. You can gain access to this channel with the access role in <b>#react-roles</b>."
                        : "Honkai Impact + Honkai Star Rail"}
                </li>
                <li>
                    <u><b>coomer-content</b></u> - {@html full
                        ? "This is the NSFW channel. You must be 18+ years of age to access this channel. You can gain access to this channel with the access role in <b>#react-roles</b>. If we find that you are accessing this channel and are not yet 18, we may be forced to ban you to enforce ToS, so don't do it."
                        : "NSFW channel (must be 18+ to access)"}
                </li>
                <li>
                    <u><b>genshin-leaks</b></u> - {@html full
                        ? "This is the leaks channel. Please post any leaks here and not in other channels to avoid spoiling things for others."
                        : "leaks discussion; avoid this if you don't want spoilers or leaks"}
                </li>
                <li>
                    <u><b>starboard</b></u> - {@html full
                        ? "Messages require 4 stars to reach the starboard."
                        : "4 stars required"}
                </li>
                <li>
                    <u><b>vc-text</b></u> - {@html full
                        ? "No-mic channel for the voice channel(s)."
                        : "no-mic channel"}
                </li>
                <li>
                    <u><b>General</b></u> - {@html full
                        ? "Our only voice channel. If you think we need more, let us know!"
                        : "general voice channel"}
                </li>
            </ul>
        </div>
    </Navigation>
</div>
