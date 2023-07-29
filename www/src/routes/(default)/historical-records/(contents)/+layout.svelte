<script>
    import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
    <div id="main">
        <Navigation last={["/historical-records", "Historical Records"]}>
            <slot />
        </Navigation>
    </div>
</div>
