<script lang="ts">
</script>

<footer>
  <div>Made with love and SvelteKit</div>
  <div>Copyright © Panagiotis Ntais</div>
  <div>This website doesn't use cookies.</div>
</footer>

<style>
  footer {
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    gap: 0.2rem 2rem;
    flex-wrap: wrap;
    border-top: 2px solid rgb(34, 34, 34);
    padding: 7px;
    font-weight: 300;
  }

  @media screen and (max-width: 700px) {
    footer {
      margin: 1rem auto 2px auto;
      width: var(--section-width-mobile);
    }
  }
</style>
