<script>
  import List from '../../List.svelte';

  export let field;
  if (field.options.some(i => typeof i === 'object')) field.options = field.options.map(i => i.name);
</script>


<div class="options">
  <List bind:value={field.options} placeholder="item.."/>
</div>


<style>
  .options {
    margin-top: 4px;
  }
</style>