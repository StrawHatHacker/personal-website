<script lang="ts">
  import "../styles/global.css";

  import HeaderLarge from "../components/HeaderLarge.svelte";
  import HeaderSmall from "../components/HeaderSmall.svelte";
  import Footer from "../components/LandingPage/Footer.svelte";
  import { Close } from "carbon-icons-svelte";
  import { fly } from "svelte/transition";

  let screenWidth: number;
  let showDisclaimer = true;
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
    <span><u>This website is a work in progress</u></span>
    <button id="close-disclaimer-btn" on:click={() => (showDisclaimer = false)}>
      <Close size={24} />
    </button>
  </div>
{/if}

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
</style>
