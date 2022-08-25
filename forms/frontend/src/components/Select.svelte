<script>
  import { createEventDispatcher } from 'svelte';
  import * as fzy from 'fzy.js';

  const dispatch = createEventDispatcher();

  export let options;
  export let value = options?.[0]?.value;

  let search = '';
  let open = false;
  
  let select;

  let top = 0;
  let left = 0;
  let width = 0;

  function changeSelection(val) {
    value = val;
    openOrClose(false);
    dispatch('input');
  }

  function openOrClose(state) {
    open = state ?? !open;
    onMove();
  }

  function onMove() {
    if (!open) return;
    const bb = select?.getBoundingClientRect();
    if (!bb) return;
    top = bb.top + bb.height;
    left = bb.left;
    width = bb.width;
  }
</script>


<svelte:window on:scroll={() => onMove()}/>

<div class="select" class:open={open} bind:this={select} on:click={() => openOrClose()}>
  <span class="fa-solid fa-chevron-{open ? 'down' : 'right'} arrow"></span> {options.find(option => option.value === value)?.name}
</div>

<div class="popup" style="
  display: {open ? 'flex' : 'none'};
  width: {width}px;
  top: {top}px;
  left: {left}px;
">
  <div class="header">
    <span class="fa-solid fa-magnifying-glass"></span>
    <input type="text" bind:value={search}>
  </div>
  <div class="options">
    {#each options
      .filter(option => fzy.hasMatch(search, `${option.name} ${option.value}`))
      .sort((a, b) => fzy.score(search, `${b.name} ${b.value}`) - fzy.score(search, `${a.name} ${a.value}`))
    as option}
      <div class="option" on:click={() => changeSelection(option.value)}>
        {option.name}
      </div>
    {/each}
  </div>
</div>


<style>
  .select {
    background-color: var(--bg-contrast);
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: .15s;
  }
  .select.open {
    border-radius: 4px 4px 0px 0px;
  }
  .select:not(.open):hover {
    background-color: var(--col-20);
  }

  .arrow {
    font-size: 12px;
    width: 12px;
    vertical-align: 1px;
    padding: 0px auto;
  }

  .popup {
    flex-direction: column;
    gap: 4px;
    position: fixed;
    background-color: var(--bg-contrast);
    max-height: 512px;
    padding: 6px 0px;
    box-sizing: border-box;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 0px 8px -2px #000;
    z-index: 10;
    clip-path: inset(0px -16px -16px -16px);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0px 12px;
  }

  input {
    width: 100%;
    background-color: var(--bg-main);
    margin: 0px;
    padding: 6px 12px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
    color: var(--txt-main);
    resize: none;
    transition: .15s;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
  }

  .option {
    padding: 4px 12px;
    cursor: pointer;
  }
  .option:hover {
    background-color: var(--col-20);
  }
</style>