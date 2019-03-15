<template>
  <div class="wrapper">
    <div class="input-wrapper"
      @mouseenter.self="onMouseEnter"
      @mouseleave.self="onMouseLeave">
      <input type="text" :class="{error}"
        ref="input"
        :value="value" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="onFocus"
        @blur="onBlur">
      <span v-show="clearVisible|| error"
        @click="onClickClear"
        class="icon"
        :class="{'icon-error':error,'icon-clear':clearable}">
        <icon name="error"></icon>
      </span>
    </div>
    <template v-if="error">
      <span class="error-text">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'ash-input',
    components: {Icon},
    props: {
      value: {
        type: [String, Date]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    data() {
      return {
        clearVisibleWhenMouseEnter: false,
        onInput: false
      }
    },
    computed: {
      clearVisible() {
        return (this.clearable && this.clearVisibleWhenMouseEnter) || this.onInput
      }
    },
    methods: {
      setRawValue(value) {
        this.$refs.input.value = value
      },
      onFocus(e) {
        this.$emit('focus', e.target.value)
        this.onInput = true
      },
      onBlur(e) {
        this.$emit('blur', e.target.value)
        this.onInput = false
      },
      onClickClear() {
        this.$emit('input', '')
      },
      onMouseEnter() {
        if (this.clearable) this.clearVisibleWhenMouseEnter = true
      },
      onMouseLeave() {
        if (this.clearable) this.clearVisibleWhenMouseEnter = false
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "_var";

  .wrapper {
    .input-wrapper {
      font-size: $font-size;
      display: inline-flex;
      align-items: center;
      position: relative;
      *:not(:last-child) {
        margin-right: 0.5em
      }
      > input {
        height: $input-height;
        border: 1px solid $grey-lv3;
        border-radius: $border-radius;
        padding: 0 16px 0 8px;
        font-size: inherit;
        transition: border-color 200ms linear;
        &:hover {
          border: 1px solid $purple-lv1;
        }
        &:focus {
          border: 1px solid $purple-lv1;
          outline: none;
        }
        &[disabled] {
          background: $grey-lv1;
        }
        &[disabled], &[readonly] {
          cursor: not-allowed;
          border-color: $grey-lv3;
          color: $grey-lv3;
        }
      }
      > input.error {
        border-color: $red-error;
        color: $red-error;
      }
      .icon {
        position: absolute;
        top: 2px;
        right: 10px;
        transform: translateY(50%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &-clear {
          cursor: pointer;
          fill: $grey-lv2;
        }
        &-error {
          fill: $red-error
        }
      }

    }
    .error-text {
      color: $red-error;
      font-size: 12px;
    }
  }
</style>
