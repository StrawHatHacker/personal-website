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
      <li><a href="/projects">Projects</a></li>
      <li><a href="/personal">Personal</a></li>
      <li><a href="open-source">Open Source</a></li>
    </ul>
    <div class="social-nav">
      <a href="https://twitter.com/xSkillers3"><LogoTwitter size={32} /></a>
      <a href="https://www.linkedin.com/in/panos-ntais/">
        <LogoLinkedin size={32} />
      </a>
    </div>
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

    & a {
      background-color: rgba(255, 255, 255, 0.1);
      width: 32px;
      height: 32px;
      padding: 0.2em;
      border-radius: 50%;
    }
  }
</style>
