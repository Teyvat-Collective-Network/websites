<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Navigation from "$lib/Navigation.svelte";
    import Permission from "$lib/Permission.svelte";

    let open: boolean = false;
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/discord#permissions', 'Discord Help']}")
            #main
                h1 Permission List
                p
                    a(href!="{'javascript:void(0)'}" on:click!="{() => (open = !open)}") {open ? "Hide" : "Show"} permission bits
                Callout(style="info")
                    p <b>Role Hierarchy</b> refers to the order of roles. A user's position is based on their highest role, except for the server owner, who is always at the very top of the hierarchy.
                    p Note that it is based on the highest role in general, <b>not</b> the highest role with the specified permission. Therefore, a mod with a cosmetic role that is higher than the mod role can ban mods without that role, even if the cosmetic role carries no permissions.
                div
                    Permission(code="CREATE_INSTANT_INVITE", name="Create Invite", bit!="{0}", open!="{open}")
                    p
                        b Text, Voice, Stage
                    p Allows users to create invite links to the server, which other users can use to join the server. Users do not need this permission to share existing invite links, including the vanity URL, only to create new invites.
                    Callout(style="info")
                        p This does not allow users to add bots - that requires <a href="#MANAGE_GUILD">Manage Guild</a>.
                    Permission(name="Kick Members", bit!="{1}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to kick members from the server, instantly removing them from the server but not preventing them from rejoining. This is subject to role hierarchy.
                    Permission(name="Ban Members", bit!="{2}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to ban members from the server, preventing them from rejoining the server and also banning their IP.
                    p Allows users to unban members, allow them to rejoin the server (if they have an invite; unbanning does not re-add members).
                    p Bans are permanent unless revoked. Users who aren't in the server can be banned to prevent them from joining. This is subject to role hierarchy, and non-members are considered underneath everyone.
                    Permission(name="Administrator", bit!="{3}", open!="{open}")
                    p
                        b Server-Wide
                    p Grants users all permissions in the server and in all channels. Also prevents users from being timed out by anyone. This is still subject to role hierarchy, so admins cannot kick/ban anyone not below them and can be kicked/banned by anyone above them.
                    Callout(style="red")
                        p This is a dangerous permission to grant! Administrators gain permission to do anything - all permissions, as well as access to all channels. They are not immune to moderation except for timeouts, but deny overrides will have no effect on them.
                    Permission(name="Manage Channels", bit!="{4}", open!="{open}")
                    p
                        b Text, Voice, Stage
                    p Allows users to create, edit, and delete channels. Editing channels includes changing the channel's name, topic, bitrate, video quality, user limit, region, slowmode, auto-archive duration for threads, etc.
                    Callout(style="info")
                        p This permission does not allow users to edit channel overrides; that is part of <a href="#MANAGE_ROLES">Manage Roles</a>.
                    Permission(code="MANAGE_GUILD", name="Manage Server", bit!="{5}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to edit server properties such as the name, icon, banner, etc. Also allows users to add applications to the server (e.g. bots). Also allows users to configure built-in AutoMod and users with this permission always bypass AutoMod.
                    Callout(style="info")
                        p This does not allow users to delete the server, change the 2FA requirement for moderation, or apply for Discord partnership. Those are only available to the server owner.
                    Permission(name="Add Reactions", bit!="{6}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to add new emoji reactions to messages.
                    Callout(style="info")
                        p This permission is not needed to add to an existing reaction, e.g. in the case of reaction role prompts. Users who are timed out or have not passed membership screening cannot do this.
                        p Users can always remove their own reactions.
                    Permission(name="View Audit Log", bit!="{7}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to see the audit log which keeps track of moderation and administrative actions for a certain amount of time. They can see all actions, even those that they do not have permission to perform.
                    Permission(code="PRIORITY_SPEAKER", name="Use Priority Speaker", bit!="{8}", open!="{open}")
                    p
                        b Voice
                    p Allows users to enable Push-To-Talk Priority Speaker mode, which causes all other users in a voice channel to have their volume reduces while the user is using priority mode.
                    Permission(name="Stream", bit!="{9}", open!="{open}")
                    p
                        b Voice
                    p Allows users to stream in a voice channel, including screensharing and using the video camera.
                    Permission(name="View Channel", bit!="{10}", open!="{open}")
                    p
                        b Text, Voice, Stage
                    p Allows users to see channels and see incoming messages while focused on the channel. Users can see category channels if they can see at least one channel in it, and seeing a category does not automatically allow them to see any or all channels in it.
                    Callout(style="info")
                        p The ability to see messages that were sent when the user was offline or the channel was unfocused is controlled by <a href="#READ_MESSAGE_HISTORY">Read Message History</a>.
                    Permission(name="Send Messages", bit!="{11}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to send messages in text and text-in-voice channels that they can view. Also allows users to create forum posts but not to talk in them.
                    Callout(style="info")
                        p To talk in threads and forum posts, users need <a href="#SEND_MESSAGES_IN_THREADS">Send Messages In Threads</a> instead.
                    Permission(code="SEND_TTS_MESSAGES", name="Send Text-To-Speech Messages", bit!="{12}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to use <code>/tts</code> which sends a message that is read aloud to everyone focused on the channel.
                    Permission(name="Manage Messages", bit!="{13}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to delete other users' messages, pin messages, publish other users' messages in announcement channels, and remove embeds from other users' messages. Except for pinning messages, the other three are always available for one's own messages. This is <b>not</b> subject to role hierarchy.
                    Permission(name="Embed Links", bit!="{14}", open!="{open}")
                    p
                        b Text, Voice
                    p Links that users send will show embeds if possible and the user has not suppressed embeds using <code>&lt;...&gt;</code>. For bots, this is necessary for them to send custom embeds in messages.
                    Permission(name="Attach Files", bit!="{15}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to upload files in messages they send. This is not limited to images; users can upload most types of files.
                    Permission(name="Read Message History", bit!="{16}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to view messages in channels that they can view, even if they were not focused on the channel at the time, and allows them to search back through all past messages.
                    p Without this permission, users will see "You do not have permission to view the history of this channel." and will only be able to see messages received by their client while they were in that channel.
                    Permission(code="MENTION_EVERYONE", name="Mention <code>@everyone</code>, <code>@here</code>, and All Roles", bit!="{17}", open!="{open}")
                    p
                        b Text, Voice, Stage
                    p Allows users to use <code>@everyone</code> to ping all server members who can see the channel, <code>@here</code> to ping all online members who can see the channel, and ping any role regardless of if it has the "Allow anyone to <b>@mention</b> this role" setting enabled. This is <b>not</b> subject to role hierarchy.
                    p In stage channels, this allows users to alert <code>@everyone</code> when starting an instance.
                    Permission(name="Use External Emojis", bit!="{18}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to use emojis from other servers in messages and reactions (if they have Nitro or are a bot).
                    Permission(code="VIEW_GUILD_INSIGHTS", name="View Server Insights", bit!="{19}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to see the server insights page, which provides information about server health, members joining and leaving, which invites they are using, member retention, participant message count, etc.
                    Permission(name="Connect", bit!="{20}", open!="{open}")
                    p
                        b Voice, Stage
                    p Allows users to join voice and stage channels that they can see. Being able to speak is controlled by <a href="#SPEAK">Speak</a> but they can listen unless deafened.
                    Permission(name="Speak", bit!="{21}", open!="{open}")
                    p
                        b Voice
                    p Allows users to speak in voice channels that they are connected to. This does not allow users to speak in stage channels; stage moderators are appointed separately per stage channel (via the channel permission settings) and choose who is allowed to speak.
                    Permission(name="Mute Members", bit!="{22}", open!="{open}")
                    p
                        b Voice, Stage
                    p Allows users to force-mute users (including themselves), preventing them from speaking in any channel regardless of if they have the <a href="#SPEAK">Speak</a> permission. Also allows users to undo force-mutes, including on themselves. Users who have muted themselves cannot be muted by anyone else. This is <b>not</b> subject to role hierarchy.
                    Permission(name="Deafen Members", bit!="{23}", open!="{open}")
                    p
                        b Voice, Stage
                    p Allows users to force-deafen users (including themselves), preventing them from hearing what is happening in voice or stage channels. Also allows users to undo force-deafens, including on themselves. Users who have deafened themselves cannot be undeafened by anyone else. This is <b>not</b> subject to role hierarchy.
                    Callout(style="info")
                        p Unlike how self-deafening works, a user can be force-deafened but still allowed to speak. This can be used to disable music bots' ability to hear, which is useful if you are concerned about spying.
                    Permission(name="Move Members", bit!="{24}", open!="{open}")
                    p
                        b Voice, Stage
                    p Allows users to move members who are already in a voice channel in this server into another voice channel. The user performing this action must have <a href="#CONNECT">Connect</a> in the target channel, but the target user does not need to be able to see or join it on their own. Users cannot be connected by another user and can never be moved between servers even if the user has this permission in both servers. This is <b>not</b> subject to role hierarchy.
                    Permission(code="USE_VAD", name="Use Voice Activity", bit!="{25}", open!="{open}")
                    p
                        b Voice
                    p Allows users to use voice activity detection mode. Without this permission, users can only use Push-To-Talk.
                    Permission(name="Change Nickname", bit!="{26}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to change their own nickname.
                    Permission(name="Manage Nicknames", bit!="{27}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to change other members' nicknames. This is subject to role hierarchy.
                    Permission(name="Manage Roles", bit!="{28}", open!="{open}")
                    p
                        b Text, Voice, Stage
                    p Allows users to create, edit, delete, add, and remove roles that are below them in role hierarchy (however, adding/removing roles can be done to members above them in hierarchy).
                    p Allows users to edit channel overrides for roles that are below them and permissions that they have.
                    Permission(name="Manage Webhooks", bit!="{29}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to create, edit, and delete webhooks, as well as view a list of webhooks and get their URLs.
                    Permission(name="Manage Emojis and Stickers", bit!="{30}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to upload, rename, and delete emojis and stickers. Also allows bots to control which roles can use emojis, which is a little-known feature that isn't very useful and isn't supported by most bots.
                    Permission(name="Use Application Commands", bit!="{31}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to use slash commands and context menu commands (right clicking a message or user and selecting "Apps").
                    Callout(style="info")
                        p This permission is not needed for the bot to support application commands; that is the <code>application.commands</code> scope set when inviting the bot. If you are not seeing a bot's commands and you gave it this scope, you likely have too many bots; if you have over 50 bots, some will no longer be able to register commands.
                        p In fact, this permission currently does nothing for bots.
                    Permission(name="Request To Speak", bit!="{32}", open!="{open}")
                    p
                        b Stage
                    p Allows users to request to become a speaker in stage channels, which can be approved or denied by stage moderators.
                    Permission(name="Manage Events", bit!="{33}", open!="{open}")
                    p
                        b Voice, Stage
                    p Allows users to create, edit, and delete server events, including starting and ending them.
                    Permission(name="Manage Threads", bit!="{34}", open!="{open}")
                    p
                        b Text
                    p Allows users to edit, archive, unarchive, lock, unlock, and delete threads and view all private threads.
                    Permission(name="Create Public Threads", bit!="{35}", open!="{open}")
                    p
                        b Text
                    p Allows users to create public threads (threads that all users can see).
                    Permission(name="Create Private Threads", bit!="{36}", open!="{open}")
                    p
                        b Text
                    p Allows users to create private threads, which can only be seen by users with <a href="#MANAGE_THREADS">Manage Threads</a> and users who are explicitly invited to the thread.
                    Permission(name="Use External Stickers", bit!="{37}", open!="{open}")
                    p
                        b Text, Voice
                    p Allows users to send messages with stickers from other servers.
                    Permission(name="Send Messages in Threads", bit!="{38}", open!="{open}")
                    p
                        b Text
                    p Allows users to send messages in threads and forum posts.
                    Callout(style="info")
                        p To create forum posts and talk in text and text-in-voice channels, users need <a href="#SEND_MESSAGES">Send Messages</a>.
                    Permission(code="USE_EMBEDDED_ACTIVITIES", name="Use Activities", bit!="{39}", open!="{open}")
                    p
                        b Voice
                    p Allows users to use activities such as YouTube's Watch Together in voice channels.
                    Permission(code="MODERATE_MEMBERS", name="Timeout Members", bit!="{40}", open!="{open}")
                    p
                        b Server-Wide
                    p Allows users to timeout other members, disabling all permissions except <a href="#VIEW_CHANNEL">View Channel</a> and <a href="#READ_MESSAGE_HISTORY">Read Message History</a>. Some other features like adding to existing reactions or using message components (buttons and dropdowns) are also disabled.
                    Callout(style="info")
                        p <a href="#ADMINISRTATOR">Administrators</a> cannot be timed out. If a user is timed out and gains the permission, their timeout will be canceled. Even if an administrator could be timed out, it would take no effect.
</template>
