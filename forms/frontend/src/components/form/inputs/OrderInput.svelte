<script>
  import Sortable from 'sortablejs';
  import Form from '../../../form.js';

  export let field;
  export let value = Form.getFieldOptions(field).map(o => o.value);
  let items;

  $: items && new Sortable(items, {
    animation: 150,
    onEnd(e) {
      arrayMove(value, e.oldIndex, e.newIndex);
    }
  });

  function arrayMove(array, from, to) {
    if (from === to) return array;
    const moved = array[from];
    const direction = Math.min(Math.max(-1, to - from), 1);
    for (let i = from; direction > 0 ? i < to : i > to; i += direction) {
      array[i] = array[i + direction]
    }
    array[to] = moved;
    return array;
  }
</script>


<div class="items" bind:this={items}>
  {#each Form.getFieldOptions(field) as item, i}
    <div class="item" data-id={i}>{item.name}</div>
  {/each}
</div>


<style>
  .items {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    cursor: grab;
    transition: background-color .15s;
  }

  .item:hover {
    background-color: var(--col-20);
  }
</style>