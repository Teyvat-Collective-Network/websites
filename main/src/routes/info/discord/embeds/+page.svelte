<script lang="ts">
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/discord#webhooks-embeds', 'Discord Help'] }")
            #main
                h1 Embeds
                Linkable#embed-color(e="h2", value="Embed Color")
                p You should pick one embed color that you like and stick to it for most/all of your embeds for consistency and organization. If you want am embed to appear colorless, use <code>0x2d3136</code> (dark mode).
                Linkable#text-color(e="h2", value="Text Color")
                p You cannot color text by default, but you can use code block syntax highlighting to get a similar effect. Check out <a href="https://docs.google.com/document/d/1tyBtgNfGc6ae7t033dFxdqCSfG9kgiuwrFxlJTvyuu8/edit">this document</a> for a list.
                Linkable#timestamps(e="h2", value="Timestamps")
                p Discord doesn't make it obvious that this feature even exists, but you can show a specific date to a user both absolutely and relatively. The format is <code>&lt;t:timestamp:format&gt;</code>. You can use <a href="https://discord-timestamp-generator.vercel.app/">this website</a> to generate these.
                Linkable#limits(e="h2", value="Embed Limits")
                p Discord places size limits on embeds.
                ul
                    li The author name can be up to 256 characters.
                    li The title can be up to 256 characters.
                    li The description can be up to 4096 characters.
                    li Field names are mandatory and can be up to 256 characters.
                    li Field values are mandatory and can be up to 1024 characters.
                    li The footer text can be up to 2048 characters, but it is not formatted.
                    li The total length of the listed fields over all embeds in one message can be up to 6000 characters,
                    li A message may have up to 10 embeds.
                    li An embed may have up to 25 fields.
</template>
