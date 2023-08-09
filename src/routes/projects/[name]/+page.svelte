<script lang="ts">
  import ArrowUpRight from "carbon-icons-svelte/lib/ArrowUpRight.svelte";
  import MainButtonLink from "../../../components/Buttons/MainButtonLink.svelte";
  import TechnologyList from "../../../components/TechnologyList.svelte";
  import type { PageData } from "./$types";
  import { ArrowLeft } from "carbon-icons-svelte";

  export let data: PageData;
  const project = data.project;
</script>

<section aria-labelledby="project-title" id="project-container">
  <article style={`--c:${project.color}`}>
    <div class="article-heading">
      <div>
        <img
          class:round={project.roundIcon}
          src={project.icon}
          alt={project.name + " logo"}
          width="40"
          height="40"
        />
        <h2 id="project-title">{project.name} <small>{project.type}</small></h2>
      </div>
      <MainButtonLink href="/projects" text="Go back" reverse>
        <ArrowLeft size={16} />
      </MainButtonLink>
    </div>
    <div class="card">
      <div class="content">
        <div class="information">
          <p><b>{project.description}</b></p>
          <p>{@html project.longDescription}</p>
        </div>
        <TechnologyList {project} />
        {#if project.url}
          <MainButtonLink href={project.url} text="Visit Site" newTab>
            <ArrowUpRight size={16} />
          </MainButtonLink>
        {/if}
      </div>
      <div class="images">
        {#each project.imgs as img}
          <a href={img.url} target="_blank">
            <img src={img.url} alt={img.alt} loading="lazy" />
          </a>
        {/each}
      </div>
    </div>
  </article>
</section>

<style>
  section {
    width: var(--section-width-desktop);
    margin: 2rem auto;
  }

  p {
    max-width: 50ch;
  }

  .card {
    border-radius: 10px;
    margin: 1rem 0;
    display: flex;
    gap: 2rem;
    justify-content: space-between;

    & > * {
      flex: 1 1 0;
    }
  }

  .content {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }

  .images {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    & img {
      width: 100%;
      max-width: 600px;
      max-height: 500px;
      border-radius: 8px;
      transition: opacity 0.2s ease-in;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .article-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 0 1rem;

      & > h2 {
        margin: 1rem 0;
        color: var(--c);
        width: 100%;

        & > small {
          font-size: 0.65rem;
          align-self: flex-end;
          color: white;
          font-weight: 300;
        }
      }
    }
  }

  .information {
    & > p {
      margin: 0 0 1em 0;

      &:last-child {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .card {
      flex-direction: column;
    }

    .images {
      align-items: center;
    }

    .images img {
      max-width: unset;
    }
  }

  @media screen and (max-width: 500px) {
    section {
      width: var(--section-width-mobile);
      font-size: 0.8rem;
    }
    .article-heading > div {
      gap: 0;
    }

    .article-heading > div > h2 {
      margin: 0.5rem;
      width: 70%;
    }

    .article-heading > div > h2 > small {
      display: block;
    }
  }
</style>
