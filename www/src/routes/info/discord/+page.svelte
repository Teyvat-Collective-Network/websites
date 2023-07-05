<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/quickstart', 'Quickstart']}", next!="{['/info/miscellaneous', 'Miscellaneous']}")
            #main
                h1 Discord Help
                Linkable#permissions(e="h2", value="Discord Permissions")
                p If you have absolutely no knowledge of Discord permissions, a good place to start would the official <a href="https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ">Permissions FAQ</a> support article.
                Callout(style="warn")
                    p An important thing to know about permissions is that allow overrides always apply over deny overrides, regardless of hierarchy.
                p For a list of all permissions and what they do, visit <a href="/info/discord/permission-list">this page</a>.
                p For more information about permissions and some recommendations for good structure, check out <a href="/info/discord/permissions">this page</a>.
                Linkable#webhooks-embeds(e="h2", value="Webhooks &amp; Embeds")
                p This is a guide on how to use embeds and webhooks in Discord. This guide features Discohook, Embed Generator (discord.club), and Leaf Embeds.
                p Webhooks are resources you can create in a text channel that can be used to post messages to the channel by any user or application that has the URL.
                p Embeds are a way to organize information and add styling to your resources.
                p To view the full guide, visit either the <a href="/info/discord/webhooks">webhooks</a> or <a href="/info/discord/embeds">embeds</a> page.
</template>
