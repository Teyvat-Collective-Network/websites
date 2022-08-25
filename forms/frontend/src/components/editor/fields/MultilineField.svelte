<script>
  import Input from '../../Input.svelte';

  export let field;
</script>


<Input type="text" bind:value={field.placeholder} placeholder="Placeholder"/>
<div class="constraints">
  <Input type="number" bind:value={field.min_length} placeholder="Minimum length" min="0" max={field.max_length}/>
  <Input type="number" bind:value={field.max_length} placeholder="Maximum length" min={Math.max(1, field.min_length)}/>
</div>


<style>
  .constraints {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>