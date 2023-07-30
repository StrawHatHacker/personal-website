<script>
  import { onMount } from "svelte";
  import wait from "$lib/wait";

  export let text = "";
  let final = "";

  onMount(async () => {
    for (const l of text) {
      await wait(100);
      final += l;
    }
  });
</script>

{final}
<i class="carret" />

<style>
  .carret {
    width: 2px;
    height: 1em;
    vertical-align: -10%;
    background-color: currentColor;
    display: inline-block;
    animation: blink 400ms steps(2, start) infinite alternate;
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
</style>
