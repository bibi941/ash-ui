<template>
  <div class="col" :class="[`span-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-col',
    props: {
      span: {
        type: [Number, String]
      }
    }
  };
</script>

<style scoped lang='scss' type="text/scss">
  .col {
    height: 100px;
    background: gainsboro;
    width: 50%;
    border: 1px solid red;
    $class-prefix: span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
  }
</style>
