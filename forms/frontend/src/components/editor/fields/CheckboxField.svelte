<script>
  import Input from '../../Input.svelte';

  export let field;
</script>

<Input type="text" bind:value={field.placeholder} placeholder="Placeholder"/>