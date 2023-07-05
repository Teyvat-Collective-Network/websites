<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/discord', 'Discord Help'] }")
            #main
                h1 Glossary
</template>
