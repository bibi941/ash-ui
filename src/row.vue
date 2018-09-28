<template>
  <div class="row" :style="propGutterStyle" :class="propAlignStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-row',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value);
        }
      }
    },
    computed: {
      propGutterStyle() {
        return {
          marginLeft: -this.gutter / 2 + `px`,
          marginRight: -this.gutter / 2 + `px`
        };
      },
      propAlignStyle() {
        let {align} = this;
        return [align && `align-${align}`];
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      });
    }
  };
</script>

<style scoped lang='scss' type="text/scss">
  .row {
    display: flex;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
</style>
