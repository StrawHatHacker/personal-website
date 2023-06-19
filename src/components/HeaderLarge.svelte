<script>
  import LogoTwitter from "carbon-icons-svelte/lib/LogoTwitter.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
</script>

<header>
  <nav>
    <ul class="main-nav">
      <li>
        <a href="/">
          <img class="logo" src="/panos.png" width="60" height="60" alt="" />
        </a>
      </li>
      <li><a href="/works">Works</a></li>
      <li><a href="/works">Personal</a></li>
      <li><a href="open-source">Open Source</a></li>
    </ul>
    <ul class="social-nav">
      <li>
        <a href="https://twitter.com/xSkillers3"><LogoTwitter size={32} /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/panos-ntais/">
          <LogoLinkedin size={32} />
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: var(--section-width-desktop);
    margin: 1rem auto 0 auto;
    font-weight: 600;
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
  }

  @media screen and (max-width: 750px) {
    
  }
</style>
