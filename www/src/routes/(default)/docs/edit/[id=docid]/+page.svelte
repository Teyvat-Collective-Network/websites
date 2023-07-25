<script lang="ts">
    import { goto } from "$app/navigation";
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";
    import { Textarea } from "@daedalus-discord/webkit";

    export let data: any;

    data.doc ??= {
        anon: false,
        allow_council: false,
        allow_logged_in: false,
        allow_everyone: false,
        allowlist: "",
        name: "",
        content: "",
    };

    async function save() {
        const request = await fetch(`/docs/save/${data.id}`, {
            method: "post",
            body: JSON.stringify({ doc: data.doc }),
        });

        const { error, id } = await request.json();

        if (error) alert(error);
        else {
            alert("Saved.");
            if (data.id === "new") goto(`/docs/edit/${id}`);
        }
    }

    async function del() {
        if (
            confirm(
                "Are you sure you want to delete this document? It will become inaccessible and appear as though it does not exist to everyone, including yourself, except TCN observers.",
            )
        ) {
            const request = await fetch(`/docs/delete/${data.id}`, { method: "post", body: "" });
            const { error } = await request.json();

            if (error) alert(error);
            else {
                alert("Deleted.");
                goto("/docs");
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
                to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/docs`)}"
            />
        {:else if !data.council}
            <Callout style="red">
                <p>You are not authorized to use the TCN Documents feature.</p>
            </Callout>
            <br />
            <a href="/" class="button">Home</a>
        {:else if data.missing}
            <Callout style="red">
                <p>There is no document with ID <code>{data.id}</code>, or it has been deleted.</p>
            </Callout>
            <br />
            <a href="/docs" class="button">Docs Home</a>
        {:else if data.unauthorized}
            <Callout style="red">
                <p>You can only edit your own documents.</p>
            </Callout>
            <br />
            <a href="/docs" class="button">Docs Home</a>
        {:else}
            <div class="panel">
                <h3>Document</h3>
                <h5>Name</h5>
                <input
                    type="text"
                    bind:value={data.doc.name}
                    required
                    maxlength={100}
                    placeholder="Max Length: 100"
                />
                <h5>Content</h5>
                <Textarea bind:value={data.doc.content} />
            </div>
            <div class="panel">
                <h3>Access</h3>
                <p>
                    Control view access here. Only you can edit/delete this document. Observers will
                    always have view access.
                </p>
                <label>
                    <input type="checkbox" bind:checked={data.doc.allow_council} />
                    Allow TCN Council
                </label>
                <label>
                    <input type="checkbox" bind:checked={data.doc.allow_logged_in} />
                    Allow Logged In Users
                </label>
                <label>
                    <input type="checkbox" bind:checked={data.doc.allow_everyone} />
                    Make Public
                </label>
                <h5>Allowlist</h5>
                <p>
                    Input a space, comma, or newline separated list of user IDs to grant view
                    access.
                </p>
                <input type="text" bind:value={data.doc.allowlist} />
            </div>
            <div class="panel">
                <h3>Appearance</h3>
                <label>
                    <input type="checkbox" bind:checked={data.doc.anon} />
                    Anonymous (Observers will always be able to see your name)
                </label>
                <h5>Embed Data</h5>
                <p>
                    This controls the embed that appears when you paste your document link into
                    Discord.
                </p>
                <p><b>Embed Title</b></p>
                <input
                    type="text"
                    bind:value={data.doc.embed_title}
                    placeholder={data.doc.anon ? "TCN Document" : data.doc.name}
                />
                <p><b>Embed Body</b></p>
                <input
                    type="text"
                    bind:value={data.doc.embed_body}
                    placeholder={data.doc.anon
                        ? "Sign in to view this document."
                        : `Author: ${data.user.username}${
                              data.user.discriminator === "0" ? "" : `#${data.user.discriminator}`
                          }`}
                />
                <p><b>Embed Color</b></p>
                <input
                    type="text"
                    bind:value={data.doc.embed_color}
                    pattern="^[0-9A-Fa-f]{'{6}'}$"
                    placeholder="2b2d31"
                />
                <p><b>Embed Image</b></p>
                <input type="text" bind:value={data.doc.embed_image} />
                <br /><br />
                <label>
                    <input type="checkbox" bind:checked={data.doc.thumbnail} />
                    Show image as thumbnail instead of large image
                </label>
            </div>
            <div class="panel row" style="gap: 1em">
                <button on:click={save}>Save (Ctrl+S)</button>
                {#if data.id !== "new"}
                    <button on:click={del} style="background-color: var(--red-button)">
                        Delete
                    </button>
                    <a href="/doc/{data.id}">View</a>
                {/if}
            </div>
            <a href="/docs">Docs Home</a>
        {/if}
    </div>
</div>
