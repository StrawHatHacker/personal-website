<script lang="ts">
  import "../styles/global.css";

  import CirclesBg from "../components/Custom/CirclesBG.svelte";
  import Footer from "../components/LandingPage/Footer.svelte";
  import HeaderLarge from "../components/HeaderLarge.svelte";
  import HeaderSmall from "../components/HeaderSmall.svelte";
  import { Close } from "carbon-icons-svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let screenWidth: number;
  let showDisclaimer = true;
  let showHiringStatus = true;

  onMount(() => setTimeout(() => (showHiringStatus = true), 2000));
</script>

<svelte:head>
  <title>Panos Ntais ・ Web Developer</title>
  <meta
    name="description"
    content="This is my personal website and portofolio. Here you can find my hand crafted works and get in contact with me"
  />
  <meta name="author" content="Panos Ntais" />
  <meta name="generator" content="svelte" />
  <meta name="og:title" content="Panos Ntais ・ Web Developer" />
  <meta name="twitter:title" content="Panos Ntais ・ Web Developer" />
  <meta
    name="og:description"
    content="This is my personal website and portofolio."
  />
  <meta
    name="twitter:description"
    content="This is my personal website and portofolio."
  />
  <!-- <meta property="og:image" content="%svelte.assets%/panos.png" /> -->
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />
{#if showDisclaimer}
  <div id="disclaimer" transition:fly={{ duration: 200, y: -40, opacity: 1 }}>
    <span>👷‍♀️<u>This website is a work in progress</u>👷‍♂️</span>
    <button id="close-disclaimer-btn" on:click={() => (showDisclaimer = false)}>
      <Close size={24} />
    </button>
  </div>
{/if}

{#if showHiringStatus}
  <div
    id="hiring-status"
    transition:fly={{
      duration: 500,
      y: 80,
    }}
  >
    <div>
      <p class="hiring-status-title">Hiring?</p>
      <p class="hiring-status-text">I'm currently looking for a job!</p>
    </div>
    <button id="close-hiring-btn" on:click={() => (showHiringStatus = false)}>
      <Close size={24} />
    </button>
    <div class="tooltip-down-left" />
    <img
      class="hiring-status-person"
      src="/panos.png"
      loading="lazy"
      width="40"
      height="40"
      alt="Panos's avatar"
    />
  </div>
{/if}

<CirclesBg />

{#if screenWidth < 750}
  <HeaderSmall />
{:else if screenWidth >= 750}
  <HeaderLarge />
{:else}
  <HeaderLarge hidden={true} />
{/if}

<slot />

<Footer />

<style>
  #disclaimer {
    width: 100%;
    height: 20px;
    background-color: var(--color-secondary);
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem 0;
    position: relative;
  }

  #close-disclaimer-btn {
    content: "X";
    position: absolute;
    right: 10px;
    top: 13%;
    padding: 3px;
  }

  #hiring-status {
    padding: 1rem;
    border: 2px solid var(--color-secondary);
    /* border-bottom: 2px solid white; */
    border-radius: 20px;
    background-color: var(--color-main);
    position: fixed;
    bottom: 50px;
    left: 10px;
    font-size: 1rem;
    box-shadow: 2px 2px 9px 2px rgb(0, 0, 0);
    z-index: 100;
  }

  #close-hiring-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .hiring-status-title {
    font-size: 1em;
    font-weight: 700;
  }

  .hiring-status-text {
    font-size: 0.9em;
  }

  .hiring-status-person {
    position: absolute;
    bottom: -50px;
    left: 15px;
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 500px) {
    #hiring-status {
      padding: 0.7rem;
      font-size: 0.9rem;
    }

    .hiring-status-person {
      left: 7px;
    }
  }
</style>
