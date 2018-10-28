<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-popover',
    data() {
      return {visible: false}
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        let eventHandler = () => {
          this.visible = false
          document.removeEventListener('click', eventHandler)
          console.log('隐藏了')
        }
        if (this.visible) {
          this.$nextTick(() => {
            document.addEventListener('click', eventHandler)
          })
        }else{
          console.log('隐藏了-else')
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      white-space: nowrap;
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid green;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>
