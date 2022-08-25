<script>
  import Sortable from 'sortablejs';
  import Form from '../../form.js';
  
  import Input from '../Input.svelte';
  import Button from '../Button.svelte';
  import FieldBase from './FieldBase.svelte';
  import Fields from './Fields.js';

  export let form;
  let fields;
  $: fields && new Sortable(fields, {
    handle: '.handle',
    animation: 150,
    onEnd(e) {
      arrayMove(form.body.fields, e.oldIndex, e.newIndex);
    }
  });

  function arrayMove(array, from, to) {
    if (from === to) return array;
    const moved = array[from];
    const direction = Math.min(Math.max(-1, to - from), 1);
    for (let i = from; direction > 0 ? i < to : i > to; i += direction) {
      array[i] = array[i + direction]
    }
    array[to] = moved;
    return array;
  }
</script>


<div class="body">
  <h2>Form</h2>
  <i>The actual form</i>
  
  <h3><Input type="text" bind:value={form.body.title} placeholder="Title"/></h3>
  <Input type="textarea" rows="4" bind:value={form.body.description} placeholder="Description"/>

  <div class="fields outer">
    <h2>Fields</h2>
    <div class="fields" bind:this={fields}>
      {#each form.body.fields as field, i}
        <div class="field" data-id={i}>
          <FieldBase {field} {form} update={() => form = form}>
            <span class="fa-solid fa-xmark remove" slot="header" on:click={() => (form.body.fields.splice(i, 1), form = form)}></span>
            <svelte:component this={Fields[field.type]} {field}/>
          </FieldBase>
        </div>
      {/each}
    </div>
    <Button on:click={() => (form.body.fields.push(Form.empty.field()), form = form)}>New Field</Button>
  </div>
</div>


<style>
  .body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border: 2px solid var(--bg-contrast);
    border-radius: 8px;
    padding: 16px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .fields.outer {
    margin-top: 16px;
  }

  .remove {
    font-size: 24px;
    cursor: pointer;
    transition: .15s;
  }
  .remove:hover {
    color: red;
  }
</style>