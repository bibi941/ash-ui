<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-toast'
  }
</script>

<style scoped lang='scss' type="text/scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-shadow: 0 0  3px 0 rgba(0,0,0,0.5);
  $toast-radius: 4px;
  .toast {

    font-size: $font-size;
    height: $toast-height;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    border-radius: $toast-radius;
    color: #ffffff;
  }
</style>
