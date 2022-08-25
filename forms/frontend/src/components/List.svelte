<script>
  import Sortable from 'sortablejs';

  export let value = [];
  export let placeholder;
  export let max;
  let items;

  $: sortable = items && new Sortable(items, {
    animation: 150,
    handle: '.handle',
    onEnd(e) {
      arrayMove(value, e.oldIndex, e.newIndex);
      value = value;
      sortable.sort(sortable.toArray().sort((a,b) => Number(a) - Number(b)), false);
    }
  });

  function arrayMove(array, from, to) {
    if (from === to) return array;
    const moved = array[from];
    const direction = Math.min(Math.max(-1, to - from), 1);
    for (let i = from; direction > 0 ? i < to : i > to; i += direction) {
      console.log(array[i], array[i + direction]);
      array[i] = array[i + direction]
    }
    array[to] = moved;
    return array;
  }

  function add() {
    if (max >= value.length) return;
    value.push('');
    value = value;
  }

  function remove(i) {
    value.splice(i, 1);
    value = value;
  }
</script>


<div class="list">
  <div class="items" class:gap={value.length} bind:this={items}>
    {#each value as _, i}
      <div class="item" data-id={i}>
        <span class="fa-solid fa-bars handle"></span>
        <input type="text" bind:value={value[i]} {placeholder}>
        <span class="fa-solid fa-xmark cross" on:click={() => remove(i)}></span>
      </div>
    {/each}
  </div>
  <div class="add" on:click={add}>
    <span class="fa-solid fa-plus"></span> Add Item
  </div>
</div>


<style>
  .items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 256px;
    overflow-y: auto;
  }

  .items.gap {
    margin-bottom: 8px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--bg-contrast);
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 4px;
  }

  input {
    min-width: 0px;
    flex-grow: 1;
    background-color: transparent;
    padding: 0px;
    border: none;
    outline: none;
    color: var(--txt-main);
    font-family: inherit;
    font-size: 16px;
    transition: .15s;
  }

  .handle {
    font-size: 20px;
    cursor: grab;
    transition: .15s;
  }
  .handle:hover {
    color: var(--col-main);
  }

  .cross {
    font-size: 20px;
    cursor: pointer;
    transition: .15s;
  }
  .cross:hover {
    color: red;
  }

  .add {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--bg-contrast);
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    transition: .15s;
  }

  .add:hover {
    background-color: var(--col-20);
  }

  .add .fa-plus {
    font-size: 20px;
  }
</style>