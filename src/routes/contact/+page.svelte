<script lang="ts">
  import {
    Email,
    ApplicationMobile,
    LogoDiscord,
    LogoLinkedin,
    LogoTwitter,
    LogoGithub,
    Copy,
  } from "carbon-icons-svelte";
  import ScrollToTop from "../../components/Custom/ScrollToTop.svelte";
  import { onMount } from "svelte";
  import CopyButton from "../../components/Custom/CopyButton.svelte";

  const email = ["n", "t", "a", "h", "s", "p"];
  const phone = ["77", "44", "17", "19"];

  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    target.style.setProperty("--mouse-x", x + "px");
    target.style.setProperty("--mouse-y", y + "px");
  }

  onMount(() => {
    const cards = document.querySelectorAll<HTMLElement>(".contact-item");

    cards.forEach((c) => (c.onmousemove = (e) => handleMouseMove(e)));
  });
</script>

<ScrollToTop />

<section aria-labelledby="about-title">
  <h2 id="about-title">Contact me</h2>

  <div id="contact-me-container">
    <a
      class="contact-item"
      href={`mailto:${email.join("")}@gmail.com?subject=Subject&body=Hi`}
      target="_blank"
    >
      <Email size={40} />
      <h3>Email me</h3>
      <span>
        {email.join("") + "@gmail.com"}
        <CopyButton text={email.join("") + "@gmail.com"} />
      </span>
    </a>
    <a class="contact-item" href={`tel:+30694${phone.join("")}`}>
      <ApplicationMobile size={40} />
      <h3>Call me</h3>
      <span>
        {"+30 69" + phone.join("")}
        <CopyButton text={email.join("") + "@gmail.com"} />
      </span>
    </a>
    <div class="contact-item">
      <LogoDiscord size={40} />
      <h3>Let's chat</h3>
      <span>Skillers3 <CopyButton text={"Skillers3"} /></span>
    </div>
    <a
      class="contact-item"
      href="https://www.linkedin.com/in/panos-ntais"
      target="_blank"
    >
      <LogoLinkedin size={40} />
      <h3>Connect with me</h3>
    </a>
    <a
      class="contact-item"
      href="https://twitter.com/xSkillers3"
      target="_blank"
    >
      <LogoTwitter size={40} />
      <h3>Follow my Twitter</h3>
    </a>
    <a
      class="contact-item"
      href="https://github.com/StrawHatHacker"
      target="_blank"
    >
      <LogoGithub size={40} />
      <h3>View my Open-Source</h3>
    </a>
  </div>
</section>

<style>
  section {
    width: var(--section-width-desktop);
    margin: 2rem auto;
  }

  h2 {
    margin: 1rem 0 2rem 0;
  }

  h3 {
    font-weight: 400;
  }

  span {
    padding: 0.1em 0.2em;
    display: flex;
    justify-content: center;
    gap: 0.5em;
  }

  #contact-me-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 5rem;
  }

  .contact-item {
    border: 2px solid white;
    border-radius: 10px;
    height: 200px;
    min-width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1 1 26%;
    position: relative;
    z-index: 1;
    isolation: isolate;
  }

  .contact-item::before {
    content: "";
    border-radius: inherit;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -100;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.3s;
    background: radial-gradient(
      700px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.08),
      transparent 40%
    );
  }

  .contact-item:hover:before {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    section {
      width: var(--section-width-mobile);
      font-size: 0.9rem;
    }
  }
</style>
