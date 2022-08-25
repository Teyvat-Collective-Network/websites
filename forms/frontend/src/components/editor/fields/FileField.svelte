<script>
  import Input from '../../Input.svelte';

  export let field;
</script>


<div class="constraints">
  <Input type="number" bind:value={field.min_files} placeholder="Minimum files" min="0" max={field.max_files}/>
  <Input type="number" bind:value={field.max_files} placeholder="Maximum files" min={Math.max(1, field.min_fiels)}/>

  <Input type="number" bind:value={field.min_size} placeholder="Minimum total size (bytes)" min="0" max={field.max_size}/>
  <Input type="number" bind:value={field.max_size} placeholder="Maximum total size (bytes)" min={Math.max(1, field.min_size)}/>
</div>


<style>
  .constraints {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>