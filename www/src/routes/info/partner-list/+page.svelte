<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import ITitle from "$lib/ITitle.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/quickstart#partner-list', 'Quickstart']}")
            #main
                h1 Partner List &amp; Autosync
                Callout(style="green")
                    p The following methods will all meet the requirements, and if you like the default style and don't need to cutomize it, you can use these options.
                    ul
                        li Post it from <a href="https://embeds.leaf.moe/TCN_partners">https://embeds.leaf.moe/TCN_partners</a>.
                        li Use <code>/partners</code> on the TCN Global Chat bot.
                        li Set up autosync (instructions below the requirements).
                Linkable#requirements(e="h2", value="Requirements")
                p You must include all of the following:
                ul
                    li <b>Website URL:</b> <a href="https://teyvatcollective.network">https://teyvatcollective.network</a>
                    li <b>Description:</b> a description of the TCN.
                    li <b>Partner List:</b> a list of all TCN partners, which must not contain any other servers.
                    li <b>TCN Hub:</b> the description for the TCN Hub and its invite link (<a href="https://discord.gg/FG2wpbywSx">https://discord.gg/FG2wpbywSx</a>).
                    li <b>Genshin Wizard:</b> the description for Genshin Wizard and its website link (<a href="https://genshinwizard.com">https://genshinwizard.com</a>).
                    li <b>Genshin Impact Tavern:</b> the description for Genshin Impact Tavern and its invite (<a href="https://discord.gg/genshinimpacttavern">https://discord.gg/genshinimpacttavern</a>).
                p You do not need to include all of these verbatim, but here's what we recommend for the description. Your description is expected to be roughly accurate, but you can write it in your own style. Here are our recommendations:
                .panel
                    ITitle(e="h3", icon="notes", text="General Description")
                    p
                        i "In Teyvat, the stars in the sky will always have a place for you."
                    p A network of high-quality Genshin Impact character-mains style servers that focus on creating fan communities. Within the network, individual and network-wide events are held such as: tournaments, scavenger hunts and other fun events, community nights, giveaways, and patch preview livestreams.
                    hr
                    ITitle(e="h3", icon="hub", text="TCN Hub")
                    p Join us in the official TCN hub to ask questions about the network, talk to other network members, get information on the network and how to apply, and contact observers (admins)! <a href="https://discord.gg/FG2wpbywSx">https://discord.gg/FG2wpbywSx</a>
                    hr
                    ITitle(e="h3", icon="auto_fix_high", text="Genshin Wizard")
                    p The TCN is partnered with <a href="https://genshinwizard.com">Genshin Wizard</a>, a multipurpose Genshin Impact Discord bot with a wide array of features to let you view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, and more!
                    hr
                    ITitle(e="h3", icon="sports_bar", text="Genshin Impact Tavern")
                    p The TCN is partnered with <a href="https://discord.gg/genshinimpacttavern">Genshin Impact Tavern</a>, a multifaceted Discord Community Server hosting a custom bot designed to emulate an "RPG-like" experience. This includes the earning of Mora (Server digital currency), a Vision, farming for weapons and upgrades with continuously expanding systems related to each. Mora can be redeemed to make use of several server functions, including redemption for Official Merchandise. Genshin Impact Tavern is also the proud host of the Cat's Tail Gathering TCG Tournament! <i>Genshin Impact Tavern is an officially endorsed server.</i>
                Linkable#autosync(e="h2", value="Autosync")
                Callout(style="info")
                    p <b>Is this for me?</b> If you would like to follow the default format of the TCN partner embed and don't want to have to update it manually, this is for you.
                    p You can choose a message that will be automatically edited each time or for the bot to automatically delete and re-post the message each time it is updated.
                ol
                    li Invite the TCN bot using <a href="https://discord.com/api/oauth2/authorize?client_id=959360773518413824&permissions=1512097303623&scope=applications.commands%20bot">this link</a>.
                    li Run <code>/partnerlist post</code> to set up an embed instance:
                        ul
                            li Specify <b>channel</b> if you do not want it to post in the current channel.
                            li Set <b>repost</b> to true if you want the embed to be reposted instead of edited each time there is an update.
                            li Set <b>webhook</b> if you want it to post via a webhook instead of from the bot itself (in this case, the channel argument is ignored).
                    li To change the format (template) of the embed, use <code>/partnerlist edit</code>. For help with using this, ask in <span class="mention">#dev-chat</span> in HQ or Hub.
                p Just like that, you're all done and as long as you don't remove the bot or delete the webhook, you will never need to update it yourself again!
</template>
