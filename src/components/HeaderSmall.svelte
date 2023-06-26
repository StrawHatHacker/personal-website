<script>
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import MobileAudio from "carbon-icons-svelte/lib/MobileAudio.svelte";
  import Idea from "carbon-icons-svelte/lib/Idea.svelte";
  import Screen from "carbon-icons-svelte/lib/Screen.svelte";
  import Menu from "carbon-icons-svelte/lib/Menu.svelte";
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import { fly } from "svelte/transition";

  let menuOpen = false;
</script>

<div id="mock-header">
  <a href="/">
    <img
      class="logo"
      src="/panos.png"
      loading="lazy"
      width="60"
      height="60"
      alt=""
    />
  </a>

  <button on:click={() => (menuOpen = true)}>
    <Menu size={32} />
  </button>
</div>

{#if menuOpen === true}
  <header transition:fly={{ duration: 300, x: "100%", opacity: 1 }}>
    <nav>
      <button on:click={() => (menuOpen = false)} class="close-button">
        <Close size={32} />
      </button>
      <ul class="main-nav">
        <li>
          <a href="/">
            <Screen size={32} />
            <div>Projects</div>
          </a>
        </li>
        <li>
          <a href="/">
            <Idea size={32} />
            <div>Open Source</div>
          </a>
        </li>
        <li>
          <a href="/">
            <MobileAudio size={32} />
            <div>Contact</div>
          </a>
        </li>
        <li>
          <div class="social-nav">
            <a href="https://twitter.com/xSkillers3">
              <LogoTwitter size={32} />
            </a>
            <a href="https://www.linkedin.com/in/panos-ntais/">
              <LogoLinkedin size={32} />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
{/if}

<style>
  header {
    width: 100vw;
    height: 100vh;
    background: var(--color-secondary);
    position: fixed;
    z-index: 1;
    top: 0;
    right: -0%;
  }

  .close-button {
    align-self: self-end;
    margin-right: 1rem;
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
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .main-nav {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    & > li {
      width: 90px;
      height: 90px;
      flex: 0 1 auto;
      padding: 1rem;
      border: 2px solid white;
      border-radius: 10px;
    }
  }

  .social-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & a {
      background: rgba(255, 255, 255, 0.1);
      width: 32px;
      height: 32px;
      padding: 0.25em;
      border-radius: 50%;
      transition: all 0.2s ease;

      &:focus-visible {
        outline: 2px solid white;
      }

      &:hover {
        opacity: 0.8;
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
</style>
