<script>
  import Form from '../../form.js';

  import Input from '../Input.svelte';
  import Select from '../Select.svelte';

  export let field;
  export let form;
  export let update = () => {};
</script>


<div class="field">
  <div class="header">
    <span class="fa-solid fa-bars handle"></span>
    <div class="select">
      <Select options={Object.entries(Form.NAMES).map(entry => ({
        name: entry[1],
        value: parseInt(entry[0]),
      }))} bind:value={field.type} on:input={update}/>
    </div>
    <slot name="header"></slot>
  </div>
  
  {#if form.interactions}
    <Input type="text" bind:value={field.id} placeholder="Id"/>
  {/if}
  <Input type="checkbox" bind:checked={field.required} placeholder="Required"/>
  <h3><Input type="text" bind:value={field.name} placeholder="Name"/></h3>
  <i><Input type="textarea" rows="1" bind:value={field.description} placeholder="Description"/></i>

  <slot></slot>
</div>


<style>
  .header {
    display: flex;
    align-items: center;
    padding: 0px 8px;
    gap: 8px;
  }

  .handle {
    font-size: 24px;
    cursor: grab;
    transition: .15s;
  }

  .handle:hover {
    color: var(--col-main);
  }

  .select {
    flex-grow: 1;
  }

  .field {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid var(--bg-contrast);
    border-radius: 8px;
    padding: 16px;
  }
</style>