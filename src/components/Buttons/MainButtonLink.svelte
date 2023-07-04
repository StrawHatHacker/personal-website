<script lang="ts">
  export let href: string;
  export let text: string;
  export let size: "sm" | "md" | "lg" = "sm";
  export let newTab = false;
  export let reverse = false;
</script>

<a
  {href}
  class:md={size === "md"}
  class:lg={size === "lg"}
  target={newTab ? "_blank" : "_self"}
>
  {#if reverse}
    <slot />
    {text}
  {:else}
    {text}
    <slot />
  {/if}
</a>

<style>
  a {
    border: 2px solid rgb(255, 255, 255);
    border-radius: 6px;
    width: fit-content;
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;
    letter-spacing: 0.6px;
    display: flex;
    align-items: center;
    gap: 0.3em;

    &:hover {
      opacity: 0.6;
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: -0.5em;
    }
  }

  .md {
    padding: 0.6rem 0.9rem;
    font-size: 1.2rem;
  }

  .lg {
    padding: 0.7rem 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    a {
      padding: 0.4rem 0.6rem;
      font-size: 0.8rem;
    }

    .md {
      padding: 0.5rem 0.8rem;
      font-size: 1rem;
    }

    .lg {
      padding: 0.6rem 1.3rem;
      font-size: 1.2rem;
    }
  }
</style>
