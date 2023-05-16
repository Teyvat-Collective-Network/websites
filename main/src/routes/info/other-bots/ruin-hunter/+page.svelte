<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/other-bots#ruin-hunter', 'Other Bots']}")
            #main
                h1 Ruin Hunter
                Callout(style="info")
                    p Developed by <b>Leaf#1950</b>
                    p <a href="https://discord.com/api/oauth2/authorize?client_id=927626506937720862&permissions=1099511635974&scope=bot%20applications.commands">Add To Server</a>
                p The bot starts working as soon as it's added and requires no setup, though you may want to adjust the settings.
                ul
                    li <code>/settings</code> - adjust the raid threshold (default: 5 joins from accounts younger than 1 week per 10 seconds)
                    li <code>/off</code> - turn off the bot (useful if you are expecting an influx of users)
                    li <code>/on</code> - turn back on the bot (it starts on)
                p Some additional commands:
                ul
                    li <code>/logs</code> - set the log output channel
                    li <code>/history</code> - view the history of recent raids caught in your server, or view details of a particular raid
                    li <code>/stats</code> - view bot stats (how many servers and how many members are being watched, and how many raids have been caught overall)
</template>
