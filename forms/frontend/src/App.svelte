<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import List from './pages/List.svelte';
  import Form from './pages/Form.svelte';

  const pages = {
    '': List,
    forms: List,
    form: Form,
  }

  let path = window.location.hash.slice(1);

  window.onpopstate = function () {
    path = window.location.hash.slice(1);
  }

  $: [,page = '', ...parts] = path.split('/');
</script>


<Header/>
<main>
  <svelte:component this={pages[page]} path={parts}/>
  <Footer/>
</main>


<style>
  main {
    max-width: 1280px;
    margin: 32px auto;
    padding: 0px 64px;
    box-sizing: border-box;
  }
</style>