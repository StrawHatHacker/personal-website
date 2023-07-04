<script lang="ts">
</script>

<footer>
  <div>Made with love and SvelteKit</div>
  <div>Copyright © Panagiotis Ntais</div>
  <div>This website doesn't use cookies.</div>
</footer>

<style>
  footer {
    width: 99%;
    margin: 3rem auto 2px auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;
    gap: 0 2rem;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 700px) {
    footer {
      margin: 1rem auto 2px auto;
      width: var(--section-width-mobile);
    }
  }
</style>
