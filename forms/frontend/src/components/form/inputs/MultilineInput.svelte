<script>
  import Input from '../../Input.svelte';
  
  export let field;
  export let value = '';
</script>


<Input type="textarea" bind:value={value} rows="4" placeholder={field.placeholder}/>