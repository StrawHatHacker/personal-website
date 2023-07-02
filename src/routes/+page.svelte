<script lang="ts">
  import Introduction from "../components/LandingPage/Introduction.svelte";
  import Main from "../components/LandingPage/Main.svelte";
  import Seperator from "../components/Seperator.svelte";
  import ProjectList from "../components/LandingPage/ProjectList.svelte";

  let introductionNode: HTMLElement;
  let projectsNode: HTMLElement;
</script>

<Main />

<Seperator node={introductionNode} />

<Introduction bind:thisElement={introductionNode} />

<Seperator node={projectsNode} />

<ProjectList bind:thisElement={projectsNode} />
