<script lang="ts">
    import { onMount } from "svelte";
    import Callout from "../../lib/Callout.svelte";
    import Invite from "../../lib/Invite.svelte";
    import Linkable from "../../lib/Linkable.svelte";
</script>

<template lang="pug">
    .container
        #main
            h1 Contact us
            Linkable#hub(e="h2" value="TCN Hub")
            p Join the TCN Hub to contact observers and other server staff and ask questions or give feedback about the TCN!
            br
            Invite(banner="https://i.imgur.com/DXyVcRR.png" icon="/favicon.png" title="TCN Hub" code="FG2wpbywSx")
            Linkable#observers(e="h2" value="Observers")
            div
                +await("new Promise((r) => onMount(() => r(null)))")
                    p Loading observers...
                    +then("_")
                        +await("fetch('/api/observers')")
                            p Loading observers...
                            +then("response")
                                +await("response.json()")
                                    p Loading observers...
                                    +then("[observers, error]")
                                        +if("error")
                                            Callout(style="red")
                                                p {error}
                                        +if("observers")
                                            ul
                                                +each("observers as observer")
                                                    li
                                                        <a href="https://discord.com/users/{observer.id}">{observer.tag}</a> - <code>{observer.id}</code>
                                    +catch("_")
                                        Callout(style="red")
                                            p Fetching observers failed; please check your internet connection.
</template>
