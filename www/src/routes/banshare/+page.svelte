<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_API, PUBLIC_TCN_AUTH } from "$env/static/public";
    import { onMount } from "svelte";
    import { escape } from "svelte/internal";
    import { LoadingSpinner, Modal, Textarea } from "@daedalus-discord/webkit";
    import Callout from "$lib/Callout.svelte";
    import Redirect from "$lib/Redirect.svelte";
    import LoggedInAs from "$lib/LoggedInAs.svelte";

    export let data: any;
    export let form: any;

    let servers: [string, string][] | undefined;

    onMount(async () => {
        if (!data.user) return;

        const [user_data, guilds_data] = await Promise.all(
            [`${PUBLIC_TCN_API}/users/${data.user.id}`, `${PUBLIC_TCN_API}/guilds`].map(
                async (url) => {
                    const response = await fetch(url);
                    if (!response.ok) return {};
                    return await response.json();
                },
            ),
        );

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

<template lang="pug">
    +if("!data.user")
        Redirect
        +else
            .container
                #main
                    h2 Banshare Form
                    LoggedInAs(user!="{data.user}", redirect!="{PUBLIC_DOMAIN}/apply")
                    +if("servers?.length === 0")
                        Callout(style="red")
                            p You are not staff on any TCN servers. If you believe this is a mistake, contact your server's owner or a TCN observer.
                        +else
                            +if("form?.error")
                                Callout(style="red")
                                    p {@html form.error}
                                br
                                +elseif("form?.success")
                                    Callout(style="green")
                                        p Your banshare has been submitted.
                                    br
                            form(method="post")
                                .panel
                                    h4 ID(s) of the offender(s)
                                    input(type="text" name="ids" placeholder="Space-separated list of IDs" on:keydown!="{(e) => e.key === 'Enter' && e.preventDefault()}" required autocomplete="off" bind:value!="{ids}")
                                    +if("ids.trim() !== ''")
                                        div
                                            br
                                            a.button(href!="{'javascript:void(0)'}" on:click!="{check_ids}") Check IDs
                                            |
                                            | (shows the users' tags if all IDs are valid)
                                    h4 Reason
                                    p If you need more than 498 characters, you should probably be putting it into the evidence field instead.
                                    Textarea(name="reason" placeholder="Tip: make the reason something suitable for an audit log reason for the ban. Include context in the next field." maxlength="498" required autocomplete="off" value!="{form?.reason}")
                                    h4 Evidence
                                    p For images, use Imgur or a similar service. Discord hosted image links work too, but keep in mind that deleting the message containing the image will eventually cause the image link to break.
                                    p If you need more than 1000 characters, please create a document and link it here. Include some basic information in the evidence so people can see roughly what your document contains.
                                    p Please spoiler anything suggestive and break up any image links to explicit / triggering content so people can't accidentally access them.
                                    Textarea(name="evidence" placeholder="Provide sufficient evidence to verify your reason and for other mods to make an informed decision." required maxlength="1200" autocomplete="off" value="{form?.evidence}")
                                .panel
                                    h4 Server
                                    p Identify which server you are bansharing this from.
                                    +if("!servers")
                                        LoadingSpinner(size!="{25}" foreground="var(--text-primary)" background="rgb(var(--pure), 50%)" text="Loading Servers")
                                        +else
                                            select(name="server" required)
                                                option(selected!="{servers.length > 1}" disabled hidden value="") Select Server
                                                +each("servers as [id, name]")
                                                    option(value!="{id}" selected!="{form?.server === id}") {name}
                                .panel
                                    h4 Severity
                                    p The severity is used to determine auto-banning. A lower number indicates a greater threat.
                                    ul
                                        li
                                            <b>P0</b> &mdash; e.g. raids, harassment, etc.
                                        li
                                            <b>P1</b> &mdash; e.g. low-threat scam bots
                                        li
                                            <b>P2</b> &mdash; e.g. user causing a bit of trouble
                                    select(name="severity" required)
                                        option(selected disabled hidden value="") Select Severity
                                        +each("['P0', 'P1', 'P2'] as sev")
                                            option(value!="{sev.toLowerCase()}" selected!="{form?.severity === sev.toLowerCase()}") {sev}
                                .panel
                                    h4 Urgency
                                    p Check the box below to instruct the bot to ping all observers instead of just a few to review this.
                                    label
                                        input(type="checkbox" name="urgent" checked!="{form?.urgent}")
                                        b This banshare is urgent.
                                .panel
                                    input(type="submit" name="submit" value="Submit" style="font-weight: 600")
                                    input(type="submit" name="submit" value="Submit Without Validation")
                                    input(type="submit" name="submit" value="Submit Without Checking IDs")
                                    br
                                    p <b>WARNING:</b> You should only submit without checking IDs if your ID list is a link instead of an actual list of IDs. Doing this will also prevent automatic banning. Consider just pasting your entire ID list instead if possible - the bot will collapse it into a document link if it's too long.
                                    p <b>This may take some time</b> if you have submitted a long ID list, as the
                                    bot needs time to fetch all of the users.
                                    p If the list is very long and you want to get the banshare published ASAP, use "Submit Without Validation", which will check if the IDs look correct but won't fetch all of the users.
    
    Modal(bind:open!="{open}", background_color="var(--background-1)", overlay_color="rgb(var(--pure-rgb), 80%)", on:click!="{close_modal}")
        +if("error")
            Callout(style="red")
                p {@html error}
            +elseif("tag_list")
                b You will be bansharing:
                ul
                    +each("tag_list as [tag, id]")
                        li {tag} &mdash; <code>{id}</code>
            +else
                .row
                    LoadingSpinner(size="{50}" text="")
                    b Loading users...
</template>

<style lang="scss">
    input[type="submit"] {
        margin-right: 0.5em;
    }
</style>
