<script lang="ts">
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import MainLink from "./Buttons/MainLink.svelte";

  export let hidden = false;
</script>

<header class:hidden>
  <nav>
    <ul class="main-nav">
      <li>
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
      </li>
      <li><MainLink href="/projects" text="Projects" /></li>
      <li><MainLink href="/" text="Open Source" /></li>
      <li><MainLink href="/" text="Contact" /></li>
    </ul>
    <div class="social-nav">
      <a href="https://twitter.com/xSkillers3"><LogoTwitter size={32} /></a>
      <a href="https://www.linkedin.com/in/panos-ntais/">
        <LogoLinkedin size={32} />
      </a>
    </div>
  </nav>
</header>

<div
  class:hidden={!hidden}
  style="width:100%;height:80px;margin: 1rem auto 0 auto;"
/>

<style>
  header {
    width: var(--section-width-desktop);
    margin: 1rem auto 0 auto;
    font-weight: 600;
    height: 80px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .logo {
    border-radius: 50%;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .social-nav {
    display: flex;
    align-items: center;
    gap: 1rem;

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
