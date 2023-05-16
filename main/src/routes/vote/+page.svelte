<script lang="ts">
    export let data: any;
</script>

<div class="container">
    <h2>Voting Center</h2>

    {#if data.auth}
        <a class="button" href="/vote/edit/new"> Create Vote</a>
    {/if}
</div>
