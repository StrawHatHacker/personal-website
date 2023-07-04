<script lang="ts">
  import type { Project } from "../data";

  export let project: Project;
</script>

<div class="technologies">
  <h4>Technologies</h4>
  <ul class="technology-list">
    {#each project.technologies as technology}
      <li>{technology}</li>
    {/each}
  </ul>
</div>

<style>
  .technologies {
    & > .technology-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      color: var(--color-gray);
      font-size: 0.7rem;
      margin: 0.5rem 0 0 0;

      & > li {
        background: var(--color-secondary);
        padding: 0.5rem;
        border-radius: 6px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .technology-list {
      font-size: 0.6rem;
    }
  }
</style>
