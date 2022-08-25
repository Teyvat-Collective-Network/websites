<script>
import { element } from 'svelte/internal';

  import Form from '../../form.js';
  
  import Input from '../Input.svelte';

  export let form;
  export let update = () => {};

  let DYNAMIC = form.flags & Form.FLAGS.DYNAMIC;
  let PRIVATE = form.flags & Form.FLAGS.PRIVATE;

  function setFlag(flag, value) {
    form.flags = value ? form.flags | flag : form.flags & ~flag;
    update();
  }
</script>


<div class="preview">
  <h2>Settings</h2>
  <i>Non-content settings</i>
  
  <h3>Id</h3>
  <i>A custom unique identifier for this form</i>
  <Input type="text" bind:value={form.id}/>

  <h3>Interactions URL</h3>
  <i>A URL to send submissions to, instead of the default server</i>
  <Input type="text" bind:value={form.interactions} on:input={update} placeholder="leave empty if unsure"/>
  
  <h3>Private</h3>
  <Input type="checkbox" bind:checked={PRIVATE} on:input={() => setFlag(Form.FLAGS.PRIVATE, !PRIVATE)} placeholder="Allow only people who can submit to view this form, and hide it from the homepage"/>

  <h3>Dynamic</h3>
  <Input type="checkbox" bind:checked={DYNAMIC} on:input={() => setFlag(Form.FLAGS.DYNAMIC, !DYNAMIC)} placeholder="Request the form from the interactions URL"/>
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