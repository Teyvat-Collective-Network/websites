<script>
  import Button from '../../Button.svelte';
  import FilePreview from './FilePreview.svelte';

  export let field;
  export const value = async () => {
    const out = [];
    for (const file of files) {
      out.push({
        name: file.name,
        data: await blobToBase64(file)
      });
    }
    return out;
  }

  let files = [];

  function blobToBase64(blob) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    });
  }
</script>


<div class="files">
  {#each files as file}
    <FilePreview {file}/>
  {/each}
</div>
<div class="buttons">
  <label>
    <input type="file" multiple={field.max_files !== 1} bind:files={files}>
    <Button>Choose File{field.max_files !== 1 ? 's' : ''}</Button>
  </label>
  {#if files.length}
    <Button on:click={() => files = []}>Clear</Button>
  {/if}
</div>


<style>
  .files {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  input {
    display: none;
  }

  .buttons {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
</style>