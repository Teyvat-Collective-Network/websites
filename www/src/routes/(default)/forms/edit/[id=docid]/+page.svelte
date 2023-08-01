<script lang="ts">
    import { goto } from "$app/navigation";
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import ConfirmLeave from "$lib/ConfirmLeave.svelte";
    import DatetimePicker from "$lib/DatetimePicker.svelte";
    import ListButtons from "$lib/ListButtons.svelte";
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;

    data.form ??= {
        allow_observers: false,
        allow_council: false,
        allow_logged_in: false,
        allow_everyone: false,
        allowlist: "",
        name: "",
        collect_names: false,
        pages: [],
        next_id: 1,
    };

    async function save() {
        const request = await fetch(`/forms/save/${data.id}`, {
            method: "post",
            body: JSON.stringify({ form: data.form }),
        });

        const { error, id } = await request.json();

        if (error) alert(error);
        else {
            alert("Saved.");
            if (data.id === "new") goto(`/forms/edit/${id}`);
        }
    }

    async function del() {
        if (
            confirm(
                "Are you sure you want to delete this form? It will become inaccessible and appear as though it does not exist to everyone, including yourself, except TCN observers.",
            )
        ) {
            const request = await fetch(`/forms/delete/${data.id}`, { method: "post", body: "" });
            const { error } = await request.json();

            if (error) alert(error);
            else {
                alert("Deleted.");
                goto("/forms");
            }
        }
    }

    function find_question(id: number) {
        return data.form.pages
            .flatMap((page: any) => page.questions)
            .find((question: any) => question.id === id);
    }

    let webhook_input_show = false;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.ctrlKey && e.key === "s") {
            save();
            e.preventDefault();
            e.stopPropagation();
        }
    }}
/>

<ConfirmLeave />

<div class="container">
    <div id="main">
        {#if !data.user}
            <Redirect
                to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/forms`)}"
            />
        {:else if !data.council}
            <Callout style="red">
                <p>You are not authorized to use the TCN Forms feature.</p>
            </Callout>
            <br />
            <a href="/" class="button">Home</a>
        {:else if data.missing}
            {goto(`/form/${data.id}`)}
        {:else if data.unauthorized}
            <Callout style="red">
                <p>You are not authorized to edit this form.</p>
            </Callout>
            <br />
            <a href="/forms" class="button">Forms Home</a>
        {:else}
            <div class="panel">
                <h3>Form</h3>
                <h5>Name</h5>
                <input
                    type="text"
                    bind:value={data.form.name}
                    required
                    placeholder="Max Length: 100"
                    maxlength={100}
                />
                <p>
                    <label>
                        <input type="checkbox" bind:checked={data.form.collect_names} />
                        Collect Names (only works if the form is not visible to logged-out users)
                    </label>
                </p>
                {#each data.form.pages as page, index}
                    <div class="panel" style="background-color: var(--background-1)">
                        <h4 class="row" style="gap: 10px">
                            Page {index + 1}
                            <ListButtons bind:array={data.form.pages} {index} />
                        </h4>
                        <h5>Name</h5>
                        <input
                            type="text"
                            bind:value={page.name}
                            placeholder="Max Length: 100"
                            maxlength={100}
                        />
                        <h5>Description</h5>
                        <input
                            type="text"
                            bind:value={page.description}
                            placeholder="Max Length: 2048"
                            maxlength={2048}
                        />
                        <p />
                        <div class="panel">
                            <p>
                                <label>
                                    Show Conditionally Based On
                                    <select bind:value={page.condition.source}>
                                        <option value={0}>No Condition</option>
                                        <option value={-1}>TCN Council Status</option>
                                        {#each data.form.pages as page}
                                            {#each page.questions as question}
                                                {#if ["number", "mcq", "date"].includes(question.type)}
                                                    <option value={question.id}>
                                                        {question.question.length > 80
                                                            ? `${question.question.substring(
                                                                  0,
                                                                  77,
                                                              )}...`
                                                            : question.question}
                                                    </option>
                                                {/if}
                                            {/each}
                                        {/each}
                                    </select>
                                </label>
                            </p>
                            {#if page.condition.source}
                                <hr />
                            {/if}
                            {#if page.condition.source === -1}
                                <p class="row" style="gap: 20px; flex-wrap: wrap">
                                    {#each ["observer", "owner", "advisor", ""] as key}
                                        <label>
                                            <input
                                                type="checkbox"
                                                bind:checked={page.condition[
                                                    `council_${key || "other"}`
                                                ]}
                                            />
                                            if {key || "non-member"}
                                        </label>
                                    {/each}
                                </p>
                            {:else if page.condition.source > 0}
                                {@const question = find_question(page.condition.source)}
                                {#if question?.type === "number"}
                                    <p class="row" style="gap: 10px; flex-wrap: wrap">
                                        show if value is
                                        <select bind:value={page.condition.number_op}>
                                            <option selected disabled hidden />
                                            <option value="gt">greater than</option>
                                            <option value="ge">greater than or equal to</option>
                                            <option value="eq">equal to</option>
                                            <option value="le">less than or equal to</option>
                                            <option value="lt">less than</option>
                                            <option value="ne">not equal to</option>
                                        </select>
                                        <input
                                            type="number"
                                            bind:value={page.condition.number_value}
                                            style="width: 150px"
                                        />
                                        {#if !question.required}
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    bind:checked={page.condition.number_default}
                                                />
                                                or no value is specified
                                            </label>
                                        {/if}
                                    </p>
                                {:else if question?.type === "mcq"}
                                    <p class="row" style="gap: 10px; flex-wrap: wrap">
                                        show if
                                        <select bind:value={page.condition.mcq_anyall}>
                                            <option>any</option>
                                            <option>all</option>
                                        </select>
                                        of the below are
                                        <select bind:value={page.condition.mcq_mode}>
                                            <option value="yes">selected</option>
                                            <option value="no">not selected</option>
                                        </select>
                                    </p>
                                    <p>
                                        {#each question.options as option}
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    bind:checked={page.condition.options[option]}
                                                />
                                                {option}
                                            </label>
                                        {/each}
                                    </p>
                                {:else if question?.type === "date"}
                                    <p class="row" style="gap: 20px 10px; flex-wrap: wrap">
                                        show if value is
                                        <select bind:value={page.condition.date_op}>
                                            <option selected disabled hidden />
                                            <option value="le">before or on</option>
                                            <option value="lt">before</option>
                                            <option value="ge">after or on</option>
                                            <option value="gt">after</option>
                                            <option value="bw">between (includes ends)</option>
                                            <option value="nb">not between (excludes ends)</option>
                                        </select>
                                        <span
                                            style="padding: 10px; border-radius: 5px; background-color: var(--background-1)"
                                        >
                                            <DatetimePicker
                                                bind:value={page.condition.first_date}
                                                show_date={question.show_date}
                                                show_time={question.show_time}
                                            />
                                        </span>
                                        {#if ["bw", "nb"].includes(page.condition.date_op)}
                                            and
                                            <span
                                                style="padding: 10px; border-radius: 5px; background-color: var(--background-1)"
                                            >
                                                <DatetimePicker
                                                    bind:value={page.condition.second_date}
                                                    show_date={question.show_date}
                                                    show_time={question.show_time}
                                                />
                                            </span>
                                        {/if}
                                        {#if !question.required}
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    bind:checked={page.condition.number_default}
                                                />
                                                or no value is specified
                                            </label>
                                        {/if}
                                    </p>
                                {:else}
                                    <Callout style="red">
                                        <p>Condition is invalid; please fix or remove it.</p>
                                    </Callout>
                                    <br />
                                {/if}
                            {/if}
                        </div>
                        {#each page.questions as question, qi}
                            <div class="panel">
                                <h5 class="row" style="gap: 10px">
                                    Question {qi + 1}
                                    <ListButtons bind:array={page.questions} index={qi} />
                                </h5>
                                <p><b>Name</b></p>
                                <input
                                    type="text"
                                    bind:value={question.question}
                                    placeholder="Max Length: 256"
                                    maxlength={256}
                                />
                                <p><b>Description</b></p>
                                <input
                                    type="text"
                                    bind:value={question.description}
                                    placeholder="Max Length: 1024"
                                    maxlength={1024}
                                />
                                <p class="row" style="gap: 20px">
                                    <select bind:value={question.type}>
                                        <option value="short">Short Text</option>
                                        <option value="long">Long Text</option>
                                        <option value="number">Number</option>
                                        <option value="mcq">Multiple Choice</option>
                                        <option value="date">Date</option>
                                    </select>
                                    <label>
                                        <input type="checkbox" bind:checked={question.required} />
                                        Required
                                    </label>
                                </p>
                                {#if question.type == "short"}
                                    <p>
                                        <label>
                                            Input&nbsp;Validation
                                            <select bind:value={question.short_format}>
                                                <option value="none">No Validation</option>
                                                <option value="email">Require Email Address</option>
                                                <option value="url">Require URL</option>
                                                <option value="user">Require User ID</option>
                                            </select>
                                        </label>
                                    </p>
                                    {#if question.short_format !== "none"}
                                        <p>
                                            <label>
                                                Custom&nbsp;Error&nbsp;Text
                                                <input
                                                    type="text"
                                                    bind:value={question.text_format_error}
                                                />
                                            </label>
                                        </p>
                                    {/if}
                                {/if}
                                {#if question.type === "number"}
                                    <p>
                                        <label>
                                            <input type="checkbox" bind:checked={question.float} />
                                            Allow Non-Integer Input
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Custom&nbsp;Error&nbsp;Text
                                            <input
                                                type="text"
                                                bind:value={question.integer_error}
                                            />
                                        </label>
                                    </p>
                                {/if}
                                {#if question.type === "mcq"}
                                    <p><b>Options</b></p>
                                    <table>
                                        {#each question.options as option, oi}
                                            <tr>
                                                <td>Option {oi + 1}</td>
                                                <td><input type="text" bind:value={option} /></td>
                                                <ListButtons
                                                    bind:array={question.options}
                                                    index={oi}
                                                    table
                                                />
                                            </tr>
                                        {/each}
                                    </table>
                                    <p>
                                        <button
                                            on:click={() =>
                                                (question.options = [...question.options, ""])}
                                        >
                                            Add Option
                                        </button>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                bind:checked={question.dropdown}
                                            />
                                            Show As Dropdown (only works if min and max choices are both
                                            1)
                                        </label>
                                    </p>
                                {/if}
                                {#if question.type === "date"}
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                bind:checked={question.show_date}
                                            />
                                            Show Date
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                bind:checked={question.show_time}
                                            />
                                            Show Time
                                        </label>
                                    </p>
                                    {#if question.show_date}
                                        <p>
                                            <select bind:value={question.relative_time}>
                                                <option value="all">Allow any time</option>
                                                <option value="past"
                                                    >Require time to be in past</option
                                                >
                                                <option value="future"
                                                    >Require time to be in future</option
                                                >
                                            </select>
                                        </p>
                                        <p>
                                            <label>
                                                Custom&nbsp;Error&nbsp;Text
                                                <input
                                                    type="text"
                                                    bind:value={question.time_error}
                                                />
                                            </label>
                                        </p>
                                    {/if}
                                {/if}
                                <table>
                                    {#if (question.type === "short" && question.short_format === "none") || ["long", "number", "mcq"].includes(question.type)}
                                        <tr>
                                            <td>
                                                <input
                                                    type="number"
                                                    bind:value={question.min}
                                                    min={0}
                                                    max={question.max ?? Infinity}
                                                />
                                            </td>
                                            <td>
                                                &le; {question.type === "number"
                                                    ? "Value"
                                                    : question.type === "mcq"
                                                    ? "Choices"
                                                    : "Length"} &le;
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    bind:value={question.max}
                                                    min={question.min ?? 0}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    bind:value={question.low_error}
                                                    placeholder="Custom Error Text"
                                                />
                                            </td>
                                            <td />
                                            <td>
                                                <input
                                                    type="text"
                                                    bind:value={question.high_error}
                                                    placeholder="Custom Error Text"
                                                />
                                            </td>
                                        </tr>
                                    {/if}
                                </table>
                                {#if data.form.post_to_webhook}
                                    <hr />
                                    <label>
                                        <input type="checkbox" bind:checked={question.hide} />
                                        Don't send this answer to the webhook
                                    </label>
                                {/if}
                            </div>
                        {/each}
                        <div class="panel">
                            <button
                                on:click={() =>
                                    (page.questions = [
                                        ...page.questions,
                                        {
                                            id: data.form.next_id++,
                                            question: "",
                                            description: "",
                                            type: "short",
                                            required: false,
                                            options: [],
                                        },
                                    ])}
                            >
                                Add Question
                            </button>
                        </div>
                    </div>
                {/each}
                <div class="panel" style="background-color: var(--background-3)">
                    <button
                        on:click={() =>
                            (data.form.pages = [
                                ...data.form.pages,
                                {
                                    name: "",
                                    description: "",
                                    condition: { options: {} },
                                    questions: [],
                                },
                            ])}
                    >
                        Add Page
                    </button>
                </div>
            </div>
            {#if data.id === "new" || data.form.author === data.user.id}
                <div class="panel">
                    <h3>Actions</h3>
                    <p>Control form actions here. Only you can view and edit this section.</p>
                    <p>
                        <label>
                            <input type="checkbox" bind:checked={data.form.post_to_webhook} />
                            Post Submission to Webhook
                        </label>
                    </p>
                    {#if data.form.post_to_webhook}
                        <p>
                            <label>
                                <input type="checkbox" bind:checked={data.form.only_post_link} />
                                Only Post Link (don't include any answers)
                            </label>
                        </p>
                        <p>
                            <label>
                                Webhook&nbsp;URL
                                {#if webhook_input_show}
                                    <input type="text" bind:value={data.form.webhook} />
                                {:else}
                                    <input type="password" bind:value={data.form.webhook} />
                                {/if}
                                <a
                                    href={"javascript:void(0)"}
                                    class="row"
                                    on:click={() => (webhook_input_show = !webhook_input_show)}
                                >
                                    <i class="material-icons">
                                        visibility{#if webhook_input_show}_off{/if}
                                    </i>
                                </a>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" bind:checked={data.form.is_forum} />
                                This Webhook is in a Forum Channel
                            </label>
                        </p>
                        {#if data.form.is_forum}
                            <p>
                                <label>
                                    Forum Post Naming Scheme
                                    <select bind:value={data.form.naming_scheme}>
                                        <option value={-1}>Static Name</option>
                                        {#if data.form.collect_names}
                                            <option value={0}>Use Submitter Name</option>
                                        {/if}
                                        {#each data.form.pages as page}
                                            {#each page.questions as question}
                                                <option value={question.id}>
                                                    Use Answer For: {question.question}
                                                </option>
                                            {/each}
                                        {/each}
                                    </select>
                                </label>
                            </p>
                            {#if data.form.naming_scheme === -1}
                                <p>
                                    <label>
                                        New&nbsp;Forum&nbsp;Post&nbsp;Name
                                        <input
                                            type="text"
                                            bind:value={data.form.forum_post_name}
                                            maxlength={80}
                                        />
                                    </label>
                                </p>
                            {/if}
                        {/if}
                    {/if}
                </div>
                <div class="panel">
                    <h3>Access</h3>
                    <p>
                        Control access here. Only you can edit permissions. Only editors can view
                        submissions. Only you and observers can delete this form. Observers will
                        always have view access but cannot submit unless explicitly allowed.
                    </p>
                    <label>
                        <input type="checkbox" bind:checked={data.form.allow_observers} />
                        Allow Observers
                    </label>
                    <label>
                        <input type="checkbox" bind:checked={data.form.allow_council} />
                        Allow TCN Council
                    </label>
                    <label>
                        <input type="checkbox" bind:checked={data.form.allow_logged_in} />
                        Allow Logged In Users
                    </label>
                    <label>
                        <input type="checkbox" bind:checked={data.form.editable_observers} />
                        Allow Observers to Edit
                    </label>
                    <label>
                        <input type="checkbox" bind:checked={data.form.editable_council} />
                        Allow TCN Council to Edit
                    </label>
                    <label>
                        <input type="checkbox" bind:checked={data.form.allow_everyone} />
                        Make Public
                    </label>
                    <h5>Allowlist</h5>
                    <p>
                        Input a space or comma separated list of user IDs to grant view and submit
                        access.
                    </p>
                    <input type="text" bind:value={data.form.allowlist} />
                </div>
            {/if}
            <div class="panel">
                <h3>Appearance</h3>
                <h5>Embed Data</h5>
                <p>
                    This controls the embed that appears when you paste your form link into Discord.
                </p>
                <p><b>Embed Title</b></p>
                <input
                    type="text"
                    bind:value={data.form.embed_title}
                    placeholder={data.form.allow_everyone ? data.form.name : "TCN Form"}
                />
                <p><b>Embed Body</b></p>
                <input
                    type="text"
                    bind:value={data.form.embed_body}
                    placeholder={data.form.allow_everyone ? "" : "Sign in to view this form."}
                />
                <p><b>Embed Color</b></p>
                <input
                    type="text"
                    bind:value={data.form.embed_color}
                    pattern="^[0-9A-Fa-f]{'{6}'}$"
                    placeholder="2b2d31"
                />
                <p><b>Embed Image</b></p>
                <input type="text" bind:value={data.form.embed_image} />
                <br /><br />
                <label>
                    <input type="checkbox" bind:checked={data.form.thumbnail} />
                    Show image as thumbnail instead of large image
                </label>
            </div>
            <div class="panel row" style="gap: 1em">
                <button on:click={save}>Save (Ctrl+S)</button>
                {#if data.id !== "new" && data.form.author === data.user.id}
                    <button on:click={del} style="background-color: var(--red-button)">
                        Delete
                    </button>
                    <a href="/form/{data.id}">View</a>
                {/if}
            </div>
            <a href="/forms">Forms Home</a>
        {/if}
    </div>
</div>

<style lang="scss">
    td {
        padding: 2px 5px;
    }
</style>
