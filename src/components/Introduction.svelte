<script lang="ts">
  import SoftwareResource from "carbon-icons-svelte/lib/SoftwareResource.svelte";
  import SoftwareResourceResource from "carbon-icons-svelte/lib/SoftwareResourceResource.svelte";

  export let thisElement: HTMLElement;
</script>

<section
  id="introduction"
  bind:this={thisElement}
  aria-labelledby="introduction-section"
>
  <h2 id="introduction-section-title" class="hidden">Introduction</h2>

  <section class="introduction" aria-labelledby="introduction-title">
    <h3 id="introduction-title" class="hidden">Introduction</h3>
    <p>
      Panos is a self-taught & self-motivated , web developer and designer with
      extensive knowledge of the front-end world.
    </p>
    <p>
      He has worked with popular front-end frameworks such as Next.js and
      SvelteKit but also with back-end libraries such as Express.js and
      Fastify.js.
    </p>
    <p>
      He has explored many other technologies such as Go, chatbots, and MongoDB.
    </p>
  </section>
  <section class="key-points" aria-labelledby="key-points-title">
    <h3 id="key-points-title" class="hidden">Key points</h3>
    <ul>
      <li>
        <SoftwareResource size={24} />
        <div>
          <h3>Mission</h3>
          <p>
            Has a mission of creating captivating and user-friendly websites.
          </p>
        </div>
      </li>
      <li>
        <SoftwareResourceResource size={24} />
        <div>
          <h3>Focus</h3>
          <p>
            Focuses on accessibility and perfomance for the best site
            experience.
          </p>
        </div>
      </li>
    </ul>
  </section>
</section>

<style>
  section#introduction {
    width: var(--section-width-desktop);
    margin: auto;
    scroll-margin: 50px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .key-points {
    width: 50%;
    & > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > li {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 1rem;
        & > div {
          width: 100%;
        }
      }
    }
  }

  .introduction {
    width: 50%;
    & > p {
      max-width: 50ch;
    }
  }

  @media screen and (max-width: 800px) {
    section#introduction {
      flex-direction: column;
      justify-content: center;
    }

    .key-points,
    .introduction {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    section#introduction {
      font-size: 0.85em;
    }
  }
</style>
