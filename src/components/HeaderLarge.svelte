<script lang="ts">
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import MainLink from "./Buttons/MainLink.svelte";
  import { LogoGithub } from "carbon-icons-svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  let showTooltip: boolean;

  $: {
    // Show tooltip if the user is not in the landing page
    showTooltip = $page.url.pathname !== "/";
  }
</script>

<header>
  <nav>
    <ul class="main-nav">
      <li style="position:relative;">
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
          <div class="tooltip-up-left" in:fade={{ duration: 100 }}>
            Go to the main page
          </div>
        {/if}
      </li>
      <li><MainLink href="/projects" text="Projects" /></li>
      <li><MainLink href="/about" text="About" /></li>
      <li><MainLink href="/contact" text="Contact me" /></li>
    </ul>
    <div class="social-nav">
      <a href="https://github.com/StrawHatHacker" target="_blank"><LogoGithub size={32} /></a>
      <a href="https://twitter.com/xSkillers3"><LogoTwitter size={32} /></a>
      <a href="https://www.linkedin.com/in/panos-ntais">
        <LogoLinkedin size={32} />
      </a>
    </div>
  </nav>
</header>

<style>
  header {
    width: var(--section-width-desktop);
    margin: 1rem auto 0 auto;
    height: 80px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .logo-anchor {
    &:focus-visible {
      outline: 2px solid white;
    }
  }

  .logo {
    border-radius: 50%;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .social-nav {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    & a {
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
