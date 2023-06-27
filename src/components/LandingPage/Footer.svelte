<script lang="ts">
</script>

<footer>
  <div>Made with love and SvelteKit</div>
  <div>Copyright © Panagiotis Ntais</div>
</footer>

<style>
  footer {
    width: 99%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;
    gap: 0 1rem;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 500px) {
    footer {
      width: var(--section-width-mobile);
    }
  }
</style>
