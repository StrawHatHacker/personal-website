<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { Project } from "../../data";
  import MainButtonLink from "../Buttons/MainButtonLink.svelte";
  import Intersect from "../Custom/Intersect.svelte";

  export let projects: Project[];

  projects = projects.filter(
    (p) =>
      p.name === "OtakuGIFs" ||
      p.name === "Kouhai" ||
      p.name === "Shiro" ||
      p.name === "UsefulScripts"
  );

  export let thisElement: HTMLElement;
</script>

<section
  id="projects"
  aria-labelledby="projects-section-title"
  bind:this={thisElement}
  style="min-height: 600px;"
>
  <h2 id="projects-section-title" class="hidden">Projects</h2>

  <div>
    <ul class="project-container">
      {#each projects as p}
        <Intersect element={thisElement}>
          <li
            class="project-item"
            transition:fly|local={{ duration: 2000, y: 200 }}
          >
            <span>{p.type}</span>
            <h3 style={`--c:${p.color}`}>{p.name}</h3>
            <p>{p.description}</p>
            <MainButtonLink
              href={"/projects/" + p.name.toLowerCase()}
              text="Learn more"
            />
          </li>
        </Intersect>
      {/each}
    </ul>
  </div>
  <div class="see-all-projects-btn">
    <MainButtonLink href="/projects" text="VIEW ALL" size="lg" />
  </div>
</section>

<style>
  section#projects {
    width: var(--section-width-desktop);
    margin: 0 auto 70px auto;
    scroll-margin: 20px;
  }

  ul.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }

  li.project-item {
    background-color: var(--color-main);
    border: 2px solid white;
    border-radius: 10px;
    padding: 2rem;
    max-width: 300px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    flex: 1 1 0;

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
    margin: 70px auto;
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
