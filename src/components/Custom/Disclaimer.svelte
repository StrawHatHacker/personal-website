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
    <span>👷‍♀️<u>This website is a work in progress</u>👷‍♂️</span>
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
    height: 20px;
    background-color: var(--color-secondary);
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem 0;
    position: relative;
  }

  .close-disclaimer-btn {
    content: "X";
    position: absolute;
    right: 10px;
    top: 13%;
    padding: 3px;
  }
</style>
