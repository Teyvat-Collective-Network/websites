<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import { onMount } from "svelte";
    import { escape } from "svelte/internal";
    import { LoadingSpinner, Modal, Textarea } from "@daedalus-discord/webkit";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";
    import LoggedInAs from "$lib/LoggedInAs.svelte";
    import { TCN } from "../../../lib/api";
    import type { BanshareFormData, LocalsData } from "$lib/types";

    export let data: LocalsData;
    export let form: BanshareFormData;

    let servers: [string, string][] | undefined;

    onMount(async () => {
        if (!data.user) return;

        const user_data = await TCN.user(data.user.id);
        const guilds_data = await TCN.guilds();

        const map = new Map<string, string>();
        for (const guild of guilds_data) map.set(guild.id, guild.name);

        const output: [string, string][] = [];

        for (const guild of user_data?.guilds ?? [])
            if (map.has(guild)) output.push([guild, map.get(guild) as string]);

        servers = output;
    });

    let ids: string = form?.ids ?? "";

    let y: number = 0;
    let open: boolean = false;
    let error: string | undefined;
    let tag_list: string[] | undefined;

    let session: string = crypto.randomUUID();

    let last: string = "";

    function check_ids() {
        const list = ids.trim().split(/\s+/);
        const cmp = JSON.stringify(list);

        if (cmp === last) return (open = true);
        last = cmp;

        tag_list = error = undefined;
        open = true;

        for (const id of list)
            if (!id.match(/^[1-9][0-9]{16,19}$/))
                return (error = `Invalid ID: <code>${escape(
                    id,
                )}</code> is not a valid Discord ID.`);

        fetch(`/fetch?session=${session}`, {
            method: "post",
            body: JSON.stringify(list),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) error = data.error;
                else tag_list = data;
            });
    }

    function close_modal() {
        if (!error && !tag_list) fetch(`/abort?session=${session}`);
    }
</script>

<svelte:window
    bind:scrollY={y}
    on:keydown={(e) =>
        e.key === "Enter" && e.ctrlKey && document.querySelector("form")?.requestSubmit()}
/>

{#if !data.user}
    <Redirect to="{PUBLIC_TCN_AUTH}?redirect={encodeURIComponent(`${PUBLIC_DOMAIN}/banshare`)}" />
{:else}
    <div class="container">
        <div id="main">
            <h2>Banshare Form</h2>
            <LoggedInAs user={data.user} redirect="{PUBLIC_DOMAIN}/banshare" />
            {#if !servers?.length}
                <Callout style="red">
                    <p>
                        You are not staff on any TCN servers. If you believe this is a mistake,
                        contact your server's owner or a TCN observer.
                    </p>
                </Callout>
            {:else}
                {#if form?.error}
                    <Callout style="red">
                        <p>{@html form.error}</p>
                    </Callout>
                    <br />
                {:else if form?.success}
                    <Callout style="green">
                        <p>Your banshare has been submitted.</p>
                    </Callout>
                    <br />
                {/if}
                <form method="post">
                    <div class="panel">
                        <h4>ID(s) of the offender(s)</h4>
                        <input
                            type="text"
                            name="ids"
                            placeholder="Space-separated list of IDs"
                            on:keydown={(e) => e.key === "Enter" && e.preventDefault()}
                            required
                            autocomplete="off"
                            bind:value={ids}
                        />
                        {#if ids.trim() !== ""}
                            <div>
                                <br />
                                <a class="button" href={"javascript:void(0)"} on:click={check_ids}>
                                    Check IDs
                                </a> (shows the users' tags if all IDs are valid)
                            </div>
                        {/if}
                        <h4>Reason</h4>
                        <p>
                            If you need more than 498 characters, you should probably be putting it
                            into the evidence field instead.
                        </p>
                        <Textarea
                            name="reason"
                            placeholder="Tip: make the reason something suitable for an audit log reason for the ban. Include context in the next field."
                            maxlength="498"
                            required
                            autocomplete="off"
                            value={form?.reason}
                        />
                        <h4>Evidence</h4>
                        <p>
                            For images, use Imgur or a similar service. Discord hosted image links
                            work too, but keep in mind that deleting the message containing the
                            image will eventually cause the image link to break.
                        </p>
                        <p>
                            If you need more than 1000 characters, please create a document and link
                            it here. Include some basic information in the evidence so people can
                            see roughly what your document contains.
                        </p>
                        <p>
                            Please spoiler anything suggestive and break up any image links to
                            explicit / triggering content so people can't accidentally access them.
                        </p>
                        <Textarea
                            name="evidence"
                            placeholder="Provide sufficient evidence to verify your reason and for other mods to make an informed decision."
                            required
                            maxlength="1200"
                            autocomplete="off"
                            value={form?.evidence}
                        />
                    </div>
                    <div class="panel">
                        <h4>Server</h4>
                        <p>Identify which server you are bansharing this from.</p>
                        {#if !servers}
                            <LoadingSpinner
                                size={25}
                                foreground="var(--text-primary)"
                                background="rgb(var(--pure), 50%)"
                                text="Loading Servers"
                            />
                        {:else}
                            <select name="server" required>
                                <option selected={servers.length > 1} disabled hidden value=""
                                    >Select Server</option
                                >
                                {#each servers as [id, name]}
                                    <option value={id} selected={form?.server === id}>{name}</option
                                    >
                                {/each}
                            </select>
                        {/if}
                    </div>
                    <div class="panel">
                        <h4>Severity</h4>
                        <p>
                            The severity is used to determine auto-banning. A lower number indicates
                            a greater threat. Read the <a href="/info/banshares#severity"
                                >info page</a
                            > for more information.
                        </p>
                        <select name="severity" required>
                            <option selected disabled hidden value="">Select Severity</option>
                            {#each ["P0", "P1", "P2", "DM SCAM"] as sev}
                                <option
                                    value={sev.toLowerCase().replace("dm scam", "dm")}
                                    selected={form?.severity === sev.toLowerCase()}>{sev}</option
                                >
                            {/each}
                        </select>
                    </div>
                    <div class="panel">
                        <h4>Urgency</h4>
                        <p>
                            Check the box below to instruct the bot to ping all observers instead of
                            just a few to review this.
                        </p>
                        <label>
                            <input type="checkbox" name="urgent" checked={form?.urgent} />
                            <b>This banshare is urgent.</b>
                        </label>
                    </div>
                    <div class="panel">
                        <input
                            type="submit"
                            name="submit"
                            value="Submit"
                            style="font-weight: 600"
                        />
                        <input type="submit" name="submit" value="Submit Without Validation" />
                        <input type="submit" name="submit" value="Submit Without Checking IDs" />
                        <br />
                        <p>
                            <b>WARNING:</b> You should only submit without checking IDs if your ID list
                            is a link instead of an actual list of IDs. Doing this will also prevent
                            automatic banning. Consider just pasting your entire ID list instead if possible
                            - the bot will collapse it into a document link if it's too long.
                        </p>
                        <p>
                            <b>This may take some time</b> if you have submitted a long ID list, as the
                            bot needs time to fetch all of the users.
                        </p>
                        <p>
                            If the list is very long and you want to get the banshare published
                            ASAP, use "Submit Without Validation", which will check if the IDs look
                            correct but won't fetch all of the users.
                        </p>
                    </div>
                </form>
            {/if}
        </div>
    </div>
{/if}
<Modal
    bind:open
    background_color="var(--background-1)"
    overlay_color="rgb(var(--pure-rgb), 80%)"
    on:click={close_modal}
>
    {#if error}
        <Callout style="red">
            <p>{@html error}</p>
        </Callout>
    {:else if tag_list}
        <b>You will be bansharing:</b>
        <ul>
            {#each tag_list as [tag, id]}
                <li>{tag} &mdash; <code>{id}</code></li>
            {/each}
        </ul>
    {:else}
        <div class="row">
            <LoadingSpinner size={50} text="" />
            <b>Loading users...</b>
        </div>
    {/if}
</Modal>

<style lang="scss">
    input[type="submit"] {
        margin-right: 0.5em;
    }
</style>
