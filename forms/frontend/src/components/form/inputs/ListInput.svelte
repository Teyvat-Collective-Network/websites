<script>
  import List from '../../List.svelte';

  export let field;
  export let value = [];
</script>


<List bind:value={value} placeholder={field.placeholder} max={field.max_values}/>
