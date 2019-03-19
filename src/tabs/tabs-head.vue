<template>
  <div class="ash-tabs-head" ref="head">
    <slot></slot>
    <div class="ash-tabs-line" ref="line"></div>
    <div class="ash-tabs-button-wrapper">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-head',
    props: {},
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (selected, vm) => {
        this.updateLinePosition(vm)
      })
    },
    methods: {
      updateLinePosition (selectedVm) {
        let {width, left} = selectedVm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .ash-tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $grey-lv1;
    .ash-tabs-button-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5em;
    }
    .ash-tabs-line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $purple-lv4;
      transition: all 350ms linear;
    }
  }
</style>
