<script lang="ts">
  import { onMount } from "svelte";
  import Typewriter from "../Custom/Typewriter.svelte";

  let nameEl: HTMLElement, surnameEl: HTMLElement;

  function createFancyText(element: HTMLElement) {
    const text = element.innerText;
    element.innerText = "";
    for (const letter of text) {
      const span = document.createElement("span");
      span.className = "fancy-letter";
      span.innerText = letter;
      element.appendChild(span);
    }
  }

  onMount(() => {
    createFancyText(nameEl);
    createFancyText(surnameEl);
  });
</script>

<section aria-labelledby="full-name">
  <main>
    <h1 id="full-name">
      <span bind:this={nameEl} id="name" class="fancy-text">Panos</span>
      <span bind:this={surnameEl} id="surname" class="fancy-text">Ntais</span>
    </h1>

    <img
      id="main-img"
      src="/developer.svg"
      width="900"
      alt="A developer thinking with their laptop open"
    />
  </main>

  <p>
    <Typewriter text="A supercharged web developer and designer." />
    <span class="hidden">A supercharged web developer and designer.</span>
  </p>
</section>

<style>
  main {
    width: var(--section-width-desktop);
    margin: 100px auto 0 auto;
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    user-select: none;
  }

  #main-img {
    width: 50%;
    max-width: 1000px;
    min-width: 300px;
    height: auto;
  }

  h1 {
    font-size: 6rem;
    font-weight: 900;
    scale: 1.2 1;
    font-family: "Allerta Stencil", sans-serif;
    transform-origin: 0;
    line-height: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;

    &::after {
      content: "he/him";
      font-family: "Kanit", sans-serif;
      font-size: 0.7rem;
      scale: 0.8 1;
      font-weight: normal;
      transform-origin: 0;
      position: absolute;
      bottom: 0.8em;
      left: 22.5em;
    }
  }

  p {
    text-align: center;
    width: var(--section-width-mobile);
    margin: 4rem auto 0 auto;
    font-size: 2rem;
    user-select: none;
  }

  #surname {
    opacity: 0.5;
  }

  @media screen and (max-width: 1100px) {
    main {
      margin-top: 60px;
      flex-direction: column;
      gap: 3rem;
      scale: 1 1;
    }

    h1 {
      font-size: 4rem;
      transform-origin: center;
      text-align: center;
    }

    h1::after {
      bottom: -1.2em;
      left: 50%;
      translate: -50% 0;
    }

    #main-img {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    main {
      margin-top: 40px;
    }
    p {
      font-size: 1.3rem;
      margin-top: 2rem;
    }
  }
</style>
