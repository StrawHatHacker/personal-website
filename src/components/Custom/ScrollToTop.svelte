<script lang="ts">
  import { ArrowUp } from "carbon-icons-svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let show = false;

  onMount(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 300 ? (show = true) : (show = false);
    });
  });
</script>

{#if show}
  <button
    on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    transition:fly={{ duration: 300, delay: 100, y: 50 }}
    id="scroll-to-top"
  >
    <ArrowUp size={32} />
  </button>
{/if}

<style>
  #scroll-to-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: transparent;
    display: grid;
    place-items: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  #scroll-to-top:hover {
    background-color: var(--color-secondary);
  }

  #scroll-to-top:focus-visible {
    border: 2px solid white;
  }

  @media screen and (max-width: 550px) {
    #scroll-to-top {
      background-color: var(--color-secondary);
      bottom: 7px;
      right: 7px;
      width: 40px;
      height: 40px;
    }
  }
</style>
