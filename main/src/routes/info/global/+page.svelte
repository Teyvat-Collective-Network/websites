<script lang="ts">
    import Callout from "../../../lib/Callout.svelte";
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last="{['/info/quickstart#global', 'Quickstart']}")
            #main
                h1 Global Chat
                Linkable#what-is-global(e="h2", value="What is it?")
                p Global chat is a system that connects channels across the TCN and allow users to chat with each other through it. There are three network-wide channels:
                ul
                    li <b>TCN</b> - Public "general" channel which can be made accessible to all server members.
                    li <b>lounge</b> - Staff general chat which can be made accessible to anyone who can access your server's staff chat.
                    li <b>office</b> - Staff business channel which can be made accessible to your staff.
                Linkable#setup(e="h2", value="Setup")
                Linkable#adding-the-bot(e="h3", value="Adding the bot")
                p First, invite the bot to your server using <a href="https://discord.com/api/oauth2/authorize?client_id=905370006362140702&permissions=137976212544&scope=applications.commands%20bot">this link</a>.
                Linkable#permissions(e="h3", value="Permissions")
                p You need to ensure the bot has all of the following permissions in all global channels that you want to use:
                ul
                    li <b>View Channel:</b> to be able to relay messages
                    li <b>Read Message History:</b> to be able to fetch older messages for relaying deletion
                    li <b>Manage Webhooks:</b> to be able to create a webhook / find your webhook for incoming messages
                    li <b>Manage Messages:</b> to be able to cross-delete messages that were deleted elsewhere
                p Because of the possibility of spam or abusive content, if you do not allow the bot to delete messages, it will stop sending them as well.
                Callout(style="warn")
                    p Emoji from non-TCN servers will not work by default due to changes in Discord's bot webhook permissions. To fix this, just create a webhook manually in the channel. You do not need to do anything else.
                Linkable#connecting(e="h3", value="Connecting")
                Callout(style="info")
                    p Your global channels cannot be used for anything else. All messages sent to the channel are relayed.
                p Once your channel permissions are set up, use <code>/connect</code> and select the appropraite global channel. If you see any channels not mentioned above, do not connect to it unless you were given permission to. Global chat may be used by servers for things like event channels, so don't disrupt their channels.
                Callout(style="info")
                    p To test that the channel works, send a message from your side and check another server. If it doesn't show up, <b>View Channel</b> is missing.
                    p Then, send a message from the other side and check that it appears in your channel. If not, <b>Manage Webhooks</b> is missing.
                    p Finally, delete the message from the other side and check that it disappears on your side. If not, <b>Manage Messages</b> is missing.
                    p For staff channels, if you are not staff elsewhere, you may use the global channels in the TCN Hub to test.
                Linkable#disconnecting(e="h3", value="Disconnecting")
                p To disconnect, use <code>/disconnect</code> and the global channel will immediately stop relaying messages both ways.
                Linkable#moderation(e="h2", value="Moderation")
                Linkable#deleting(e="h3", value="Deleting Messages")
                p When a message or any copy of it is deleted, all copies of it and the original are deleted. If this isn't working, make sure the bot has <b>View Channel</b>, <b>Read Message History</b>, and <b>Manage Messages</b> in all of your global channels.
                p If purging didn't work, you can use <code>/purge</code> with the message URL to make the bot try again.
                Linkable#banning(e="h3", value="Banning")
                p Use <code>/ban</code> to ban a user from global chat. This makes the bot stop relaying messages from that user in the current global channel across all servers. You must have <b>Ban Members</b> but no hierarchy check is performed. Use of this command is logged, so use it responsibly.
                p Note that the ban is per-channel, so make sure you run it in the right channel. You should not be using this in the staff channels unless a staff member is causing serious disruption that must be immediately stopped; instead, reach out to the server's admins/owner and/or an observer.
                p To get the ID of the author of a message, right click the message and select <code>Apps &gt; user</code> or run <code>/user</code> with the message URL (the URL of any copy of the message will work).
                p To unban a user, just use <code>/unban</code>.
                Linkable#panic-mode(e="h3", value="Panic Mode")
                Callout(style="red")
                    p This command alerts all observers and can only be undone by an observer. Misuse of this command may result in loss of global chat privileges or other consequences. If you think it might be needed, don't be afraid to use it; we will discuss it with you if we think it was unnecessary, but don't play with it or use it for "testing" purposes.
                p If there is a raid or network-wide incident going on in global chat, you can use <b>/panic</b> to completely shut down the global channel. It will cease to relay messages from any server.
                Linkable#for-observers(e="h3", value="For Observers")
                ul
                    li <code>/globals list</code> - show a list of existing global channels
                    li <code>/globals remove</code> - delete a global channel (do <b>not</b> do this on channels unless it is agreed upon or it was a temporary channel that is no longer needed)
                    li <code>/globals add</code> - create a new global channel with a name (required) and log channel (optional)
                        ul
                            li the log channel is where edits, deletions, bans/unbans, and connections/disconnections are logged
                            li this command will not connect any channels, so you will need to connect the channel using <code>/connect</code>
                    li <code>/globals logchannel</code> - change the log channel of a global channel
                Linkable#other-commands(e="h3", value="Other Commands")
                ul
                    li <code>/faq</code> - Show some information about the bot. If someone asks what global chat is or why everyone is a bot (fairly common), use this with the <b>public: true</b> option to show the info page.
                    li <code>/help</code> - Show one of three help pages:
                        ul
                            li <b>mods</b> - Information relevant to moderators such as how to ban/unban users and <code>/panic</code>.
                            li <b>admins</b> - Information for server admins such as how to connect/disconnect channels.
                            li <b>execs</b> - Information for observers such as how to create/delete global channels and <code>/unpanic</code>.
                    li <code>/nickname</code> - Set your global nickname. Normally, your display name (nickname, or if none, username) will be shown to other servers. If you set this, it will override your display name in all global channels from all servers.
                    li <code>/ping</code> - If you think the bot is unresponsive, use this command to check its ping (response time).
                    li <code>/rules</code> - Show the global chat rules. Individual server rules still apply and moderation may be done by individual server staff, but a baseline set of rules exists. Use <b>public: true</b> to show it publicly in the channel (it is relayed to other servers).
                    li <code>/user</code> - Call this with a message link to get the ID of the author of the original message. You can also right-click the message and select <code>Apps &gt; user</code> but this sometimes doesn't work due to Discord issues.
</template>
