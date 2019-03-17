<template>
  <button class="ash-button"
    :class="[
    {[`icon-${iconPosition}`]: true,disabled},
    type ? type : '',
    size ? size : '',
    ]"
    @click="$emit('click')" :disabled="disabled">
    <ash-icon class="icon" v-if="icon && !loading" :name="icon"></ash-icon>
    <ash-icon class="loading icon" v-if="loading" name="loading"></ash-icon>
    <div class="contents">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from '../icon'

  export default {
    name: 'ash-button',
    components: {
      'ash-icon': Icon
    },
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      },
      type: {
        type: String,
        default: 'default',
        validator(value) {
          let arr = ['primary', 'success', 'warning', 'danger', 'default']
          return arr.indexOf(value) >= 0
        }
      },
      size: {
        type: String,
        validator(value) {
          let arr = ['medium', 'small', 'mini']
          return arr.indexOf(value) >= 0
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "var";
  /*@import "../../styles/var";*/


  .ash-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $grey-lv3;
    background: $white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: $grey-lv3;
    &:hover {
      border-color: $purple-lv1;
      color: $purple-lv1
    }
    &:active {
      border-color: darken($purple-lv1, 10%);
      color: darken($purple-lv1, 10%);
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &.default {
      background: $white;
      &.disabled {
        border: 1px solid $grey-lv3;
        color: $grey-lv3
      }
    }
    &.medium {
      padding: 0 .8em;
    }
    &.small {
      font-size: 12px;
      padding: 0 .6em;
    }
    &.mini {
      font-size: 12px;
      padding: 0 .4em;

    }
    &.primary, &.success, &.warning, &.danger {
      color: $white;
      border: 1px solid transparent;
    }
    &.primary {
      background: $purple-lv1;
      &:hover, &.disabled {
        background: lighten($purple-lv1, 5%);
      }
      &:active:not(.disabled) {
        background: darken($purple-lv1, 10%);
      }
    }
    &.success {
      background: $green;
      &:hover, &.disabled {
        background: lighten($green, 5%);
      }
      &:active:not(.disabled) {
        background: darken($green, 10%);
      }
    }
    &.warning {
      background: $orange;
      &:hover, &.disabled {
        background: lighten($orange, 5%);
      }
      &:active:not(.disabled) {
        background: darken($orange, 10%);
      }
    }
    &.danger {
      background: $red-error;
      &:hover, &.disabled {
        background: lighten($red-error, 5%);
      }
      &:active:not(.disabled) {
        background: darken($red-error, 10%);
      }
    }
    > .contents {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }
    &.icon-right {
      > .contents {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
    .loading {
      @include spin
    }
  }
</style>
