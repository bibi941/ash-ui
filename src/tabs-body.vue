<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-body',
    inject:['eventBus']
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
