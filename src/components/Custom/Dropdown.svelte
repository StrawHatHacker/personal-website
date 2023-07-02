<script lang="ts">
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";
  import Checkmark from "carbon-icons-svelte/lib/Checkmark.svelte";
  import { fade } from "svelte/transition";
  import { clickoutside } from "@svelte-put/clickoutside";

  export let values: string[] = [];
  export let text: string = "Dropdown";
  export let checkedValues = new Set<string>();

  let open = false;

  const valueClick = (value: string) => {
    if (checkedValues.has(value)) checkedValues.delete(value);
    else checkedValues.add(value);

    checkedValues = checkedValues; // Forcing re-render
  };

  $: checkedValues, values;
</script>

<div class="dropdown-container">
  <button class="btn" on:click|stopPropagation={() => (open = !open)}>
    <span>{text}</span>
    <ChevronDown size={20} />
  </button>
  {#if open}
    <ul
      transition:fade={{ duration: 100 }}
      class="dropdown"
      use:clickoutside
      on:clickoutside={() => (open = false)}
    >
      {#each values as value}
        <li>
          <button on:click={() => valueClick(value)}>
            <span>{value}</span>
            {#if checkedValues.has(value)}
              <div transition:fade={{ duration: 100 }}>
                <Checkmark size={16} />
              </div>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .dropdown-container {
    position: relative;
  }

  .btn {
    min-width: 100px;
    border: 2px solid white;
    border-radius: 6px;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    outline: 2px solid transparent;
    outline-offset: -0.4em;
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--color-secondary);
    }

    &:focus-visible {
      outline: 2px solid white;
    }
  }

  .dropdown {
    position: absolute;
    font-size: 0.8rem;
    top: 53px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background: var(--color-secondary);
    border: 2px solid white;
    border-radius: 6px;

    & > li {
      & > button {
        word-wrap: break-word;
        width: calc(100% - 10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        height: 38px;

        & > span {
          max-width: 75%;
        }
      }
    }
  }
</style>
