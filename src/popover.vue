<template>
  <div class="ash-popover" ref="popover">
    <div class="ash-popover-content-wrapper" :class="{[`position-${position}`]:true}" ref="content" v-if="visible">
      <slot name="content" :close="close"></slot>
    </div>
    <span class="ash-popover-button" ref="button">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ash-popover',
    props: {
      container: {
        type: Element
      },
      position: {
        type: String,
        default: 'top',
        validator(val) {
          return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(val) {
          return ['click', 'hover'].indexOf(val) >= 0
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onclick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    beforeDestroy() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onclick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
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
        this.$emit('open')
        this.$nextTick(() => {
          this.setPopoverPosition()
          document.addEventListener('click', this.onclickContent)
        })
      },
      close() {
        this.visible = false
        this.$emit('close')
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
        if (this.container) {
          this.container.appendChild(this.$refs.content)
        } else {
          document.body.appendChild(this.$refs.content)
        }
        let {content, button} = this.$refs
        let {width, height, top, left} = button.getBoundingClientRect()
        let {height: height2} = content.getBoundingClientRect()
        let position = {
          top: {top: top + window.scrollY, left: left + window.scrollX},
          bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
          left: {top: top + (height - height2) / 2 + window.scrollY, left: left + window.scrollX},
          right: {top: top + (height - height2) / 2 + window.scrollY, left: left + width + window.scrollX}
        }
        content.style.top = position[this.position].top + 'px'
        content.style.left = position[this.position].left + 'px'
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "var";

  .ash-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    &-button {
      display: inline-block;
    }
    &-content-wrapper {
      z-index: 15;
      position: absolute;
      border-radius: $border-radius;
      border: 1px solid $grey-lv2;
      padding: 0.5em 1em;
      margin-top: -5px;
      max-width: 20em;
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
      background: $white;
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
          border-bottom: none;
        }
        &::after {
          top: calc(100% - 1px);
          border-top-color: $white;
        }
        &::before {
          top: 100%;
          border-top-color: $grey-lv2;
        }
      }

      &.position-bottom {
        margin-top: 5px;
        &::before, &::after {
          left: 5px;
          border-top: none;
        }
        &::after {
          bottom: calc(100% - 1px);
          border-bottom-color: $white;
        }
        &::before {
          bottom: 100%;
          border-bottom-color: $grey-lv2;
        }
      }
      &.position-left {
        transform: translateX(-100%);
        margin-left: -5px;
        &::before, &::after {
          top: 50%;
          transform: translateY(-50%);
          border-right: none;
        }
        &::after {
          border-left-color: $white;
          left: calc(100% - 1px);
        }
        &::before {
          border-left-color: $grey-lv2;
          left: 100%;
        }
      }

      &.position-right {
        margin-left: 5px;
        &::before, &::after {
          top: 50%;
          transform: translateY(-50%);
          border-left: none;
        }
        &::after {
          right: calc(100% - 1px);
          border-right-color: $white;
        }
        &::before {
          border-right-color: $grey-lv2;
          right: 100%;
        }
      }

    }
  }

</style>
