<script>
  export let form;
</script>


<div class="info">
  <i class="owner">Owned by {form.owner}</i>
  <h2 class="name">{form.body.title}</h2>
  <p class="description">{form.body.description || ''}</p>
</div>


<style>
  .owner {
    display: block;
    padding-bottom: 8px;
  }
</style>