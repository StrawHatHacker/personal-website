<script lang="ts">
  import { onMount, tick } from "svelte";

  export let element: HTMLElement;
  let visible = false;

  onMount(async () => {
    await tick();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && (visible = true);
      });
    });

    element && observer.observe(element);
    return () => observer.unobserve(element);
  });
</script>

{#if visible}
  <slot />
{/if}
