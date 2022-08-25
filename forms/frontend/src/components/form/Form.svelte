<script>
  import Form from '../../form.js';

  import Header from './Header.svelte';
  import FieldBase from './FieldBase.svelte';
  import Button from '../Button.svelte';
  import Inputs from './Inputs.js';

  export let form;
</script>


<div class="form">
  <Header {form}/>
  <div class="fields">
    {#each form.body.fields as field}
      <FieldBase {field}>
        <svelte:component this={Inputs[field.type]} {field} bind:value={field.value}/>
      </FieldBase>
    {/each}
  </div>
  <Button disabled={!form.canSubmit} on:click={async () => console.log(await Form.getValueTree(form.body.fields))}>Submit</Button>
</div>


<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>