<div class="bg-circles">
  <div class="c-1" />
  <div class="c-2" />
</div>

<style>
  .bg-circles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .c-1,
  .c-2 {
    background-color: transparent;
    border-radius: 50%;
    opacity: 0.02;
    position: fixed;
    border: 5px solid white;
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
</style>
