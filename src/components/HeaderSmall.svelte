<script lang="ts">
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import MobileAudio from "carbon-icons-svelte/lib/MobileAudio.svelte";
  import UserProfile from "carbon-icons-svelte/lib/UserProfile.svelte";
  import Screen from "carbon-icons-svelte/lib/Screen.svelte";
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import Menu from "carbon-icons-svelte/lib/Menu.svelte";
  import { LogoGithub } from "carbon-icons-svelte";
  import { fade, fly } from "svelte/transition";
  import { page } from "$app/stores";

  let menuOpen = false;
  let showTooltip: boolean;

  $: {
    // Show tooltip if the user is not in the landing page
    showTooltip = $page.url.pathname !== "/";
  }
</script>

<div id="mock-header">
  <div style="position: relative;">
    <a href="/" class="logo-anchor">
      <img
        class="logo"
        src="/panos.png"
        loading="lazy"
        width="60"
        height="60"
        alt="Panos' avatar"
      />
    </a>
    {#if showTooltip}
      <div class="tooltip-up-left" in:fade={{ delay: 50, duration: 200 }}>
        Go to the main page
      </div>
    {/if}
  </div>
  <button on:click={() => (menuOpen = true)} class="open-button">
    <Menu size={32} />
  </button>
</div>

{#if menuOpen === true}
  <header transition:fly={{ duration: 300, x: "100%", opacity: 1 }}>
    <nav>
      <button on:click={() => (menuOpen = false)} class="close-button">
        <Close size={32} />
      </button>
      <div class="main-nav">
        <a href="/projects" on:click={() => (menuOpen = false)}>
          <Screen size={32} />
          <div>Projects</div>
        </a>
        <a href="/about" on:click={() => (menuOpen = false)}>
          <UserProfile size={32} />
          <div>About</div>
        </a>
        <a href="/" on:click={() => (menuOpen = false)}>
          <MobileAudio size={32} />
          <div>Contact me</div>
        </a>
        <div class="social-nav">
          <a href="https://github.com/StrawHatHacker" target="_blank"
            ><LogoGithub size={32} /></a
          >
          <a href="https://twitter.com/xSkillers3" target="_blank">
            <LogoTwitter size={32} />
          </a>
          <a href="https://www.linkedin.com/in/panos-ntais/" target="_blank">
            <LogoLinkedin size={32} />
          </a>
        </div>
      </div>
    </nav>
  </header>
{/if}

<style>
  header {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background: var(--color-secondary);
    position: fixed;
    z-index: 101;
    top: 0;
    right: -0%;
  }

  .logo-anchor {
    border-radius: 50%;
    width: 60px;
    height: 60px;

    &:focus-visible {
      outline: 2px solid white;
    }
  }

  .logo {
    border-radius: 50%;
  }

  #mock-header {
    z-index: 0;
    margin: 1rem 2rem 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    margin: 1.5rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .main-nav {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    & > * {
      width: 90px;
      min-width: 90px;
      height: 90px;
      flex: 0 1 auto;
      padding: 1rem;
      border: 2px solid white;
      border-radius: 10px;
      transition: background 0.2s ease;

      &:hover {
        background: var(--color-main);
      }

      &:focus-visible {
        outline: 2px solid white;
        outline-offset: -10px;
      }

      &:active {
        background: var(--color-gray);
      }
    }
  }

  .close-button {
    align-self: self-end;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 4px;

    &:hover {
      background-color: var(--color-main);
    }

    &:focus-visible {
      outline: 2px solid white;
    }
  }

  .open-button {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 4px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:focus-visible {
      outline: 2px solid white;
    }
  }

  .social-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem 0.3rem;
    flex-wrap: wrap;

    & a {
      flex: 0 1 0;
      background: rgba(255, 255, 255, 0.1);
      width: 32px;
      height: 32px;
      padding: 0.25em;
      border-radius: 50%;
      transition: all 0.2s ease;
      outline: 2px solid transparent;
      outline-offset: 0;

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
