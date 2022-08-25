<script>
  import Button from './Button.svelte';
</script>


<header>
  <div class="branding">
    <h1 on:click={() => window.location.hash = '/'}>TCN Forms</h1>
  </div>

  <Button on:click={() => alert('logging in')}>
    Log Out
  </Button>
</header>


<style>
  header {
    background-color: var(--bg-contrast);
    padding: 16px 64px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .branding {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .branding h1 {
    cursor: pointer;
  }
</style>