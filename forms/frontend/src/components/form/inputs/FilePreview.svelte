<script>
  export let file;

  function getHumanSize(bytes) {
    if (bytes < 1000) return `${bytes}B`;
    let thousands = 0;
    while (bytes >= 1000) {
      bytes /= 1000;
      thousands++;
    }
    return `${bytes.toFixed(1)}${' kMGTPEZY'[thousands]}B`;
  }
</script>


<div class="file">
  <b class="filename" title={file.name}>{file.name}</b>
  <i class="filesize">{getHumanSize(file.size)}</i>
  {#if file.type.startsWith('image/')}
    <img class="preview" src={URL.createObjectURL(file)} alt={file.name}>
  {:else}
    <span class="preview fa-regular fa-file"></span>
  {/if}
</div>


<style>
  .file {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4px;
    background-color: var(--bg-contrast);
    max-width: 192px;
    padding: 6px 12px;
    border-radius: 4px;
  }

  .filename {
    display: block;
    max-width: 192px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .preview {
    width: 192px;
    height: 192px;
    font-size: 192px;
    object-fit: cover;
    border-radius: 3px;
  }
</style>