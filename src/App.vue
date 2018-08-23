<template>
  <div id="app">
    <bi-button></bi-button>
  </div>
</template>

<script>
import 'normalize.css';
import biButton from './components/button';

export default {
  name: 'app',
  components: {
    biButton
  }
};
</script>

<style lang="scss">
  body{
    font-size: var(--font-size);
  }
  :root {
    --font-size: 14px;
    --color: #333;
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius:4px;
    --border-color: #999;
    --border-color-hover:#666;
  }
</style>
