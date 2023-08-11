<script lang="ts">
    import { page } from "$app/stores";
    import Callout from "$lib/Callout.svelte";

    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
    import { highlight } from "$lib/util";
    import { onMount } from "svelte";

    onMount(() => {
        highlight();
        page.subscribe(() => highlight());
    });
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css" />
</svelte:head>

<div class="container">
    <div id="main">
        <Navigation last={["/info/documentation", "Website Documentation"]}>
            <h1>Forms Feature Documentation</h1>
            <Linkable id="introduction" e="h2" value="Introduction" />
            <p>
                The TCN Forms feature allows you to create a customizable and extendable form. You can control access
                based on the user's TCN Council position as well as perform input validation. External form validation
                is also supported, allowing you to completely customize question validation and conditional pages with
                code.
            </p>
            <p>
                To access this feature, go to <a href="/forms">/forms</a> (you can find this under
                <b>Staff Area &gt; Documents</b> if you are logged in as a council member).
            </p>
            <p>
                To create a new form, click "New Form" on the forms home page. You can also edit forms that you have
                edit access for if you have the edit link (<code>/docs/edit/:ID</code>).
            </p>
            <Linkable id="basics" e="h2" value="Basics" />
            <Linkable id="structure" e="h3" value="Structure" />
            <p>
                The first section is the name and the pages. We will first go over setting up questions with no
                conditions or validation, and we will introduce those in a
                <a href="#conditions-validation">later section</a>. You can skip ahead to
                <a href="#external-controls">this section</a> for documentation on external validation / conditions.
            </p>
            <p>
                You can enable "Collect Names" to collect the submitter's name. However, this option is not allowed if
                logged-out users can access the form (see the section on
                <a href="#access">access controls</a>).
            </p>
            <p>
                The name is required. You must have at least one page. However, a page may contain no questions. Page
                names and descriptions are both optional. The page description may use markdown (refer to the <a
                    href="/info/documentation/docs"
                    target="_blank">docs documentation</a
                > for a reference sheet). Each page contains questions, each of which must have a name. Question descriptions
                are optional and also support markdown.
            </p>
            <p>The following types of questions exist:</p>
            <ul>
                <li><b>Short Text</b> - single-line text input</li>
                <li><b>Long Text</b> - paragraph text input</li>
                <li><b>Number</b> - numerical input</li>
                <li><b>Multiple Choice</b> - select from a list of options</li>
                <li>
                    <b>Date</b> - date/time input (you can choose date-only, time-only, or full datetime)
                </li>
            </ul>
            <Linkable id="actions" e="h3" value="Actions" />
            <p>
                The next section is the form actions. You may select a webhook to post form submissions to. It does not
                have to be a Discord webhook. This section will go over Discord webhooks, and we will go over external
                webhooks in a
                <a href="#external-webhooks">later section</a>.
            </p>
            <p>
                To use this, check "Post Submission to Webhook". Then, paste your Discord webhook into the webhook URL.
                You can now select "Only Post Link" to not send answers to the webhook and only post a link to the
                submission on the website.
            </p>
            <p>
                If the webhook is in a forum channel, you will need to select the "Forum Channel" option. If you do not,
                it will not work and will silently error. You must then select a naming scheme for how forum posts will
                be named:
            </p>
            <ul>
                <li><b>Static Name</b> - all forum posts will be named the same</li>
                <li>
                    <b>Use Submitter Name</b> - if "Collect Names" is enabled, you can choose this and forum posts will be
                    named the user's name/tag
                </li>
                <li>
                    <b>Base On Answer</b> - you can select a question and forum posts will be named based on the submission's
                    answer to that question
                </li>
            </ul>
            <Linkable id="access" e="h3" value="Access" />
            <p>In this section, you can control who is allowed to access the form.</p>
            <ul>
                <li>Only you can edit the form's access permissions.</li>
                <li>Only you and observers can delete the document.</li>
                <li>Observers always have view access.</li>
            </ul>
            <ul>
                <li>Allow Observers - allow TCN observers to submit</li>
                <li>Allow TCN Council - allow all council members view and submit access</li>
                <li>Allow Logged In Users - allow any user, but they must be logged in to view the form and submit</li>
                <li>
                    Allow Observers to Edit - observers will also be able to edit the form but not access permissions
                </li>
                <li>
                    Allow TCN Council to Edit - allow all TCN Council Members to edit the form but not access
                    permissions
                </li>
                <li>
                    Make Public - allow everyone to view and submit to the form, even if they are not logged in
                    (disables the "Collect Names option")
                </li>
                <li>Allowlist - you can allow specific users to view and submit to the form by ID</li>
            </ul>
            <Linkable id="appearance" e="h3" value="Appearance" />
            <p>Here, you can customize how the embed looks when the link is posted into Discord.</p>
            <Linkable id="conditions-validation" e="h2" value="Conditions &amp; Validation" />
            <p>
                Each page can be shown conditionally. If a page's condition is not met, it will not be shown to the
                user. Even if the user enters answers onto one of these pages and then change some answers that then
                hide the page, their answers will not be included in their submission.
            </p>
            <p>You can select the following options for conditions:</p>
            <ul>
                <li>
                    <b>TCN Council Status</b> - you can choose to show the page to observers, server owners, council advisors,
                    and non-council members separately. The user's highest classification will determine if they see this
                    page; that is, unchecking "if observer" and checking "if owner" will still hide the page from observers
                    that are server owners.
                </li>
                <li>
                    <b>Question</b> - you can show the page conditionally based on a question. The question must be in
                    an earlier page to be the condition for a page.
                    <ul>
                        <li>
                            <b>Number</b> - you can show the page based on how the user's answer compares to a fixed value,
                            supporting &gt;, &ge;, =, &le;, &lt;, and &ne;. If the question is not required, you can also
                            select whether or not the page should be shown if the question is skipped.
                        </li>
                        <li>
                            <b>Multiple Choice</b> - you can show the page based on whether the user has any / all of a fixed
                            list of options selected / not selected.
                        </li>
                        <li>
                            <b>Date</b> - you can show the page based on whether the user's answer is before or on, before,
                            after or on, after, between, or not between fixed dates. If the question is not required, you
                            can also select whether or not the page should be shown if the question is skipped.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Each question also supports validation, and the user will not be allowed to go to the next page until
                all of their answers pass validation.
            </p>
            <p>You can select the following validation options:</p>
            <ul>
                <li>
                    <b>Short Text</b>
                    <ul>
                        <li>You can require an email address.</li>
                        <li>You can require a URL.</li>
                        <li>You can require a user ID (it will require it to correspond to a valid user.)</li>
                        <li>If none of these are selected, you can require a minimum and/or maximum length.</li>
                    </ul>
                </li>
                <li>
                    <b>Long Text</b>
                    <ul>
                        <li>You can require a minimum and/or maximum length.</li>
                    </ul>
                </li>
                <li>
                    <b>Number</b>
                    <ul>
                        <li>By default, the answer must be an integer, but you can allow non-integer input.</li>
                        <li>You can require a minimum and/or maximum value.</li>
                    </ul>
                </li>
                <li>
                    <b>Multiple Choice</b>
                    <ul>
                        <li>You can require a minimum and/or maximum number of selected options.</li>
                        <li>If the maximum value is 1, the input goes from checkboxes to radio buttons.</li>
                        <li>
                            If the maximum and minimum values are 1, you can choose to display the input as a dropdown
                            instead of a list of radio buttons.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Date</b>
                    <ul>
                        <li>You can choose to require the answer to be in the past or in the future.</li>
                    </ul>
                </li>
            </ul>
            <Linkable id="external-webhooks" e="h2" value="External Webhooks" />
            <p>
                You can enter a non-Discord webhook to process submission data yourself. To do this, enable "Post
                Submission to Webhook" and enter a non-Discord URL. You should see an info pop-up informing you that it
                is not a Discord webhook URL.
            </p>
            <p>
                It is also highly recommended that you set a secret, which you should generate using a cryptographically
                secure method and should be at least 32 bytes. We will go over how to use the secret to ensure
                submissions are actually being sent by the TCN server.
            </p>
            <p>Your webhook will receive the submission in the following format:</p>
            <pre><code class="hljs language-json"
                    >{'{\n    "id": "[string]: this is the form\'s ID (present in the URL)",\n    "sid": "[number]: this is an incrementing ID unique to each submission per form",\n    "user": "[string | null]: this is the user\'s ID if Collect Names is enabled and null otherwise",\n    "answers": [\n        {\n            "id": "[number]: the question ID",\n            "question": "[string]: the question text at the time of submission",\n            "answer": "[variable]: for short/long text, it is a string; for number, it is a number; for multiple-choice, it is an array; for date, it is a date string",\n            "show_date": "[boolean]: for date questions, this is whether or not the date is shown for this question",\n            "show_time": "[boolean]: for date questions, this is whether or not the time is shown for this question"\n        }\n    ]\n}'}</code
                ></pre>
            <p>For verification with the secret:</p>
            <ul>
                <li>
                    You will receive the following headers:
                    <ul>
                        <li>
                            <code>X-Signature-Timestamp</code> - This is the millisecond timestamp of when the server generated
                            the data to send. You should reject submissions that are more than a few seconds old to avoid
                            repetition attacks.
                        </li>
                        <li>
                            <code>X-Signature-Nonce</code> - This is a randomly generated nonce value to avoid repetition
                            attacks (it is a non-negative integer less than one billion). The same nonce will not be used
                            with the same timestamp, so if you see the same combination again, you should reject it.
                        </li>
                        <li>
                            <code>X-Signature-Hash</code> - This is the hex digest of the SHA-512 hash of
                            <code>{"{timestamp}:{nonce}:{secret}:{body}"}</code>, where
                            <code>{"{body}"}</code> is the input body, which is a JSON string with no extra whitespace.
                        </li>
                    </ul>
                </li>
                <li>
                    The purpose of setting a secret is so that you can ensure that requests are actually sent by us. If
                    your URL is exposed, other people could send garbage requests to it, and by verifying the signature,
                    you can ignore those requests.
                </li>
                <li>
                    In case an existing request gets intercepted, an attacker could repeat the request to your server.
                    To avoid this, we recommend the following.
                    <ul>
                        <li>
                            Store the nonce and timestamp of each request. If you see this combination again, ignore the
                            request.
                        </li>
                        <li>
                            Ignore requests whose timestamp is more than a few seconds old, e.g. 10 seconds. You can
                            therefore discard nonce-timestamp pairs after 10 seconds (to avoid running out of memory).
                        </li>
                    </ul>
                </li>
                <li>
                    The most important part is to ensure the signature is correct. Join the timestamp, nonce, secret,
                    and body with colons and hash it with SHA-512. The timestamp and nonce are sent in the headers <code
                        >X-Signature-Timestamp</code
                    >
                    and <code>X-Signature-Nonce</code> respectively, and the body is simply the POST request body. The
                    secret is the fixed value you provide us, which you must keep secret for this to work.
                    <ul>
                        <li>Join the timestamp, nonce, secret, and body with colons.</li>
                        <li>Hash it with SHA-512 and obtain the hex string output.</li>
                        <li>
                            Ensure this hash is equal to the value of the header
                            <code>X-Signature-Hash</code> using a timing safe equality check (to avoid
                            <a href="https://en.wikipedia.org/wiki/Timing_attack" target="_blank" rel="noreferrer"
                                >timing attacks</a
                            >).
                        </li>
                    </ul>
                </li>
            </ul>
            <p>Here is a sample of how to validate the request in Node.JS:</p>
            <pre><code class="hljs language-js"
                    >{`const secret = "...";
const timestamp = request.headers["X-Signature-Timestamp"];
const nonce = request.headers["X-Signature-Nonce"];
const body = await request.text();
const signature = request.headers["X-Signature-Hash"];

if (!timestamp.match(/^\\d+$/)) return new Response("Invalid timestamp.", { status: 400 });
if (!nonce.match(/^\\d+$/)) return new Response("Invalid nonce.", { status: 400 });
if (new Date().getTime() - parseInt(timestamp) > 10000) return new Response("Request is too old.", { status: 400 });

const key = timestamp + ":" + nonce;
if (set.has(key)) return new Response("Timestamp-nonce pair is duplicate.", { status: 400 });

const stream = new TextEncoder().encode(key + ":" + secret + ":" + body);
const hash = await crypto.subtle.digest("SHA-512", stream);
const hex = Buffer.from(hash).toString("hex");
if (hex !== signature) return new Response("Invalid signature.", { status: 400 });

set.add(key);
setTimeout(() => set.remove(key), 100000);

// At this point, the request is validated and not duplicate.
// You will need to define a set of strings outside of the handler function.
// You can get the data using JSON.stringify(body).`}
</code></pre>
            <Linkable id="external-controls" e="h2" value="External Controls" />
            <p>
                To enable external form controls, check the "Use External Validation/Conditions" option at the top. You
                will then need to specify a URL which will serve as the API. If external controls are enabled, the
                default options for page conditions and page validation are removed. The following features exist.
            </p>
            <Callout style="red">
                <p>
                    Validation requests are sent by the client to determine which pages are shown and whether the user
                    may proceed and then by the server before submission to ensure they are not tampering with data. You
                    can always be sure that submissions are valid according to your API; however, you may receive
                    garbage data. You should handle all data that meets the following specifications properly but not
                    error on faulty data, as your API endpoint will be exposed to the user.
                </p>
            </Callout>
            <ul>
                <li>
                    <b>External Access Controls</b> - In addition to the supported access controls, you can check "Use
                    External Access" in the access section. This is only allowed if the form is not visible to
                    logged-out users; that is, "Make Public" is disabled.
                    <br /><br />
                    Then, you must implement <code>GET /access</code> on your API route, which will receive the query
                    argument <code>user</code> with the ID of the user being checked. You must return a truthy value if
                    the user should be allowed to access the form and a falsy value otherwise in JSON format, e.g.
                    <code>"true"</code>
                    or
                    <code>"false"</code>.
                </li>
                <li>
                    <b>External Page Conditions</b> - Per page, you can check "Show Conditionally" to make the page
                    conditional.
                    <br /><br />
                    Then, you must implement <code>POST /condition/:index</code> where
                    <code>:index</code> is the page number (starting at 1 - it is the same as the page number in the
                    form editor). This route will receive a JSON object (with header
                    <code>Content-Type: application/json</code>). The object contains the following keys:
                    <ul>
                        <li>
                            <code>user</code> - The user's ID or <code>null</code> if the user is logged out.
                        </li>
                        <li>
                            <code>answers</code> - An object containing all of the user's current answers. The keys are
                            the question IDs (which you can find at the top of each question in the editor) and the
                            values are strings for text input, numbers for number input, an array of integers for
                            multiple-choice questions (<code>0</code> for the first option), and a date string for date questions.
                        </li>
                    </ul>
                    You must return a truthy value if the user should be shown the page and a falsy value otherwise in JSON
                    format, e.g.<code>"true"</code> or <code>"false"</code>.
                </li>
                <li>
                    <b>External Question Validation</b> - Per question, you can check "Use Validation" to make the
                    question validated.
                    <br /><br />
                    Then, you must implement <code>POST /validation/:id</code> where
                    <code>:id</code> is the question ID (which you can find at the top of each question in the editor).
                    This route will receive a JSON object (with header
                    <code>Content-Type: application/json</code>). This object contains the following keys:
                    <ul>
                        <li>
                            <code>user</code> - The user's ID or <code>null</code> if the user is logged out.
                        </li>
                        <li>
                            <code>answer</code> - The user's answer for this question, which is a string for text input,
                            number for number input, array of integers for multiple-choice questions (<code>0</code> for
                            the first option), and date string for date questions.
                        </li>
                    </ul>
                    You must return a falsy value if the user's answer is valid and a string containing an error message
                    otherwise in JSON format, e.g.<code>"false"</code> or
                    <code>'"You must select all options."'</code>.
                </li>
            </ul>
        </Navigation>
    </div>
</div>
