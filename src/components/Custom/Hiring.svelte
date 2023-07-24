<script>
  import { Close } from "carbon-icons-svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let showHiringStatus = false;

  onMount(() => {
    const userSetting = window.localStorage.getItem("showHiring");

    // Show modal again, only if 5 minutes have passed from when the user closed it
    if (userSetting) {
      const diff = new Date().getTime() - new Date(userSetting).getTime();
      if (diff > 300000) open();
    } else {
      open(); 
    }
  });

  function open() {
    setTimeout(() => (showHiringStatus = true), 2000);
  }

  function close() {
    showHiringStatus = false;
    window.localStorage.setItem("showHiring", new Date().toISOString());
  }
</script>

{#if showHiringStatus}
  <div id="hiring-status" transition:fly={{ duration: 500, y: 80 }}>
    <div>
      <p class="hiring-status-title">Hiring?</p>
      <p class="hiring-status-text">I'm currently looking for a job!</p>
    </div>
    <button id="close-hiring-btn" on:click={close}>
      <Close size={24} />
    </button>
    <div class="tooltip-down-left" />
    <img
      class="hiring-status-person"
      src="/panos.png"
      loading="lazy"
      width="40"
      height="40"
      alt="Panos' avatar"
    /> 
  </div>
{/if}

<style>
  #hiring-status {
    padding: 0.7rem 1rem;
    border: 2px solid var(--color-secondary);
    border-radius: 20px;
    background-color: var(--color-main);
    position: fixed;
    bottom: 50px;
    left: 10px;
    font-size: 1rem;
    box-shadow: 1px 1px 5px 0px rgba(255, 255, 255, 0.1),
      2px 2px 9px 2px rgb(0, 0, 0);
    z-index: 100;
  }

  #close-hiring-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .hiring-status-title {
    font-size: 1.1rem;
    font-weight: 400;
  }

  .hiring-status-text {
    font-size: 0.9rem;
  }

  .hiring-status-person {
    position: absolute;
    bottom: -50px;
    left: 15px;
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 500px) {
    #hiring-status {
      padding: 0.6rem;
      font-size: 0.8rem;
    }

    .hiring-status-person {
      left: 7px;
    }
  }
</style>
