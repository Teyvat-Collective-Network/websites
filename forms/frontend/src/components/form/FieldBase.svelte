<script>
  export let field;
</script>


<div class="field">
  <h3 class="name">
    {field.name}
    {#if field.required}
      <span class="required">*</span>
    {/if}
  </h3>
  <i class="description">{field.description || ''}</i>
  <div class="input">
    <slot></slot>
  </div>
</div>


<style>
  .required {
    color: red;
  }

  .input {
    padding-top: 8px;
  }
</style>