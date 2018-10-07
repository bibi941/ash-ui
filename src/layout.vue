<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-layout',
    data () {
      return {
        layoutClass: {
          hasSider: false
        }
      };
    },
    mounted () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'ash-sider') {
          this.layoutClass.hasSider = true;
        }
      });
    }
  };
</script>

<style scoped lang='scss' type="text/scss">
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .hasSider{
  flex-direction: row;
  }
</style>
