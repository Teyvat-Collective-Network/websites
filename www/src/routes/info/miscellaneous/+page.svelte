<script lang="ts">
    import Callout from "$lib/Callout.svelte";
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<template lang="pug">
    .container
        Navigation(last!="{ ['/info/discord', 'Discord Help'] }")
            #main
                h1 Miscellaneous
                Linkable#permissions(e="h2", value="Exit Procedure")
                p The following page goes over the procedure for leaving the TCN, whether willingly or by force: <a href="/info/exit-procedure">Exit Procedure</a>.
                Linkable#glossary(e="h2", value="Glossary")
                p Need to know what a term means? Check out the <a href="/info/glossary">glossary of TCN terminology</a>.
</template>
