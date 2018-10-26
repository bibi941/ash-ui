<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
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
    mounted() {
      this.eventBus.$on('update:selected', (selected, vm) => {
        let {width, left, height, top} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  $purple-lv3: #8640FF;
  $grey-lv1: #E4E7ED;
  .tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $grey-lv1;
    .button-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5em;
    }
    .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $purple-lv3;
      transition: all 350ms linear;
    }
  }
</style>
