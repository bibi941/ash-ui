<template>
  <div class="wrapper" :class="toastPosition">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="button" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-toast',
    props: {
      autoClose: {
        type: [Boolean,Number],
        default: 5
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0
        }
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '确定', callback: null
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      toastPosition () {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    mounted () {
      this.updataLineStyle()
      this.exeaAutoClose()
    },
    methods: {
      updataLineStyle () {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      exeaAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback() === 'function') {
          this.closeButton.callback(this)
        }
      },
      close () {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "base";
  @keyframes slide-up {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1;transform: translateY(0)}
  }
  @keyframes slide-down {
    0% {opacity: 0;transform: translateY(-100%)}
    100% {opacity: 1;transform: translateY(0)}
  }
  @keyframes fade-in {
    0% {opacity: 0}
    100% {opacity: 1}
  }

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .toast{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-time;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      animation: fade-in $animation-time;
    }
    &.position-bottom {
      bottom: 0;
      .toast{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-time;
      }
    }
  }

  .toast {
    font-size: $font-size;
    min-height: $toast-height;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    border-radius: $border-radius;
    line-height: 1.8;
    display: flex;
    align-items: center;
    color: $white;
    padding: 0 8px;

    .message {
      padding: 8px 8px 8px 0;
    }
    .line {
      border: 1px solid $grey-lv4;
    }
    .button {
      padding-left: 8px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
</style>
