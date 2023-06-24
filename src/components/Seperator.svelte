<script lang="ts">
  import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";

  export let node: HTMLElement;
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
      margin: 150px 0;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
</style>
