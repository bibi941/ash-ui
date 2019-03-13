<template>
  <div class="wrapper">
    <input type="text" :class="{error}"
      ref="input"
      :value="value" :disabled="disabled" :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <icon name="error" class="error-icon"></icon>
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
      value: {type: [String,Date]},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
      error: {type: String}
    },
    methods:{
      setRawValue(value){
        this.$refs.input.value = value
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "_var";

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    *:not(:last-child) {
      margin-right: 0.5em
    }
    > input {
      height: $input-height;
      border: 1px solid $grey-lv3;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border: 1px solid $grey-lv4;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
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
    .error-icon {
      fill: $red-error
    }
    .error-text {
      color: $red-error
    }
  }
</style>
