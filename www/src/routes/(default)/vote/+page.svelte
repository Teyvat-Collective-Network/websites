<script lang="ts">
    export let data: any;
</script>

<div class="container">
    <h2>Voting Center</h2>

    {#if data.observer}
        <a class="button" href="/vote/edit/new">Create Vote</a>
        <a class="button" href="/vote/activity-check">Vote Records</a>
    {/if}
</div>
