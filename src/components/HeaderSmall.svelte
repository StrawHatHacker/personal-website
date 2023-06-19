<script>
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import Menu from "carbon-icons-svelte/lib/Menu.svelte";
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import { fly } from "svelte/transition";

  let menuOpen = false;
</script>

<div id="mock-header">
  <a href="/">
    <img class="logo" src="/panos.png" width="60" height="60" alt="" />
  </a>

  <button on:click={() => (menuOpen = true)}>
    <Menu size={32} />
  </button>
</div>

{#if menuOpen === true}
  <header transition:fly={{ duration: 300, x: "100%", opacity: 1 }}>
    <nav>
      <ul class="main-nav">
        <li><a href="/works">Works</a></li>
        <li><a href="/works">Personal</a></li>
        <li><a href="open-source">Open Source</a></li>
      </ul>
      <button on:click={() => (menuOpen = false)} class="close-button">
        <Close size={32} />
      </button>
    </nav>

    <div class="social-nav">
      <a href="https://twitter.com/xSkillers3"><LogoTwitter size={32} /></a>
      <a href="https://www.linkedin.com/in/panos-ntais/">
        <LogoLinkedin size={32} />
      </a>
    </div>
  </header>
{/if}

<style>
  header {
    width: 100vw;
    height: 100vh;
    background-color: rgb(63, 24, 153);
    position: fixed;
    z-index: 1;
    top: 0;
    right: -0%;
  }

  .close-button {
    align-self: self-start;
  }

  .logo {
    border-radius: 50%;
  }

  #mock-header {
    z-index: 0;
    margin: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    margin: 1.5rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-nav {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .social-nav {
    width: fit-content;
    margin: 2rem auto;
  }
</style>
