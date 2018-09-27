<template>
  <div class="col" :class="[span && `span-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2+`px`,paddingRight:gutter/2+`px`}">
    <div style="border: 1px solid black">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      };
    }
  };
</script>

<style scoped lang='scss' type="text/scss">
  .col {
    height: 100px;
    /*background: gainsboro;*/
    width: 50%;
    /*border: 1px solid red;*/
    $class-prefix: span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
