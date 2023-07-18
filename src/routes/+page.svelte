<script lang="ts">
  import ProjectList from "../components/LandingPage/ProjectList.svelte";
  import Introduction from "../components/LandingPage/Introduction.svelte";
  import ScrollToTop from "../components/Custom/ScrollToTop.svelte";
  import Main from "../components/LandingPage/Main.svelte";
  import Seperator from "../components/Seperator.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let introductionNode: HTMLElement;
  let projectsNode: HTMLElement;
</script>

<Main />

<Seperator node={introductionNode} />

<Introduction bind:thisElement={introductionNode} />

<Seperator node={projectsNode} />

<ProjectList bind:thisElement={projectsNode} projects={data.projects} />

<ScrollToTop />
