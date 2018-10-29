<template>
  <div class="popover" @click="onclick" ref="popover">
    <div class="content-wrapper" ref="content" v-if="visible">
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
      onclick(e) {
        //点击按钮
        if (this.$refs.button.contains(e.target)) {
          if (this.visible) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.setPopoverPosition()
          document.addEventListener('click', this.onclickContent)

        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onclickContent)
        console.log('结束监听')
        console.log('visible=false关闭')
      },
      onclickContent(e) {
        // TODO:点击内容不退出
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return
        } else {
          this.close()
        }
      },
      setPopoverPosition() {
        document.body.appendChild(this.$refs.content)
        let content = this.$refs.content
        let {width, height, top, left} = this.$refs.button.getBoundingClientRect()
        content.style.left = left + window.scrollX + 'px'
        content.style.top = top + window.scrollY + 'px'
      }
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
