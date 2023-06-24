<script lang="ts">
  import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";
  import Main from "../components/Main.svelte";
</script>

<Main />

<div class="seperator">
  <button><ArrowDown size={32} /></button>
</div>

<style>
  .seperator {
    text-align: center;
    & > button {
      margin: 100px 0;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
</style>
