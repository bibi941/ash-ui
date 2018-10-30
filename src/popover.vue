<template>
  <div class="popover" @click="onclick" ref="popover">
    <div class="content-wrapper" :class="{[`position-${position}`]:true}" ref="content" v-if="visible">
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(val) {
          return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0
        }
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
        let {content, button} = this.$refs
        let {width, height, top, left} = button.getBoundingClientRect()
        let {height: height2} = content.getBoundingClientRect()
        if (this.position === 'top') {
          content.style.left = left + window.scrollX + 'px'
          content.style.top = top + window.scrollY + 'px'
        } else if (this.position === 'bottom') {
          content.style.left = left + window.scrollX + 'px'
          content.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
          content.style.left = left + window.scrollX + 'px'
          content.style.top = top + (height - height2) / 2 + window.scrollY + 'px'
        } else if (this.position === 'right') {
          console.log('top',top)
          content.style.left = left + width + window.scrollX + 'px'
          content.style.top = top + (height - height2) / 2 + window.scrollY + 'px'
        }
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
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0.5em 1em;
    margin-top: -5px;
    max-width: 20em;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
    background: white;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border: 5px solid transparent;
    }

    &.position-top {
      transform: translateY(-100%);
      &::before, &::after {
        left: 5px;
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

    &.position-bottom {
      margin-top: 5px;
      &::before, &::after {
        left: 5px;
      }
      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
      &::before {
        bottom: 100%;
        border-bottom-color: $border-color;
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -5px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
      &::before {
        border-left-color: $border-color;
        left: 100%;
      }
    }

    &.position-right {
      margin-left: 5px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
      &::before {
        border-right-color: $border-color;
        right: 100%;
      }
    }

  }
</style>
