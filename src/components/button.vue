<template>
  <div>
    <button class="b-button">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'button',
};
</script>

<style scoped>
  .b-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
  }

  .b-button:hover {
    border-color: var(--border-color-hover);
  }

  .b-button:active {
    background-color: var(--button-active-bg);
  }
  .b-button:focus {
    outline: none;
  }
</style>
