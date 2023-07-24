<script lang="ts">
  import { Copy } from "carbon-icons-svelte";

  export let size = 24;
  export let text: string;

  const clipboard = (text: string) => navigator.clipboard.writeText(text);
</script>

<button class="copy-btn" on:click|preventDefault={() => clipboard(text)}>
  <Copy {size} />
</button>

<style>
  .copy-btn {
    transition: opacity 0.2s;
  }

  .copy-btn:hover {
    opacity: 0.7;
  }
</style>
