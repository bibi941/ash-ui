<template>
  <div class="ash-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-content'
  };
</script>

<style scoped lang='scss' type="text/scss">
.ash-contents{
  flex-grow: 1;
}
</style>
