<script lang="ts">
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(
            last!="{ ['/info/constitution', 'Constitution'] }",
            next!="{ ['/info/quickstart', 'Quickstart'] }"
        )
            #main
                h1 HQ
                ul: li: a(href="/info/directory") Directory
                ul: li: a(href="/info/voting") Voting
                ul: li: a(href="/info/akasha") Akasha System
</template>
