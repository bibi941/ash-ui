<template>
  <div class="row" :style="propGutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-row',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      propGutterStyle() {
        return {
          marginLeft: -this.gutter / 2 + `px`,
          marginRight: -this.gutter / 2 + `px`
        };
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
  }
</style>
