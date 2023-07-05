<script lang="ts">
    export let data: any;
</script>

<template lang="pug">
    .container
        #main
            +if("data.discord")
                .row(style="gap: 1em")
                    img(
                        src!="{ data.discord.icon }",
                        alt!="{ data.discord.tag } Profile Avatar",
                        width="75",
                        style="border-radius: 50%"
                    )
                    h2 { data.discord.tag }
                +each("[[data.api?.owns, 'Server Owner'], [data.api?.advises, 'Council Advisor'], [data.api?.staff, 'Staff']] as [array, title]")
                    +if("array?.length")
                        | <b>{title} of</b>
                        |
                        +each("array as server, index")
                            +if("index !== 0")
                                | ,
                                |
                            a(href="/server/{server.id}") { server.name }
                        br
                +else
                    | No user with ID <b>{ data.id }</b> could be found!
                    br
            a(href="/") &lt; Home
</template>
