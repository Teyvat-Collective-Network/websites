<script>
  import * as fzy from 'fzy.js';

  import FormGrid from '../components/list/Grid.svelte';
  import Button from '../components/Button.svelte';

  function formHasMatch(form, query) {
    return fzy.hasMatch(query, `${form.name} ${form.description}`)
  }

  function formScore(form, query) {
    return fzy.score(query, `${form.name} ${form.description}`)
  }

  let search = '';

  const forms = [
    {
      id: 'testiddoesntreallymatter',
      name: 'Form 1',
      description: 'this is some random test form',
      canSubmit: true,
      canEdit: true,
    },
    {
      id: 'testiddoesntreallymattereither',
      name: 'Form 2',
      description: 'this is some random test form',
      canSubmit: false,
      canEdit: true,
    },
    {
      id: 'testiddoesntreallymattertoo',
      name: 'Form 3',
      description: 'this is some random test form',
      canSubmit: true,
      canEdit: false,
    },
    {
      id: 'testiddoesntreallymattereithertoo',
      name: 'Form 4',
      description: 'this is some random test form',
      canSubmit: false,
      canEdit: false,
    },
    {
      id: 'partners',
      name: 'Teyvat Collective Network Partnership Form',
      description: 'Please complete and submit this form if you would like your server to be considered for membership in the Teyvat Collective.',
      canSubmit: true,
      canEdit: true,
    },
    {
      id: 'banshare',
      name: 'Banshare Form',
      description: 'Please fill in this form if you want a user to be added to the TC Banlist.',
      canSubmit: true,
      canEdit: true,
    }
  ]
</script>


<div class="header">
  <input type="text" placeholder="Search.." bind:value={search}>
  <Button on:click={() => window.location.hash = '/form/new/edit'}>New Form</Button>
</div>

<FormGrid forms={
  forms
    .filter(f => formHasMatch(f, search))
    .sort((a, b) => formScore(b, search) - formScore(a, search))
}/>


<style>
  .header {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  input {
    min-width: 0px;
    flex-grow: 1;
    background-color: var(--bg-contrast);
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 20px;
    padding: 8px 16px;
    color: var(--txt-main);
  }
</style>