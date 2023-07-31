<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import FormAnswer from "$lib/FormAnswer.svelte";
    import Redirect from "$lib/Redirect.svelte";

    export let data: any;

    const questions: any[] = data.form.pages.flatMap((page: any) => page.questions);

    let mode: string = "summary";
    let si: number = 1;

    function has_user(x: any) {
        return !!x.user;
    }

    function find(question: any, submission: any) {
        return submission.answers.find((answer: any) => answer.id === question.id);
    }
</script>

<div class="container">
    <div id="main">
        {#if !data.user}
            <Redirect
                to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/forms`)}"
            />
        {:else if data.missing}
            <Callout style="red">
                <p>There is no form with ID <code>{data.id}</code>, or it has been deleted.</p>
            </Callout>
            <br />
            <a href="/forms" class="button">Forms Home</a>
        {:else if data.unauthorized}
            <Callout style="red">
                <p>You are not authorized to access this form's submissions.</p>
            </Callout>
            <br />
            <a href="/forms" class="button">Forms Home</a>
        {:else}
            {#if data.form.deleted}
                <Callout style="red">
                    <p>
                        This form has been deleted. You are able to see it only because you are an
                        observer.
                    </p>
                </Callout>
                <br />
            {/if}
            <p><b style="color: var(--text-secondary)">Viewing Submissions For:</b></p>
            <h3 class="row" style="gap: 10px">
                {data.form.name}
                <a href="/forms/edit/{data.form.id}"><i class="material-icons">edit</i></a>
                <a href="/form/{data.form.id}" target="_blank" rel="noreferrer">
                    <i class="material-icons">visibility</i>
                </a>
            </h3>
            <p class="row" style="gap: 10px">
                {#each ["summary", "individual"] as m}
                    <button
                        on:click={() => (mode = m)}
                        style={mode === m
                            ? "background-color: var(--accent)"
                            : "background-color: var(--background-2)"}
                        disabled={mode === m}
                    >
                        {m}
                    </button>
                {/each}
            </p>
            <div style={mode === "summary" ? "" : "display: none"}>
                {#if data.submissions.some(has_user)}
                    <div class="panel" style="border-left: 5px solid var(--accent)">
                        <h4>Users</h4>
                        <div class="scroll">
                            {#each data.submissions as submission, index}
                                {#if submission.user}
                                    <div class="answer-box row">
                                        <span style="flex-grow: 1">
                                            <span class="mention user" data-id={submission.user}>
                                                <i class="material-icons">pending</i> &nbsp; Loading
                                                User...
                                            </span>
                                        </span>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (
                                                (si = index + 1), (mode = "individual")
                                            )}
                                        >
                                            <i class="material-icons">chevron_right</i>
                                        </a>
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/if}
                {#each questions as question}
                    <div class="panel">
                        <h4>{question.question}</h4>
                        <div class="scroll">
                            {#each data.submissions as submission, index}
                                <pre>{JSON.stringify({ question, submission }, undefined, 4)}</pre>
                                {@const answer = find(question, submission)}

                                {#if answer && "answer" in answer}
                                    <div class="answer-box row">
                                        <span style="flex-grow: 1">
                                            <FormAnswer {answer} />
                                        </span>
                                        <a
                                            href={"javascript:void(0)"}
                                            class="row"
                                            on:click={() => (
                                                (si = index + 1), (mode = "individual")
                                            )}
                                        >
                                            <i class="material-icons">chevron_right</i>
                                        </a>
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            <div style={mode === "individual" ? "" : "display: none"}>
                <div class="inline-row">
                    <a
                        href={"javascript:void(0)"}
                        class="row"
                        on:click={() => (si = Math.max(si - 1, 1))}
                        style={si === 1 ? "color: transparent; cursor: default" : ""}
                    >
                        <i class="material-icons">chevron_left</i>
                    </a>
                    <input type="number" bind:value={si} min={1} max={data.submissions.length} />
                    <a
                        href={"javascript:void(0)"}
                        class="row"
                        on:click={() => (si = Math.min(si + 1, data.submissions.length))}
                        style={si === data.submissions.length
                            ? "color: transparent; cursor: default"
                            : ""}
                    >
                        <i class="material-icons">chevron_right</i>
                    </a>
                </div>

                <p />

                {#each data.submissions as submission, index}
                    <div style={si - 1 === index ? "" : "display: none"}>
                        {#if submission.user}
                            <div class="panel">
                                <h4>User</h4>
                                <span class="mention user" data-id={submission.user}>
                                    <i class="material-icons">pending</i> &nbsp; Loading User...
                                </span>
                            </div>
                        {/if}
                        {#each submission.answers as answer}
                            {@const real = questions.find((q) => q.id === answer.id)?.question}
                            {@const del = data.form.deleted_questions?.[answer.id]}

                            <div class="panel">
                                <h4>{answer.question}</h4>
                                {#if real && real !== answer.question}
                                    <p>
                                        <b style="color: var(--blue-text)">Edited:</b> This question
                                        is now: {real}
                                    </p>
                                {/if}
                                {#if del}
                                    <p>
                                        <b style="color: var(--red-text)">Deleted:</b> This question
                                        is now deleted.
                                        {#if del !== answer.question}
                                            <br />
                                            <b style="color: var(--blue-text)">Edited:</b> Before
                                            deletion, the last version of this question was: {del}
                                        {/if}
                                    </p>
                                {/if}
                                {#if "answer" in answer}
                                    <FormAnswer {answer} />
                                {:else}
                                    <p style="color: var(--text-secondary)">No answer provided.</p>
                                {/if}
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    .scroll {
        max-height: 500px;
        overflow-y: scroll;
    }

    .answer-box {
        background-color: var(--background-3);
        padding: 5px 10px;
        margin: 5px;
        border-radius: 5px;
    }

    :global {
        .answer-box span.mention {
            top: 0px;
        }
    }
</style>
