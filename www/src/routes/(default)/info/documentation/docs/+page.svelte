<script lang="ts">
    import { PUBLIC_DOMAIN } from "$env/static/public";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
    import type { LocalsData } from "$lib/types";

    export let data: LocalsData;

    const cheat_sheet = [
        ["# heading 1", "<h1 style='margin: 0'>heading 1</h1>"],
        ["## heading 2", "<h2 style='margin: 0'>heading 2</h2>"],
        ["### heading 3", "<h3 style='margin: 0'>heading 3</h3>"],
        ["#### heading 4", "<h4 style='margin: 0'>heading 4</h4>"],
        ["##### heading 5", "<h5 style='margin: 0'>heading 5</h5>"],
        ["###### heading 6", "<h6 style='margin: 0'>heading 6</h6>"],
        [["**bold**", "__bold__"], "<b>bold</b>"],
        [["*italics*", "_italics_"], "<i>italics</i>"],
        ["<u>underline</u>", "<u>underline</u>"],
        ["> blockquote", "<blockquote>blockquote</blockquote>"],
        [
            "1. this is an<br />2. ordered<br />3. list",
            "<ol><li>this is an<li>ordered<li>list</ol>",
        ],
        [
            "- this is an<br />- unordered<br />- list",
            "<ul><li>this is an<li>unordered<li>list</ul>",
        ],
        ["---", "<hr />"],
        [
            '[link "hover text"](https://google.com)',
            "<a title='hover text' href='https://google.com' target='_blank' rel='noreferrer'>text</a> (hover text is optional)",
        ],
        [
            `![alt text](${PUBLIC_DOMAIN}/favicon.png)`,
            "<img src='/favicon.png' alt='alt text' /><br />alt text is optional, but please include it for accessibility",
        ],
        [
            "| right-aligned | center-aligned | left-aligned |<br />|-:|:-:|:-|<br />| text | text | text |",
            "<table style='width: 100%'><tr><th class='right-align'>right-aligned</th><th>center-aligned</th><th class='left-align'>left-aligned</th></tr><tr><td class='right-align'>text</td><td>text</td><td class='left-align'>text</td></tr></table>",
        ],
        [
            "```js<br />console.log('Hello, World!');<br />```",
            "<pre><code class='hljs language-js'><span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(<span class='hljs-string'>'Hello, World!'</span>);</code></pre><p>Replace <code>js</code> with <code>text</code> for no syntax highlighting.</p>",
        ],
        [["~strikethrough~", "~~strikethrough~~"], "<s>strikethrough</s>"],
        [
            "- [x] done<br />- [ ] todo",
            "<ul><li><input type='checkbox' disabled='' checked='' style='background-color: transparent'> done</li><li><input type='checkbox' disabled='' style='background-color: transparent'> todo</li></ul>",
        ],
        ["H<sub>2</sub>O", "H<sub>2</sub>O"],
        ["x<sup>2</sup>", "x<sup>2</sup>"],
    ];

    const feature_list = [
        [
            "[@251082987360223233]",
            "<span class='row' style='gap: 10px'><span class='mention user' data-id='251082987360223233'><i class='material-icons'>pending</i> &nbsp; Loading User...</span> (click to copy ID)</span>",
        ],
        [
            "[&role]",
            "<span class='row' style='gap: 10px'><span class='mention'><i class='material-icons'>group</i> &nbsp; role</span> (no ID associated)</span>",
        ],
        [
            "[878812623796310044&Observers]",
            "<span class='row' style='gap: 10px'><span class='mention' data-id='878812623796310044'><i class='material-icons'>group</i> &nbsp; Observers</span> (click to copy ID)</span>",
        ],
        [
            "[#channel]",
            "<span class='mention'><i class='material-icons'>tag</i> &nbsp; channel</span>",
        ],
        [
            "[t#general]<br />[a#announcements]<br />[v#voice]<br />[f#forum]<br />[s#stage]<br />[c#category]",
            "<span class='mention'><i class='material-icons'>tag</i>&nbsp;general</span><br /><span class='mention'><i class='material-icons'>campaign</i>&nbsp;announcements</span><br /><span class='mention'><i class='material-icons'>volume_up</i>&nbsp;voice</span><br /><span class='mention'><i class='material-icons'>forum</i>&nbsp;forum</span><br /><span class='mention'><i class='material-icons'>podcasts</i>&nbsp;stage</span><br /><span class='mention'><i class='material-icons'>folder</i>&nbsp;category</span>",
        ],
        [
            "[:1234567890]",
            "<span class='row' style='gap: 10px'><span class='mention' data-id='1234567890'><i class='material-icons'>schedule</i> &nbsp; <span class='time' data-timestamp='1234567890'></span></span> (click to copy timestamp)</span>",
        ],
        [
            "[:2020-05-27]",
            "<span class='mention'><i class='material-icons'>schedule</i> &nbsp; 2023-05-27</span>",
        ],
        [
            "[reader]",
            `<span class="row" style="gap: 10px">${
                data.user
                    ? `<span class="mention user" data-id="${data.user.id}"><i class="material-icons">pending</i> &nbsp; Loading User...</span> / `
                    : ""
            }<span class="mention"><i class="material-icons">account_circle</i> &nbsp; anonymous reader</span></span>`,
        ],
    ];

    let show_markdown = false;
    let show_features = false;
</script>

<div class="container">
    <div id="main">
        <Navigation last={["/info/documentation", "Website Documentation"]}>
            <h1>Documents Feature Documentation</h1>
            <Linkable id="introduction" e="h2" value="Introduction" />
            <p>
                The TCN Docs feature allows you to create a markdown document that renders as a
                webpage. You can control access based on the reader's TCN Council position as well
                as insert some Discord-related components such as user mentions.
            </p>
            <p>
                To access this feature, go to <a href="/docs">/docs</a> (you can find this under
                <b>Staff Area &gt; Documents</b> if you are logged in as a council member).
            </p>
            <p>
                To create a new document, click "New Document" on the docs home page. You can also
                edit documents that you have edit access for if you have the edit link (<code
                    >/forms/edit/:ID</code
                >).
            </p>
            <Linkable id="content" e="h2" value="Content" />
            <p>
                The first section is the name and the content, and both are required. Write out the
                document content in markdown (this is the same formatting system Discord uses). Here
                is a (nearly comprehensive) list of Markdown features:
            </p>
            <div class="scroll features">
                <div class="panel" style="width: max-content">
                    <h3 class="row" style="gap: 10px">
                        Markdown Reference
                        <a
                            href={"javascript:void(0)"}
                            on:click={() => (show_markdown = !show_markdown)}
                        >
                            <i class="material-icons">
                                {show_markdown ? "expand_less" : "expand_more"}
                            </i>
                        </a>
                    </h3>
                    {#if show_markdown}
                        <table>
                            <tr>
                                <th>Markdown</th>
                                <th>Output</th>
                            </tr>
                            {#each cheat_sheet as [md, html]}
                                {@const list = Array.isArray(md) ? md : [md]}
                                <tr>
                                    <td style="padding: 20px">
                                        {#each list as item, index}
                                            {#if item.includes("<br />")}
                                                <pre
                                                    style="background-color: var(--background-1-5)">{@html item}</pre>
                                            {:else}
                                                {#if index !== 0}&nbsp;/&nbsp;{/if}<code
                                                    style="background-color: var(--background-1-5)"
                                                    >{item}</code
                                                >
                                            {/if}
                                        {/each}
                                    </td>
                                    <td style="padding: 20px">{@html html}</td>
                                </tr>
                            {/each}
                        </table>
                    {/if}
                </div>
            </div>
            <p>Here is a list of features specific to TCN Documents:</p>
            <div class="scroll features">
                <div class="panel" style="width: max-content">
                    <h3 class="row" style="gap: 10px">
                        Documents Features
                        <a
                            href={"javascript:void(0)"}
                            on:click={() => (show_features = !show_features)}
                        >
                            <i class="material-icons">
                                {show_features ? "expand_less" : "expand_more"}
                            </i>
                        </a>
                    </h3>
                    {#if show_features}
                        <table>
                            <tr>
                                <th>Input</th>
                                <th>Output</th>
                            </tr>
                            {#each feature_list as [md, html]}
                                {@const list = Array.isArray(md) ? md : [md]}
                                <tr>
                                    <td style="padding: 20px">
                                        {#each list as item, index}
                                            {#if item.includes("<br />")}
                                                <pre
                                                    style="background-color: var(--background-1-5)">{@html item}</pre>
                                            {:else}
                                                {#if index !== 0}&nbsp;/&nbsp;{/if}<code
                                                    style="background-color: var(--background-1-5)"
                                                    >{item}</code
                                                >
                                            {/if}
                                        {/each}
                                    </td>
                                    <td style="padding: 20px">{@html html}</td>
                                </tr>
                            {/each}
                        </table>
                    {/if}
                </div>
            </div>
            <Linkable id="access" e="h2" value="Access" />
            <p>
                After writing the document content, you can control who has view and edit access to
                the document.
            </p>
            <ul>
                <li>Only you can edit the document's access permissions.</li>
                <li>Only you and observers can delete the document.</li>
                <li>Observers always have view access.</li>
            </ul>
            <ul>
                <li>Allow TCN Council - allow all TCN Council Members view access</li>
                <li>
                    Allow Logged In Users - allow any user, but they must be logged in to view the
                    document
                </li>
                <li>
                    Allow Observers to Edit - observers will also be able to edit the document but
                    not access permissions
                </li>
                <li>
                    Allow TCN Council to Edit - allow all TCN Council Members to edit the document
                    but not access permissions
                </li>
                <li>
                    Make Public - allow everyone to view the document, even if they are not logged
                    in
                </li>
                <li>Allowlist - you can allow specific users by ID</li>
            </ul>
            <Linkable id="appearance" e="h2" value="Appearance" />
            <p>
                Control the document's appearance here. You can set it to be anonymous to hide your
                name from the document, but observers will still be able to see who owns the
                document.
            </p>
            <p>
                Observers can designate a document as official, which modifies the notice at the top
                of the document. Usually, it informs the reader that the document is user-generated
                content and not endorsed by the TCN, but an official document as designated by the
                observer team. Use this responsibly!
            </p>
            <p>
                Finally, you can customize how the embed looks when the link is posted into Discord.
            </p>
        </Navigation>
    </div>
</div>

<style lang="scss">
    :global {
        .features {
            blockquote {
                margin-left: 0px;
                padding-left: 25px;
                border-left: 2px solid var(--text-secondary);
            }

            table,
            tr,
            th,
            td {
                border: 1px solid var(--text-secondary);
                border-collapse: collapse;
            }

            th,
            td {
                padding: 2px 5px;
            }

            .mention {
                top: 0px;
            }
        }
    }

    .scroll {
        overflow-x: scroll;
    }
</style>
