<script>
  import Form from '../../form.js';
  import api from '../../api.js';

  import Settings from './Settings.svelte';
  import Preview from './Preview.svelte';
  import Body from './Body.svelte';
  import Button from '../Button.svelte';

  export let form;
</script>


<div class="editor">
  <Settings {form} update={() => form = form}/>
  {#if !(form.flags & Form.FLAGS.PRIVATE)}
    <Preview {form}/>
  {/if}
  {#if !(form.flags & Form.FLAGS.DYNAMIC)}
    <Body {form}/>
  {/if}
  <div class="buttons">
    <Button on:click={() => form._id ? api.forms.edit(form._id, form) : api.forms.create(form)}>Save</Button>
    <Button on:click={() => window.history.back()}>Cancel</Button>
  </div>
</div>


<style>
  .editor {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .buttons {
    display: flex;
    gap: 8px;
  }
</style>