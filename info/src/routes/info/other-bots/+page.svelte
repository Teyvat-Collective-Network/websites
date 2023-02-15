<script lang="ts">
    import Callout from "../../../lib/Callout.svelte";
    import Linkable from "../../../lib/Linkable.svelte";
    import Navigation from "../../../lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/quickstart#other-bots', 'Quickstart']}")
            #main
                h1 Other Bots
                Callout(style="info")
                    p These bots are not TCN-exclusive, so feel free to use them in other servers!
                Linkable#genshin-wizard(e="h2", value="Genshin Wizard")
                h5(style="color: var(--text-accent)") [Official Partner]
                p <a href="https://discord.com/api/oauth2/authorize?client_id=782099719718699009&permissions=537136128&scope=applications.commands%20bot">Add To Server</a>
                p The TCN is officially partnered with Genshin Wizard, a multi-purpose Genshin Impact bot with a comprehensive set of features allowing you to view your in-game stats, flex your builds, view build guides and hundreds of high-quality infographics, etc. To get more information or for setup, please contact the support team on their <a href="https://discord.gg/BTT5Zr7Dmp">Discord server</a> and open a ticket. Mention that you are part of the TCN and would like help setting up.
                Callout(style="info")
                    p This bot is not developed by a TCN council member, it is just a partner of the TCN. It is not exclusive to us and frequently partners with other servers as well.
                Linkable#ruin-hunter(e="h2", value="Ruin Hunter")
                p Made by <b>Leaf#1950</b>, this is an anti-raid bot that detects large influxes of new accounts and bans them to keep your server safe from raids. You can also turn this on and off easily (such as if you are expecting a higher rate of incoming users) and adjust the thresholds.
                p
                    a(href="/info/other-bots/ruin-hunter") See More
                Linkable#banhammer(e="h2", value="Banhammer")
                p This is a utility bot dedicated to massbanning by <b>HyperNeutrino#1759</b>. It allows you to ban many users at once from an online file of IDs such as a Pastebin raw file, which is useful if the number of users is very high and copy-pasting them into chat would take many messages.
                p
                    a(href="/info/other-bots/banhammer") See More
                Callout(style="info")
                    p This feature also exists on <b>Daedalus</b>, which also includes many other features, and is much more comprehensive there.
                Linkable#daedalus(e="h2", value="Daedalus")
                p Daedalus is a modern, general-purpose bot containing a wide array of features for all your server management needs, featuring full slash-command support, buttons and dropdowns for a smooth experience, modals, high customizability, transparent permissions, etc. It is developed by <b>HyperNeutrino#1759</b>.
                p
                    a(href="/info/other-bots/daedalus") See More
</template>
