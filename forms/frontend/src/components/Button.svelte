<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let disabled = false;
</script>


<div class="button" class:disabled={disabled} on:click={() => !disabled && dispatch('click')}>
  <slot></slot>
</div>


<style>
  .button {
    width: fit-content;
    padding: 12px 24px;
    border-radius: 4px;
    background-color: var(--col-main);
    color: #fff;
    cursor: pointer;
    transition: .15s;
  }
  .button:not(.disabled):hover {
    background-color: var(--col-50);
  }

  .button.disabled {
    cursor: not-allowed;
    color: #ccc;
  }
</style>