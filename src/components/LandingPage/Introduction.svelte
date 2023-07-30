<script lang="ts">
  import SoftwareResource from "carbon-icons-svelte/lib/SoftwareResource.svelte";
  import SoftwareResourceResource from "carbon-icons-svelte/lib/SoftwareResourceResource.svelte";
  import Seperator from "../Seperator.svelte";
  import Intersect from "../Custom/Intersect.svelte";
  import { fly } from "svelte/transition";

  let thisIntro: HTMLElement;
  let thisElement2: HTMLElement;
</script>

<div class="seperator">
  <Seperator node={thisIntro} />
</div>

<section
  id="introduction"
  bind:this={thisIntro}
  aria-labelledby="introduction-section-title"
>
  <h2 id="introduction-section-title" class="hidden">Introduction</h2>

  <div
    class="introduction"
    aria-labelledby="introduction-title"
    style="height:70vh"
  >
    <p>
      I'm a self-taught & self-motivated, web developer and designer with an
      extensive knowledge of the front-end world.
      <br />
      <br />
      I have worked with popular front-end frameworks such as Next.js and SvelteKit
      but also with back-end libraries like Express.js and Fastify.js.
      <br />
      <br />
      Throught the years I have explored many technologies such as Go, Flutter, and
      AI.
    </p>
  </div>
</section>

<div class="seperator">
  <Seperator node={thisElement2} />
</div>

<section
  id="points"
  bind:this={thisElement2}
  aria-labelledby="points-section-title"
>
  <h2 id="points-section-title" class="hidden">Points</h2>

  <div class="points">
    <div>
      <Intersect element={thisElement2}>
        <h3 transition:fly|local={{ duration: 1500, x: -300 }}>
          <SoftwareResource size={24} /> Mission
        </h3>
      </Intersect>
      <Intersect element={thisElement2}>
        <p transition:fly|local={{ duration: 1500, x: 300 }}>
          I have a mission of creating captivating and user-friendly websites.
        </p>
      </Intersect>
    </div>
    <div>
      <Intersect element={thisElement2}>
        <h3 transition:fly|local={{ duration: 1500, x: -300 }}>
          <SoftwareResourceResource size={24} /> Focus
        </h3>
      </Intersect>
      <Intersect element={thisElement2}>
        <p transition:fly|local={{ duration: 1500, x: 300 }}>
          With a focus on accessibility and perfomance for the best site
          experience.
        </p>
      </Intersect>
    </div>
    <div>
      <Intersect element={thisElement2}>
        <h3 transition:fly|local={{ duration: 1500, x: -300 }}>
          <SoftwareResourceResource size={24} /> Dedication
        </h3>
      </Intersect>
      <Intersect element={thisElement2}>
        <p transition:fly|local={{ duration: 1500, x: 300 }}>
          From an idea to a website, I can design, develop and bring anything to
          life.
        </p>
      </Intersect>
    </div>
  </div>
</section>

<style>
  section#introduction,
  section#points {
    width: var(--section-width-desktop);
    margin: auto;
    /* scroll-margin: 50px; */
    line-height: 1.45;
    font-size: 1.4rem;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
      max-width: 40ch;
      text-wrap: balance;
    }
  }

  .points {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem 8rem;
      & > p {
        max-width: 30ch;
        text-wrap: balance;
      }
    }
  }

  .seperator {
    height: 30vh;
  }

  h3 {
    font-weight: 100;
    font-size: 2rem;
  }

  @media screen and (max-width: 1100px) {
    .points > div {
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    section#introduction,
    section#points {
      width: var(--section-width-mobile);
      font-size: 1.1rem;
    }

    h3 {
      font-weight: 100;
      font-size: 1.4rem;
    }
  }
</style>
