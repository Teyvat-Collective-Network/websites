<script>
  let theme = 'dark';
</script>


<svelte:head>
  <link rel="stylesheet" href="styles/{theme}.css">
</svelte:head>

<footer>
  <p>
    &copy; 2022
    <a target="_blank" href="https://github.com/msbukkuri">Swiftfyre</a>,
    <a target="_blank" href="https://github.com/AroLeaf">AroLeaf</a>
  </p>
</footer>


<style>
  footer {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: end;
    margin: 16px 0px;
  }
</style>