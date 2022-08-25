<script>
  import Form from '../../../form.js';

  import Input from '../../Input.svelte';
  import Select from '../../Select.svelte';

  export let field;
  export let value = undefined;
</script>


<div class="options">
  {#if field.options.length <= 5}
    {#each Form.getFieldOptions(field) as option}
      <Input type="radio" bind:group={value} value={option.value} placeholder={option.name}/>
    {/each}
  {:else}
    <Select bind:value={value} options={Form.getFieldOptions(field)}/>
  {/if}
</div>


<style>
  .options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>