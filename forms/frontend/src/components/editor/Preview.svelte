<script>
  import Input from '../Input.svelte';

  export let form;
</script>


<div class="preview">
  <h2>Preview</h2>
  <i>Short info for on the homepage</i>
  
  <h3>Name</h3>
  <Input type="text" bind:value={form.name}/>
  
  <h3>Description</h3>
  <Input type="textarea" rows="3" bind:value={form.description}/>
</div>


<style>
  .preview {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border: 2px solid var(--bg-contrast);
    border-radius: 8px;
    padding: 16px;
  }
</style>