<script lang="ts">
  import MainButtonLink from "./Buttons/MainButtonLink.svelte";

  export let thisElement: HTMLElement;
</script>

<section
  id="projects"
  aria-labelledby="projects-section-title"
  bind:this={thisElement}
>
  <h2 id="projects-section-title" class="hidden">Projects</h2>

  <ul class="project-container">
    <li class="project-item">
      <span>REST API</span>
      <h3 style="--c: var(--otakugifs-color)">OtakuGIFs</h3>
      <p>Free REST API that serves animated GIFs as reactions.</p>
      <MainButtonLink href="/" text="Learn More" />
    </li>
    <li class="project-item">
      <span>Website</span>
      <h3 style="--c:var(--kouhai-color)">Kouhai</h3>
      <p>Utilities for every day use.</p>
      <MainButtonLink href="/" text="Learn More" />
    </li>
    <li class="project-item">
      <span>Chatbot</span>
      <h3 style="--c:var(--shiro-color)">Shiro</h3>
      <p>Multipurpose chatbot for Discord.</p>
      <MainButtonLink href="/" text="Learn More" />
    </li>
    <li class="project-item">
      <span>Bash Scripts</span>
      <h3 style="--c:var(--usefulscripts-color)">UsefulScripts</h3>
      <p>Free REST API that serves animated GIFs as reactions.</p>
      <MainButtonLink href="/" text="Learn More" />
    </li>
  </ul>
</section>

<div class="see-all-projects-btn">
  <MainButtonLink href="/" text="VIEW ALL" size="lg" />
</div>

<style>
  section#projects {
    width: var(--section-width-desktop);
    margin: auto;
    scroll-margin: 20px;
  }

  ul.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }

  li.project-item {
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
      margin-top: auto;
    }
  }

  .see-all-projects-btn {
    margin: 70px auto 0 auto;
    width: fit-content;
  }

  @media screen and (max-width: 500px) {
    section#projects {
      width: var(--section-width-mobile);
      font-size: 0.9em;
    }

    ul.project-container {
      gap: 1.2rem;
    }

    li.project-item {
      padding: 1.5rem;
    }
  }
</style>
