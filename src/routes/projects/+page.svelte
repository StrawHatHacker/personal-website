<script lang="ts">
  import MainButtonLink from "../../components/Buttons/MainButtonLink.svelte";
  import ArrowUpRight from "carbon-icons-svelte/lib/ArrowUpRight.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section aria-labelledby="project-list-title">
  <h2 id="project-list-title">Project List</h2>
  <ul class="project-list">
    {#each data.projects as project}
      <li class="project-item" style={`--c:${project.color}`}>
        <div class="project-heading">
          <img
            class:round={project.roundIcon}
            src={project.icon}
            alt={project.name + " logo"}
            width="40"
            height="40"
          />
          <h3>{project.name} <small>{project.type}</small></h3>
        </div>
        <p class="project-description">{project.description}</p>
        <div>
          <h4>Technologies</h4>
          <ul class="technology-list">
            {#each project.technologies as technology}
              <li>{technology}</li>
            {/each}
          </ul>
        </div>
        <div class="button-container">
          <MainButtonLink
            href={"/projects/"}
            text="Learn More"
          />
          {#if project.url}
            <MainButtonLink href={project.url} text="Visit Site" newTab>
              <ArrowUpRight size={16} />
            </MainButtonLink>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    width: var(--section-width-desktop);
    margin: 2rem auto;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .project-item {
    border: 2px solid white;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-heading {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & > h3 {
      color: var(--c);
      & > small {
        font-size: 0.6rem;
        align-self: flex-end;
        color: white;
        font-weight: 300;
      }
    }
  }

  .project-description {
    font-size: 0.9rem;
    max-width: 60ch;
  }

  .technology-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0 0.5rem;
    color: var(--color-gray);
    font-size: 0.7rem;

    & > li {
      background: var(--color-secondary);
      padding: 0.5rem;
      border-radius: 6px;
      margin: 0.5rem 0;
    }
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }
</style>
