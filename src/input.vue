<template>
  <div class="wrapper">
    <input type="text" :class="{error}" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="error-icon"></icon>
      <span class="error-text">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon';

  export default {
    name: 'ash-input',
    components: {Icon},
    props: {
      value: {type: String},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
      error: {type: String}
    }
  };
</script>

<style lang="scss" type="text/scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red-error: #f1453D;
  .wrapper {font-size: $font-size;display: inline-flex;align-items: center;
    *:not(:last-child){margin-right: 0.5em}
    > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
      &:hover {border: 1px solid $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
      &[disabled], &[readonly] {cursor: not-allowed;border-color: #bbb;color: #bbb;}
    }
    > input.error {border-color: $red-error;color: $red-error;}
    .error-icon {fill: $red-error}
    .error-text {color: $red-error}
  }
</style>
