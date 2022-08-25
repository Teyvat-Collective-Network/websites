<script>
  import autosize from 'svelte-autosize';

  export let type;
  export let value = undefined;
  export let placeholder = '';
  export let hidden = false;

  // text
  export let minlength = 0;
  export let maxlength = Infinity;
  
  export let rows = 4;

  // number
  export let min = 0;
  export let max = Infinity;
  export let step = 1;

  //checkbox
  export let checked = false;

  // radio
  export let group = undefined;
</script>


{#if type === 'text'}
  <input type="text" class:hidden={hidden} bind:value={value} on:input {placeholder} {minlength} {maxlength}>

{:else if type === 'textarea'}
  <textarea use:autosize class:hidden={hidden} bind:value={value} on:input {placeholder} {rows} {minlength} {maxlength}></textarea>

{:else if type === 'number'}
  <input type="number" class:hidden={hidden} bind:value={value} on:input {placeholder} {min} {max} {step}>

{:else if type === 'checkbox'}
  <label class="checkbox" class:hidden={hidden}>
    <span class="fa-regular fa-square{checked ? '-check' : ''} box"></span>
    {placeholder}
    <input type="checkbox" bind:checked={checked} on:input>
  </label>

{:else if type === 'radio'}
  <label class="radio" class:hidden={hidden}>
    <span class="fa-regular fa-circle{group === value ? '-dot' : ''} dot"></span>
    {placeholder}
    <input type="radio" bind:group={group} on:input {value}>
  </label>

{/if}


<style>
  input, textarea {
    width: 100%;
    background-color: var(--bg-contrast);
    margin: 0px;
    padding: 6px 12px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    color: var(--txt-main);
    resize: none;
    appearance: textfield;
    transition: .15s;
  }

  :is(input, textarea).hidden:not(:focus) {
    background-color: transparent;
  }

  .checkbox, .radio {
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: var(--bg-contrast);
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: .15s;
  }

  .checkbox:hover, .radio:hover {
    background-color: var(--col-20);
  }

  input[type=checkbox], input[type=radio] {
    display: none;
  }

  .box {
    color: var(--col-main);
    font-size: 20px;
  }
  .dot {
    color: var(--col-main);
    font-size: 16px;
  }
</style>