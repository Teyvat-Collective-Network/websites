<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/miscellaneous', 'Miscellaneous'] }")
            #main
                h1 Exit Procedure
                p This is a list of things to do and keep in mind if you are leaving the TCN whatever the reason may be. This is basically the inverse of the quick guide. Don't hesitate to reach out to an observer if you need any help with the departure process, even once you've been removed from HQ.
                h2 Motivation
                p It is good for all parties involved that there is no confusion about the relationships between parties. Therefore, once you are no longer a member of the TCN, it is beneficial for both the network and your server that people do not think you are still affiliated even after you are not. We will make an announcement in the Hub that you are no longer in the TCN (a reason will usually not be given unless you wish to provide one) and you may choose to do so as well, but crucially you should remove identifying features like the partner list.
                h2 Un-Setup
                ul
                    li Delete the TCN partner list (if you are using autosync, you will need to run <code>/partnerlist remove</code>), and if it is in its own TCN partner channel, delete or archive the channel.
                    li Unfollow <span class="mention">#network-events</span>. Note that you are not automatically barred from having events promoted here if you hold a collab event with a TCN server.
                    li Invoke <code>/disconnect</code> in all of your global channels and then kick the <b>TC-global</b> bot. You do not need to delete the channels but you should at least archive them for clarity.
                    li Kick the <b>TCN</b> bot. Staff autosync will stop working once your server is removed from the API and your server's dedicated role will also be removed. Banshares will also no longer be forwarded. If you are a staff member on another TCN server, you will still have that in the TCN Hub if they have it set up.
                p You do not need to remove other bots mentioned in the quick guide, e.g. Banhammer, Daedalus, or Genshin Wizard. They are not exclusive to the TCN. The exclusive bots (<b>TC-Global</b> and the primary <b>TCN</b> bot) will simply stop working once your server is no longer in the TCN, so there is no point in keeping them.
</template>
