<template>
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
</template>

<script>
  export default {
    name: 'ash-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 500
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
          }, this.autoCloseDelay * 1000)
        }
      },
      close () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback() === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  $toast-radius: 4px;
  .toast {
    font-size: $font-size;
    min-height: $toast-height;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    border-radius: $toast-radius;
    color: #ffffff;
    padding: 0 8px;
    .message{
      padding: 8px 8px 8px 0;
    }
    .line {
      border: 1px solid #666666;
    }
    .button {
      padding-left: 8px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
</style>
