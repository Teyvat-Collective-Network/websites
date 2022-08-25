<script>
  import Input from '../../Input.svelte';

  export let field;
  export let value = '';
</script>


<Input type="text" bind:value={value} placeholder={field.placeholder}/>