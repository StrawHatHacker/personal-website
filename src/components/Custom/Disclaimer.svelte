<script>
  import { fly } from "svelte/transition";
  import { Close } from "carbon-icons-svelte";

  let showDisclaimer = true;
</script>

{#if showDisclaimer}
  <div
    class="disclaimer"
    transition:fly={{ duration: 200, y: -40, opacity: 1 }}
  >
    <span>👷‍♀️This website is a work in progress👷‍♂️</span>
    <button
      class="close-disclaimer-btn"
      on:click={() => (showDisclaimer = false)}
    >
      <Close size={24} />
    </button>
  </div>
{/if}

<style>
  .disclaimer {
    width: 100%;
    height: 35px;
    background-color: var(--color-secondary);
    font-size: 0.8rem;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  }

  .close-disclaimer-btn {
    position: absolute;
    right: 10px;
    top: 2px;
    padding: 3px;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .close-disclaimer-btn:hover {
    background-color: var(--color-main);
  }

  .close-disclaimer-btn:focus-visible {
    background-color: var(--color-main);
    border: 1px solid white;
  }
</style>
