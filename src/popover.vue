<template>
  <div class="popover" @click.stop="popoverListener">
    <div class="content-wrapper" ref="content" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="button">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ash-popover',
    data() {
      return {visible: false}
    },
    methods: {
      popoverListener() {
        this.visible = !this.visible
        let eventHandler = () => {
          this.visible = false
          document.removeEventListener('click', eventHandler)
        }
        if (this.visible) {
          this.$nextTick(() => {
            this.setPopoverPosition()
            //把 popover 放在 body中 而不是组件内部
            document.body.appendChild(this.$refs.content)
            document.addEventListener('click', eventHandler)
          })
        }
      },
      setPopoverPosition() {
        let content = this.$refs.content
        let {width, height, top, left} = this.$refs.button.getBoundingClientRect()
        content.style.left = left + window.scrollX + 'px'
        content.style.top = top + window.scrollY + 'px'
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    white-space: nowrap;
    position: absolute;
    transform: translateY(-100%);
  }
</style>
