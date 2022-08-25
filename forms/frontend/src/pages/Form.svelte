<script>
  import api from '../api.js';

  import Submit from '../components/form/Form.svelte';
  import Editor from '../components/editor/Editor.svelte';

  const pages = {
    '': Submit,
    'submit': Submit,
    'edit': Editor,
  }

  export let path = [];
  let [id, page = ''] = path;
  $: [,page] = path;

  let form;
  api.forms.get(id).then(f => form = f);
</script>


{#if form?.canEdit}
  <nav>
    <a class:active={pages[page] === pages['submit']} href="#/form/{id}/submit">Submit</a>
    <a class:active={pages[page] === pages['edit']} href="#/form/{id}/edit">Edit</a>
  </nav>
{/if}

{#if form}
  <svelte:component this={pages[page]} {form}/>
{/if}


<style>
  nav {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;
  }

  nav a {
    padding: 16px 0px 12px;
    font-size: 24px;
    border-bottom: 4px solid transparent;
    transition: .15s;
  }

  nav a.active {
    color: var(--txt-contrast);
    border-bottom-color: var(--txt-contrast);
  }
</style>