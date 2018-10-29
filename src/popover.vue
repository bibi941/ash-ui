<template>
  <div class="popover" @click="onclick" ref="popover">
    <div class="content-wrapper" ref="content" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span class="button" ref="button">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ash-popover',
    data() {
      return {
        visible: false
      }
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
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return
        }
        if (this.$refs.content && (this.$refs.content === e.target || this.$refs.content.contains(e.target))) {
          return
        }
          this.close()
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
  $border-radius: 4px;
  $border-color: #e8e2ff;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .button {
      display: inline-block;
    }
  }

  .content-wrapper {
    position: absolute;
    transform: translateY(-100%);
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0.5em 1em;
    margin-top: -5px;
    max-width: 20em;
    /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.10);*/
    filter:drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
    background: white;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
      border: 5px solid transparent;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
    &::before {
      top: 100%;
      border-top-color: $border-color;
    }
  }
</style>
