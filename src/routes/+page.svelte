<script lang="ts">
  import ProjectList from "../components/LandingPage/ProjectList.svelte";
  import Introduction from "../components/LandingPage/Introduction.svelte";
  import ScrollToTop from "../components/Custom/ScrollToTop.svelte";
  import Main from "../components/LandingPage/Main.svelte";
  import Seperator from "../components/Seperator.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let projectsNode: HTMLElement;
</script>

<Main />

<Introduction />

<div style="height: 30vh;">
  <Seperator node={projectsNode} />
</div>

<ProjectList bind:thisElement={projectsNode} projects={data.projects} />

<ScrollToTop />
