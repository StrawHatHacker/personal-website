<script lang="ts">
  import "../styles/global.css";

  import Disclaimer from "../components/Custom/Disclaimer.svelte";
  import CirclesBg from "../components/Custom/CirclesBG.svelte";
  import Footer from "../components/LandingPage/Footer.svelte";
  import HeaderLarge from "../components/HeaderLarge.svelte";
  import HeaderSmall from "../components/HeaderSmall.svelte";
  import Hiring from "../components/Custom/Hiring.svelte";

  let screenWidth: number;
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

<!-- <Disclaimer /> -->

{#if screenWidth < 750}
  <HeaderSmall />
{:else if screenWidth >= 750}
  <HeaderLarge />
{:else}
  <div style="width:100%;height:80px;margin: 1rem auto 0 auto;" />
{/if}

<slot />

<Footer />

<!-- Absolutely positioned components -->
<Hiring />
<CirclesBg />
