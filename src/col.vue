<template>
  <div class="col" :class="propSpanAndOffsetStyle" :style="propGutterStyle">
    <slot></slot>
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
    computed: {
      propGutterStyle() {
        return {
          paddingLeft: this.gutter / 2 + `px`,
          paddingRight: this.gutter / 2 + `px`
        };
      },
      propSpanAndOffsetStyle() {
        let {span, offset} = this;
        return [
          span && `span-${span}`,
          offset && `offset-${offset}`
        ];
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
    width: 50%;
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
