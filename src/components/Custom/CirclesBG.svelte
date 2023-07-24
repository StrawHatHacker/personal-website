<script>
  import { page } from "$app/stores";

  let show = $page.url.pathname !== "/";

  $: {
    show = $page.url.pathname !== "/";
  }
</script>

<div class:hidden={show}>
  <div class="c-1" />
  <div class="c-2" />
</div>

<style>
  .c-1,
  .c-2 {
    background-color: transparent;
    border-radius: 50%;
    opacity: 0.02;
    position: absolute;
    border: 5px solid white;
    z-index: -1;
  }

  .c-1 {
    width: 500px;
    aspect-ratio: 1/1;
    top: 140px;
    left: calc(10.5% + -40px);
  }

  .c-2 {
    width: 300px;
    aspect-ratio: 1/1;
    top: 40px;
    left: calc(8% + -40px);
  }

  /* Mobile only */
  @media only screen and (hover: none) and (pointer: coarse) {
    .c-1,
    .c-2 {
      display: none;
    }
  }
</style>
