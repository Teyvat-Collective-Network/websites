<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import { onMount } from "svelte";

    export let data: any;

    const offset = new Date().getTimezoneOffset();

    onMount(() => {
        document.addEventListener("click", (e) => {
            const target = e.target as any;

            if (!target.classList.contains("mention")) return;
            if (!target.dataset.id) return;

            navigator.clipboard.writeText(target.dataset.id);
            target.style.backgroundColor = "var(--green-callout)";
            setTimeout(() => (target.style.backgroundColor = ""), 1000);
        });

        for (const element of document.querySelectorAll("span.time") as any) {
            const timestamp = parseInt(element.dataset.timestamp);
            element.innerHTML = new Date(timestamp * 1000 - offset * 60000)
                .toISOString()
                .replace("T", "&nbsp;&nbsp;")
                .slice(0, -5);
        }
    });
</script>

<div class="container">
    <div id="main">
        {#if data.missing}
            <Callout style="red">
                <p>There is no document with ID <code>{data.id}</code>, or it has been deleted.</p>
            </Callout>
        {:else if data.unauthorized}
            <Callout style="red">
                <p>You are not authorized to view this document.</p>
            </Callout>
        {:else}
            <h3>
                {data.doc.name}
                {#if data.doc.author.id === data.user?.id}&nbsp;<a href="/docs/edit/{data.doc.id}"
                        ><i class="material-icons">edit</i></a
                    >{/if}
            </h3>
            {#if data.doc.author}
                <p>
                    Written by
                    <span class="mention" data-id={data.doc.author.id}>
                        {#if data.doc.author.missing}
                            <div class="material-icons">pin</div>
                            &nbsp;
                            {data.doc.author.id}
                        {:else}
                            <i class="material-icons">alternate_email</i>
                            <b>{data.doc.author.username}</b
                            >{#if data.doc.author.discriminator !== "0"}#{data.doc.author
                                    .discriminator}{/if}
                        {/if}
                    </span>{#if data.doc.anon} <b>(anonymously)</b>{/if}.
                </p>
            {:else}
                <p>Anonymously Written</p>
            {/if}
            <p>
                Click on any user mention to copy the ID. <span class="mention">
                    <i class="material-icons">pin</i> &nbsp; ###
                </span>
                indicates an invalid user ID. Role mentions (<span class="mention"
                    ><i class="material-icons">group</i> &nbsp; role name</span
                >) may also be clickable to copy an ID. Channel mentions may be clickable to open
                them in your Discord client (they will appear as links). Click on times (not dates)
                to copy the timestamp.
            </p>
            <p>
                Times are being displayed in your detected timezone,
                <b>{Intl.DateTimeFormat().resolvedOptions().timeZone}</b> (UTC{offset === 0
                    ? ""
                    : `${offset > 0 ? "-" : "+"}${Math.floor(Math.abs(offset) / 60)}:${(
                          Math.abs(offset) % 60
                      )
                          .toString()
                          .padStart(2, "0")}`}).
            </p>
            <hr />
            <div>
                {@html data.doc.parsed}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    :global {
        span.mention {
            position: relative;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            margin: 2px;
            top: 5px;

            background-color: var(--blue-callout);
            cursor: default;
            padding: 0px 5px;
            border-radius: 5px;
            font-size: 90%;

            &:hover::after {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 5px;
                background-color: rgb(var(--invert-rgb));
                opacity: 0.1;
            }
        }

        a span.mention {
            cursor: inherit;
        }
    }
</style>
