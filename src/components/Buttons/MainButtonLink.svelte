<script lang="ts">
  export let href: string;
  export let text: string;
  export let size: "sm" | "md" | "lg" = "sm";
</script>

<a {href} class:md={size === "md"} class:lg={size === "lg"}>
  {text}
</a>

<style>
  a {
    border: 2px solid rgb(255, 255, 255);
    border-radius: 6px;
    width: fit-content;
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;

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
</style>
