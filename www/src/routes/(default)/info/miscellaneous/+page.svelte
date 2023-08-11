<script lang="ts">
    import Linkable from "$lib/Linkable.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
    <Navigation last={["/info/discord", "Discord Help"]}>
        <div id="main">
            <h1>Miscellaneous</h1>
            <Linkable id="permissions" e="h2" value="Exit Procedure" />
            <p>
                The following page goes over the procedure for leaving the TCN, whether willingly or by force: <a
                    href="/info/exit-procedure">Exit Procedure</a
                >.
            </p>
            <Linkable id="glossary" e="h2" value="Glossary" />
            <p>
                Need to know what a term means? Check out the <a href="/info/glossary">glossary of TCN terminology</a>.
            </p>
        </div>
    </Navigation>
</div>
