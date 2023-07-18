<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";

  export let node: SvelteComponent | HTMLElement;
</script>

<div class="seperator">
  <button on:click={() => node.scrollIntoView({ behavior: "smooth" })}>
    <ArrowDown size={32} />
  </button>
</div>

<style>
  .seperator {
    text-align: center;
    & > button {
      margin: 140px 0;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
</style>
