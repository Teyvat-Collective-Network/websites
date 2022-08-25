<script>
  import Button from '../Button.svelte';

  export let form;
</script>

<div class="preview">
  <h2 class="name">{ form.name }</h2>
  <p class="description">{ form.description }</p>
  <div class="buttons">
    <Button on:click={() => window.location.hash = `/form/${form.id}`}>View</Button>
  </div>
</div>


<style>
  .preview {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-contrast);
    padding: 8px;
    box-sizing: border-box;
    border-radius: 4px;
    gap: 8px;
  }

  .description {
    white-space: pre-line;
    flex-grow: 1;
  }

  .buttons {
    display: flex;
    align-self: center;
    gap: 8px;
    margin-top: 8px;
  }
</style>