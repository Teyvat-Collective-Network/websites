<script>
  import Input from '../../Input.svelte';

  export let field;
  export let value = false;
</script>


<Input type="checkbox" bind:checked={value} placeholder={field.placeholder}/>