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
    <div class="main-content">
      <div class="information">
        <p><b>{project.description}</b></p>
        <p>{@html project.longDescription}</p>
        <p>
          If you want to learn even more,
          <a href="/" class="contact-anchor">contact me</a>
          !
        </p>
      </div>
      <TechnologyList {project} />
      {#if project.url}
        <MainButtonLink href={project.url} text="Visit Site" newTab>
          <ArrowUpRight size={16} />
        </MainButtonLink>
      {/if}
    </div>
  </article>
</section>

<style>
  section {
    width: var(--section-width-desktop);
    margin: 2rem auto;
  }

  p {
    max-width: 60ch;
  }

  .main-content {
    border-radius: 10px;
    border: 2px solid white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .article-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;

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

  .contact-anchor {
    text-decoration: underline;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
  }
</style>
