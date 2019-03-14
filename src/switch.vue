<template>
  <div class="ash-switch">
    <span v-if="falseText" class="switch-left-text">{{falseText}}</span>
    <span ref="core"
      class="ash-switch-core"
      :class="{active:value,['disabled']:disabled}"
      :style="coreStyle"
      :value="value"
      @click="toggle">
        <span class="ash-switch-core-inner" :style="innerStyle"></span>
    </span>
    <span v-if="trueText" class="switch-right-text">{{trueText}}</span>
  </div>
</template>
<script>
  export default {
    name: 'ash-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '40px'
      },
      falseText: {
        type: String,
        default: ''
      },
      trueText: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      falseColor: {
        type: String,
        default: ''
      },
      trueColor: {
        type: String,
        default: ''
      }
    },
    computed: {
      coreStyle() {
        return `width:${this.width};height:${parseInt(this.width) / 2}px;
        border-radius:${parseInt(this.width) / 4}px`
      },
      innerStyle() {
        return `width:${parseInt(this.width) / 2 - 4}px;
        height:${parseInt(this.width) / 2 - 4}px`
      }
    },
    mounted() {
      if (this.trueColor && this.value) {
        this.$refs.core.style.background = this.trueColor
      }
      if (this.falseColor && !this.value) {
        this.$refs.core.style.background = this.falseColor
      }
    },
    methods: {
      toggle() {
        if (this.disabled) {
          return
        }
        let newValue = !this.value
        this.$emit('input', newValue)
        this.$emit('value-change', newValue)
        if (this.trueColor && newValue) {
          this.$refs.core.style.background = this.trueColor
        }
        if (this.falseColor && !newValue) {
          this.$refs.core.style.background = this.falseColor
        }
      }
    }
  }
</script>
<style scoped lang='scss' type="text/scss">
  @import 'var';

  .ash-switch {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    > .switch-left-text {
      margin-right: 3px;
    }
    > .switch-right-text {
      margin-left: 3px;
    }
    > .ash-switch-core {
      display: inline-block;
      background: $red-error;
      position: relative;
      transition: all .3s linear;
      cursor: pointer;
      > .ash-switch-core-inner {
        display: block;
        background: $white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s linear;
        left: 2px;
      }
      &.active {
        background: $green;
        > .ash-switch-core-inner {
          margin-left: 50%;
        }
      }
      &.disabled {
        background: $grey-lv3;
      }
    }
  }
</style>
