<script lang="ts">
    import { goto } from "$app/navigation";
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import ListButtons from "$lib/ListButtons.svelte";
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;

    data.form ??= {
        allow_council: false,
        allow_logged_in: false,
        allow_everyone: false,
        allowlist: "",
        name: "",
        collect_names: false,
        pages: [],
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
            <Callout style="red">
                <p>There is no form with ID <code>{data.id}</code>, or it has been deleted.</p>
            </Callout>
            <br />
            <a href="/forms" class="button">Forms Home</a>
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
                    maxlength={100}
                    placeholder="Max Length: 100"
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
                        <input type="text" bind:value={page.name} placeholder="Max Length: 100" />
                        <h5>Description</h5>
                        <input
                            type="text"
                            bind:value={page.description}
                            placeholder="Max Length: 2048"
                        />
                        <br /><br />
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
                                />
                                <p><b>Description</b></p>
                                <input
                                    type="text"
                                    bind:value={question.description}
                                    placeholder="Max Length: 1024"
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
                                <hr />
                                <label>
                                    <input type="checkbox" bind:checked={question.hide} />
                                    Don't send this answer to the webhook
                                </label>
                            </div>
                        {/each}
                        <div class="panel">
                            <button
                                on:click={() =>
                                    (page.questions = [
                                        ...page.questions,
                                        {
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
                                { name: "", description: "", condition: {}, questions: [] },
                            ])}
                    >
                        Add Page
                    </button>
                </div>
            </div>
            {#if data.id === "new" || data.form.author === data.user.id}
                <div class="panel">
                    <h3>Access</h3>
                    <p>
                        Control view access here. Only you can edit/delete this form. Observers will
                        always have view access.
                    </p>
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
                        Input a space, comma, or newline separated list of user IDs to grant view
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
