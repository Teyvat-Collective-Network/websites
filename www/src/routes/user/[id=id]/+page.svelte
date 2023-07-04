<script lang="ts">
    export let data: any;
</script>

<template lang="pug">
    .container
        #main
            +if("data.discord")
                h3 { data.discord.tag }
                +else
                    | No user with ID <b>{ data.id }</b> could be found!
                    br
                    a(href="/") &lt; Home
</template>
