<script lang="ts">
    import Callout from "../../../../lib/Callout.svelte";
    import Navigation from "../../../../lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{['/info/other-bots#banhammer', 'Other Bots']}")
            #main
                h1 Banhammer
                Callout(style="info")
                    p Developed by <b>HyperNeutrino#1759</b>
                    p <a href="https://discord.com/api/oauth2/authorize?client_id=994100815402909817&permissions=274877959172&scope=bot">Add To Server</a>
                br
                Callout(style="info")
                    p The massban feature on <a href="/info/other-bots/daedalus">Daedalus</a> is much more comprehensive, and that bot supports better permission controls and more features.
                p By default, Banhammer can only be used by administrators, but this can be changed. Only administrators can manage the permissions.
                ul
                    li <code>bh!massban [days] &lt;url&gt; [reason]</code> - massban a list of users
                        ul
                            li <b>days</b> indicates the number of days of messages to purge (0-7, default 0)
                            li <b>url</b> must point to a raw text file (e.g. a Pastebin or Gist raw file) listing the IDs
                            li <b>reason</b> will be put in the audit logs (optional)
                    li <code>bh!allow &lt;role&gt;</code> - allow members with this role to use <code>bh!massban</code>
                    li <code>bh!deny &lt;role&gt;</code> - remove this role from the allowlist (but does not block it, so users with another allowed role can still use <code>bh!massban</code>)
                    li <code>bh!list</code> - list allowed roles
</template>
