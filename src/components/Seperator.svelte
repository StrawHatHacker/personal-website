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
    display: flex;
    justify-content: center;
  }

  button {
    margin: 90px 0 120px 0;
    padding: 0.4rem;
    border-radius: 50%;
    max-height: 40px;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: 2px solid transparent;    
  }

  button:hover {
    background-color: var(--color-secondary);
  }

  button:focus-visible {
    border: 2px solid white;
  }
</style>
