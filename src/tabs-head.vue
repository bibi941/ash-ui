<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="button-wrapper">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-head',
    props: {},
    inject: ['eventBus'],
    mounted () {
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .tabs-head {
    display: flex;
    height: 32px;
    justify-content: flex-start;
    align-items: center;
    .button-wrapper {
      margin-left: auto;
    }
  }
</style>
