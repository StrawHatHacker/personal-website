<script lang="ts">
  export let thisElement: HTMLElement;
</script>

<section
  id="projects"
  aria-labelledby="projects-section-title"
  bind:this={thisElement}
>
  <h2 id="projects-section-title" class="hidden">Projects</h2>

  <ul class="project-container">
    <li>
      <span>REST API</span>
      <h3 style="--c:#1761e1">OtakuGIFs</h3>
      <p>Free REST API that serves animated GIFs as reactions.</p>
      <a href="/projects/otakugifs">Learn More</a>
    </li>
    <li>
      <span>Website</span>
      <h3 style="--c:#a63dcf">Kouhai</h3>
      <p>Utilities for every day use.</p>
      <a href="/projects/kouhai">Learn More</a>
    </li>
    <li>
      <span>Chatbot</span>
      <h3 style="--c:#e05477">Shiro</h3>
      <p>Multipurpose chatbot for Discord.</p>
      <a href="/projects/shiro">Learn More</a>
    </li>
    <li>
      <span>Bash Scripts</span>
      <h3 style="--c:#89e051">UsefulScripts</h3>
      <p>Free REST API that serves animated GIFs as reactions.</p>
      <a href="/projects/usefulscripts">Learn More</a>
    </li>
  </ul>
</section>

<style>
  section#projects {
    width: var(--section-width-desktop);
    margin: auto;
    scroll-margin: 20px;
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }

  li {
    border: 2px solid white;
    border-radius: 10px;
    padding: 2rem;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: 100%;

    & > span {
      font-size: 0.7rem;
    }

    & > h3 {
      color: var(--c);
    }

    & > p {
      font-size: 0.9em;
    }

    & > a {
      border: 2px solid rgb(255, 255, 255);
      border-radius: 6px;
      width: fit-content;
      padding: 0.4em 0.5em;
      font-size: 0.9em;
      margin-top: auto;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 500px) {
    section#projects {
      width: var(--section-width-mobile);
      font-size: 0.9em;
    }
    .project-container {
      gap: 1.2rem;
    }

    li {
      padding: 1.5rem;
    }
  }
</style>
