<script>
  import Input from '../../Input.svelte';

  export let field;
</script>


<Input type="text" bind:value={field.placeholder} placeholder="Placeholder"/>
<div class="constraints">  
  <Input type="number" bind:value={field.min_values} placeholder="Minimum values" min="0" max={field.max_values}/>
  <Input type="number" bind:value={field.max_values} placeholder="Maximum values" min={Math.max(1, field.min_values)}/>
</div>


<style>
  .constraints {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>