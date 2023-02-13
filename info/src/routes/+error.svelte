<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="container">
    <div id="main">
        <h1><b>{$page.status}</b> {$page.error?.message}</h1>
        <p><a href="/">&lt; Return to Home Page</a></p>
        {#if $page.status === 404}
            <p>
                If you arrived at this page from a link on this website, please report it as an
                error to HyperNeutrino#1759. Otherwise, please check the spelling of the URL
                (including capitalization) and try again.
            </p>
        {/if}
    </div>
</div>
