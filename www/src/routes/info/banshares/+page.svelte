<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Image from "$lib/Image.svelte";
    import ITitle from "$lib/ITitle.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/quickstart#banshares', 'Quickstart'] }")
            #main
                h1 Banshares
                p
                    a(href="#submitting", style="display: flex; align-items: center")
                        i.material-icons(style="padding-right: 0.5em") arrow_downward
                        | Submitting Guide
                Linkable#overview(e="h2", value="Overview")
                p The lifecycle of a banshare is as follows.
                .panel
                    ITitle(e="h3", icon="upload", text="Submit")
                    p A banshare is submitted to <a href="/banshare">/banshare</a>. It is posted to <b>#ban-share-logs</b> and reviewed by observers.
                    hr
                    ITitle(e="h3", icon="published_with_changes", text="Publish")
                    p Once it is approved, an observer will publish it and it will be posted to all TCN servers that have banshares set up. The bot will also automatically ban the user(s) in servers where that is enabled.
                    hr
                    ITitle(e="h3", icon="unpublished", text="Rescind")
                    p We strive to avoid this from happening, but if a banshare is found to be invalid, we will rescind it with a reason and perform a post-mortem to see why a faulty banshare was approved.
                    p This may also happen if the user's behavior improves and we retroactively agree to un-banshare them.
                br
                Callout(style="info")
                    p When the bot performs automated actions, either through auto-ban or the ban button, it will log the action in your logging channel if you set it up. Here's what the log message looks like
                    Image(src="https://imgur.com/WgKPMrs.png", alt="example banshare bot log")
                    p This is probably most appropriate for whatever channel your mods use commands in instead of your mod action audit log, but you can put it wherever you want.
                Linkable#setup(e="h2", value="Setup")
                p To set up the banshare system, first invite the bot using <a href="https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot">this link</a>.
                Callout(style="red")
                    p You will need to grant the bot read+write access to your banshare channel, and if you want logging for automated actions, to that channel as well.
                ol
                    li Use <code>/banshare post here</code> in your banshare channel. To disable banshares, use <code>/banshare post none</code>.
                    li Use <code>/banshare log here</code> in your logging channel (optional). To disable this, use <code>/banshare log none</code>.
                    li The ban button is enabled by default and allows members with the <b>Ban Members</b> permission to execute the banshare more easily. If you want to disable this, use <code>/banshare ban-button</code> to turn it off (or back on).
                    li To enable auto-banning (the banshare will be executed on its own if it meets the threshold), use <code>/banshare autoban</code> (see below for what the severities mean).
                    li If you use <b>Daedalus</b>, you can use <code>/banshare daedalus-integration</code> to enable/disable the integration, which allows the banshare bot to automatically add auto-bans and button bans to the targets' user history.
                Linkable#severity(e="h2", value="Severity")
                p Banshares are categorized into three levels of severity plus an extra special category. These are not very strictly defined, and observers can adjust the severity before or after publication. Here are our guidelines. These do not matter for anything other than auto-banning, and do not reflect how "bad" we think the user is.
                .panel
                    ITitle(e="h3", icon="keyboard_arrow_up", text="P0 (Critical)", icon_color="var(--red-text)")
                    p The offense is extremely severe and all servers should immediately ban them for safety.
                    p For example, a user spamming NSFW/NSFL content should be <b>P0</b>, as this not only violates all servers' rules but also Discord ToS and constitutes an immediate and grave threat to member safety.
                    p Hacked raid accounts posting scam links should be <b>P0</b>, as the offense is not really that severe, and the potential harm is not as large, but it is because they are likely to become a nuisance in many other TCN servers.
                    hr
                    ITitle(e="h3", icon="remove", text="P1 (Medium)", icon_color="var(--yellow-text)")
                    p The offense is somewhat severe and the majority of, if not all, servers will likely want to ban them.
                    p For example, a user using slurs enough times to be banned following a reasonable amount of warnings (i.e. they are aware that what they are saying is wrong, or it was clearly malicious from the beginning) will likely be <b>P1</b>, as this will violate all servers' rules and most will just immediately ban them unless the user has positive contributions in their server and they might be given a last chance there.
                    hr
                    ITitle(e="h3", icon="keyboard_arrow_down", text="P2 (Low)", icon_color="var(--blue-text)")
                    p The offense is not extremely severe and some servers may not wish to ban the user for it. Do note that very minor offenses should not be banshared at all; this is mostly for more nuanced cases of user behavior that many servers will ban them for but some may have different rules/policies.
                    p For example, a user repeatedly attacking different users and stirring up trouble in a server will likely be <b>P2</b>, as some servers may want to pre-emptively eliminate them and some other servers may want to give them a chance and ban them only if their behavior repeats there.
                    ITitle(e="h3", icon="message", text="DM SCAM", icon_color="var(--text-secondary)")
                    p The offense is a DM scam. The reason these are a separate category is because some servers do not wish to receive these as some people believe it is futile to try to eliminate the problem by banning bot accounts since there will always be more. However, some servers would still like to receive and ban these cases, so they are not being eliminated entirely; rather, servers will be able to choose whether or not they receive DM scam banshares.
                    p Note that scam spamming within a server would count as <b>P0</b> and other DM offenses such as harassment would be evaluated separately. This only applies to an account attempting to scam users by DMing scams e.g. steam scams, fake nitro scam links, etc.
                Linkable#submitting(e="h2", value="Submitting")
                p To post a banshare, go to <a href="/banshare">this form</a>. All fields should be fairly intuitive, but here is a usage guide for each:
                ul
                    li <b>IDs:</b> The IDs of the offending users. Please post this as an actual list of IDs. If it is too long to fit in a message, it will be automatically uploaded as a document, but if you paste a link, auto-banning will not function. If it is so long that the form rejects it, then you may need to post a link instead.
                        ul
                            li Once you paste in your IDs, click the "Check IDs" button that appears to fetch all of the user tags to look them over and make sure you are bansharing the right people. If your banshare is very long, this will take a very long time, so you may wish to skip this step in that case.
                    li <b>Reason:</b> Summarize why the users should be banned. This is used as the audit log reason for automated bans, so please keep that in mind when writing it and include full details and other notes in the evidence instead.
                    li <b>Evidence:</b> Include enough evidence to prove that your reasons are valid and for other mods to make an informed decision on what to do.
                    li <b>Server:</b> Choose what server you are bansharing it from. If the incident is not bound to a particular server or not one you staff, you should pick the server where you feel you have your "main/primary" or most prominent position.
                    li <b>Severity:</b> This determines if a banshare is automatically executed. See above for information on what the severity levels mean.
                    li <b>Urgency:</b> If you check the "urgent" box, this will ping all observers instead of just a few to review it.
                Callout(style="red")
                    p If the ID list is very long, you may use <b>Submit Without Validation</b>. Do <b>NOT</b> use <b>Submit Without Checking IDs</b> unless you had to publish a banshare with a link for the ID field and there was no way around it. Skipping the check prevents auto-banning or the ban button from working.
                    p The regular submit option will validate that your IDs all correspond to valid users. Submitting without validation will only verify that the IDs are in the right format, and will still parse them such that auto-banning works.
                Linkable#policy(e="h2", value="Policy")
                Linkable#purpose(e="h3", value="Purpose")
                p The purpose of the banshare system is primarily pre-emptive safety measures. Banshares should be for users who constitute a risk to the TCN, which will be better defined later in this article.
                Linkable#requirements(e="h3", value="Banshare Requirements")
                p The following are required of all banshares at a minimum, but meeting these requirements does not necessarily mean a banshare is good enough:
                ul
                    li <b>Demonstrable Threat</b>: The offense must be severe enough that the user should be considered a threat to any other servers they join, and there must be sufficient reason to believe the user will join TCN servers.
                        ul
                            li A user who spammed NSFW in a TCN server has both committed a severe offense that makes them a threat anywhere (clear disregard for rules, terms of service, and common decency) and there is sufficient reason to believe they may threaten other TCN servers (spammers/raiders often jump between servers).
                            li A user who insulted a member (without the use of slurs or harassing language) in a TCN server and was banned for repeat offenses against the same member, but participates in other TCN servers without problems, is likely not banshareable as they are already in other TCN servers but they do not constitute a threat to other servers. If their behavior repeats in other servers then the case is definitely banshareable.
                            li A user who spammed NSFW in a random server that is completely unrelated to Genshincord and the TCN is not banshareable. The offense is severe, but there is no reason to believe the user will join TCN servers. If the user is already in several Genshincord/TCN servers, they may be banshareable.
                    li <b>Descriptive Reason</b>: The provided reason must clearly explain what the offense was such that if present in a user's ban reason on its own, a moderator should roughly understand why they were banned.
                        ul
                            li "Spamming NSFW images in XYZ Mains" is a good reason.
                            li "typical steam scammer" is an acceptable reason.
                            li "troll" is not a good reason.
                    li <b>Sufficient Evidence</b>: The provided evidence must prove that the offense happened and that all listed users were involved. An exception is provided in case of large raids where it is impractical to attach evidence for every single user. In those cases, trust is placed on the author to ensure that the list of users is correct.
</template>
