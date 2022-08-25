<script>
  import Form from './Form.svelte';

  export let forms = [];
</script>


<div class="grid">
  {#each forms as form }
    <Form {form}/>
  {/each}
</div>


<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media screen and (min-width: 720px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1280px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>