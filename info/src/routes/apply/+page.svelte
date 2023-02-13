<script lang="ts">
    import { PUBLIC_DOMAIN, PUBLIC_TCN_AUTH } from "$env/static/public";
    import { Textarea } from "@daedalus-discord/webkit";
    import { onMount } from "svelte";
    import Callout from "../../lib/Callout.svelte";
    import Invite from "../../lib/Invite.svelte";
    import { debounce } from "../../lib/util.js";

    export let data: any;
    export let form: any;

    form = {
        ...form,
        mascot: "Shenhe",
        role: "other",
        roleother: "test position",
        ownerid: "251082987360223233",
        invite: "https://discord.gg/TZ9tpJMU5F",
        nsfw: "no",
        experience: "experience",
        shortgoals: "short-term goals",
        longgoals: "long-term goals",
        additional: "additional",
        observerchannelconsent: true,
        observerauditconsent: true,
        partnerlistconsent: true,
        eventsconsent: true,
    };

    let role: string;
    let invite: string = form?.invite ?? "";
    let invite_data: any;

    const suppress = (e: any) => e.key === "Enter" && e.preventDefault();

    async function check_invite() {
        invite = invite.trim();

        if (
            !invite?.match(
                /^(https:\/\/)?discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/[\w-]{2,255}$/i,
            )
        )
            return (invite_data = undefined);

        const request = await fetch(
            `/fetch-invite?code=${encodeURIComponent(invite.slice(invite.lastIndexOf("/") + 1))}`,
        );

        if (!request.ok) return (invite_data = null);
        invite_data = await request.json();
    }

    onMount(() => check_invite());
</script>

<div class="container">
    <form
        id="main"
        method="post"
        on:submit={(e) => {
            if (
                !invite_data ||
                invite_data.guild.vanityURLCode === invite_data.code ||
                invite_data.expires
            ) {
                document.querySelector("[name=invite]")?.scrollIntoView();
                e.preventDefault();
            }
        }}
    >
        <h2>TCN Application Form</h2>
        {#if !data.user}
            <div class="panel">Please <a href={PUBLIC_TCN_AUTH}>log in</a> to apply.</div>
        {:else}
            {#if form?.error}
                <Callout style="red">
                    <p>{@html form.error}</p>
                </Callout>
                <br />
            {:else if form?.success}
                <Callout style="green">
                    <p>Your application has been submitted! We appreciate your patience.</p>
                </Callout>
                <br />
            {/if}
            <Callout style="info">
                <p>
                    If you haven't already, read our <a href="/join">info page</a> on what the
                    process for joining the TCN is and what to expect. If you have any questions,
                    comments, or concerns, please reach out to us. See our
                    <a href="/contact">contact information</a> page.
                </p>
                <p>
                    Please make sure your DMs are open so that we can reach out to you to respond to
                    your application.
                </p>
            </Callout>
            <br />
            <div class="panel highlight">
                <p>
                    Logged in as <b>{data.user.username}</b><span
                        style="color: var(--text-secondary)">#{data.user.discriminator}</span
                    >. Your user ID will be submitted with this form. Not you?
                    <a
                        href="{PUBLIC_TCN_AUTH}/logout?redirect={encodeURIComponent(
                            `${PUBLIC_DOMAIN}/apply`,
                        )}">Log Out</a
                    >
                </p>
            </div>
            <div class="panel">
                <h5>Which Genshin Impact character is your server based on?</h5>
                <input
                    type="text"
                    name="mascot"
                    placeholder="Character name..."
                    style="width: 50%"
                    on:keydown={suppress}
                    required
                    autocomplete="off"
                    value={form?.mascot ?? ""}
                />
                <h5>What is your role in the server?</h5>
                <select name="role" bind:value={role}>
                    <option value="owner" selected={form?.role === "owner"}>Server Owner</option>
                    <option value="admin" selected={form?.role === "admin"}>Administrator</option>
                    <option value="mod" selected={form?.role === "mod"}>Moderator</option>
                    <option value="other" selected={form?.role === "other"}>Other...</option>
                </select>
                {#if role === "other"}
                    <br /><br />
                    <input
                        type="text"
                        name="roleother"
                        placeholder="Make sure you're approved to apply."
                        style="width: 50%"
                        on:keydown={suppress}
                        required
                        autocomplete="off"
                        value={form?.roleother ?? ""}
                    />
                {/if}
                {#if role !== "owner"}
                    <h5>Server Owner's ID</h5>
                    <input
                        type="text"
                        name="ownerid"
                        placeholder="17-20 digit number"
                        pattern="^[0-9]{'{17,20}'}$"
                        style="width: 50%"
                        on:keydown={suppress}
                        required
                        autocomplete="off"
                        value={form?.ownerid ?? ""}
                    />
                {/if}
                <h5>Enter an invite link to your server.</h5>
                <h6>Please enter a permanent, non-vanity link.</h6>
                <input
                    type="text"
                    name="invite"
                    placeholder="https://discord.gg/..."
                    style="width: 50%"
                    on:keydown={suppress}
                    on:input={debounce(check_invite)}
                    required
                    autocomplete="off"
                    bind:value={invite}
                />
                <br />
                {#if invite_data}
                    {#if invite_data.guild.vanityURLCode === invite_data.code}
                        <br />
                        <Callout style="red">
                            <p>Vanity URLs are not allowed!</p>
                        </Callout>
                    {/if}
                    {#if invite_data.expires}
                        <br />
                        <Callout style="red">
                            <p>
                                This invite expires on {new Date(
                                    invite_data.expires,
                                ).toLocaleString()}! Please provide a permanent invite.
                            </p>
                        </Callout>
                    {/if}
                    {#if invite_data.stageInstance || invite_data.targetApplication || invite_data.targetUser}
                        <br />
                        <Callout style="red">
                            <p>
                                Please provide an invite that does not point to a stage instance,
                                application, or user stream.
                            </p>
                        </Callout>
                    {/if}
                    {#if invite_data.memberCount < 300}
                        <br />
                        <Callout style="warn">
                            <p>
                                We <b>recommend</b> that your server has 300 members before you apply.
                                This is not a strict requirement, but a suggested threshold so that we
                                can be confident your community is developed and stable enough for long-term
                                success.
                            </p>
                        </Callout>
                    {/if}
                    <br />
                    <Invite
                        banner={invite_data.guild.splash
                            ? `https://cdn.discordapp.com/splashes/${invite_data.guild.id}/${invite_data.guild.splash}?size=1024`
                            : null}
                        icon={`https://cdn.discordapp.com/icons/${invite_data.guild.id}/${invite_data.guild.icon}?size=256`}
                        title={invite_data.guild.name}
                        code={invite_data.code}
                    />
                {:else}
                    <p>Invalid invite!</p>
                {/if}
                <h5>Does your server contain an NSFW section?</h5>
                <label>
                    <input
                        type="radio"
                        name="nsfw"
                        value="private"
                        required
                        checked={form?.nsfw === "private"}
                    />
                    Yes, hidden from regular users
                </label>
                <label>
                    <input
                        type="radio"
                        name="nsfw"
                        value="public"
                        required
                        checked={form?.nsfw === "public"}
                    />
                    Yes, visible to regular users
                </label>
                <label>
                    <input
                        type="radio"
                        name="nsfw"
                        value="no"
                        required
                        checked={form?.nsfw === "no"}
                    />
                    No
                </label>
            </div>
            <div class="panel">
                <h5>
                    Do you have prior experience running a Discord server or similar communities in
                    a position of management or moderation (e.g. forums, guilds, clans, etc)?
                </h5>
                <h6>
                    You do not have to have been the owner of the server / forum / etc.; any
                    position of management or moderation is of interest.
                </h6>
                <Textarea
                    name="experience"
                    value={form?.experience}
                    placeholder="Up to 1024 characters"
                    maxlength={1024}
                />
                <h5>What are some of your short term goals or ideas for the server?</h5>
                <Textarea
                    name="shortgoals"
                    required
                    value={form?.shortgoals}
                    placeholder="Up to 1024 characters"
                    maxlength={1024}
                />
                <h5>What are some of your long term goals or ideas for the server?</h5>
                <Textarea
                    name="longgoals"
                    required
                    value={form?.longgoals}
                    placeholder="Up to 1024 characters"
                    maxlength={1024}
                />
            </div>
            <div class="panel">
                <h5>You must consent to all of the following to apply.</h5>
                <label>
                    <input
                        type="checkbox"
                        name="observerchannelconsent"
                        required
                        checked={form?.observerchannelconsent}
                    />
                    I agree to give the observer view access to <b>all channels</b> for 28 days.
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="observerauditconsent"
                        required
                        checked={form?.observerauditconsent}
                    />
                    I agree to give the observer access to the audit logs for 28 days.
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="partnerlistconsent"
                        required
                        checked={form?.partnerlistconsent}
                    />
                    I agree to display the TCN partner list publicly and keep it up-to-date
                    <a href="/info/partner-list" target="_blank">[learn more]</a>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="eventsconsent"
                        required
                        checked={form?.eventsconsent}
                    />
                    I agree to follow the network events channel publicly to cross-promote TCN server
                    events and post crucial TCN announcements.
                </label>
            </div>
            <div class="panel">
                <h5>Any additional questions or comments you'd like to include?</h5>
                <Textarea
                    name="additional"
                    value={form?.additional}
                    placeholder="Up to 1024 characters. If you have more questions, please reach out to an observer."
                    maxlength={1024}
                />
            </div>
            <Callout style="info">
                <p>
                    Make sure you check our <a href="/contact" target="_blank">list of observers</a>
                    before giving permissions to whoever contacts you!
                </p>
            </Callout>
            <br />
            <div>
                <input type="submit" value="Submit!" style="font-size: 100%" />
            </div>
        {/if}
    </form>
</div>

<style lang="scss">
    h5,
    h6 {
        line-height: 150%;
    }

    h6 {
        color: var(--text-secondary);
    }
</style>
