<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="container">
    <div id="main">
        <h1><b>{$page.status}</b> {$page.error?.message}</h1>
        <a href="/">&lt; Return to Home Page</a>
    </div>
</div>
