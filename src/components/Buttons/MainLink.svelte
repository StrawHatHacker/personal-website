<script lang="ts">
  export let href: string;
  export let text: string;
</script>

<a {href}>
  {text}
</a>

<style>
  a {
    position: relative;
    transition: all 0.3s ease;
    outline: 2px solid transparent;
    outline-offset: 0.2em;
    text-transform: uppercase;
    color: #bbb;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 0%;
      left: 50%;
      bottom: 1px;
      background-color: currentColor;
      transition: all 0.3s ease-out;
    }

    &:hover::after {
      width: 100%;
      left: 0%;
      opacity: 0.8;
    }

    &:focus-visible {
      outline: 1px solid white;
    }
  }
</style>
