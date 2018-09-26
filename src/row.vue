<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-row'
  };
</script>

<style scoped lang='scss' type="text/scss">
  .row {
    display: flex;
  }
</style>
