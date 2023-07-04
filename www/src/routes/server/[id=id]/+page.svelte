<script lang="ts">
    export let data: any;
</script>

<template lang="pug">
    .container
        #main
            +if("data.missing")
                | There is no server in the TCN with ID <b>{ data.id }</b>!
                +else
                    .row(style="gap: 1em")
                        img(
                            src!="/images/characters/{data.character}.png",
                            alt!="{data.name} Icon",
                            width="75"
                        )
                        h2 { data.name } (<a href="https://discord.gg/{data.invite}" target="_blank" rel="noreferrer">Join</a>)
                    | <b>Server Owner</b>: <a href="/user/{data.owner}">{ data.owner_tag }</a> (<code>{ data.owner }</code>)
                    +if("data.advisor")
                        br
                        | <b>Council Advisor</b>: <a href="/user/{data.advisor}">{ data.advisor_tag }</a> (<code>{ data.advisor }</code>)
            br
            br
            a(href="/partners") &lt; Back to Partner List
</template>
