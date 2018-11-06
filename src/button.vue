<template>
  <button class="b-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')" :disabled="disabled">
    <b-icon class="icon" v-if="icon && !loading" :name="icon"></b-icon>
    <b-icon class="loading icon" v-if="loading" name="loading"></b-icon>
    <div class="contents">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'

  export default {
    name: 'ash-button',
    components: {
      'b-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {type: Boolean, default: false},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "base";

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .b-button {
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
    /*&[disabled] {*/
    /*cursor: not-allowed;*/
    /*border-color: #c3c3c3;*/
    /*color: #c3c3c3;*/
    /*}*/
    &:hover {
      border-color: $grey-lv4;
    }
    &:active {
      background-color: $grey-lv1;
    }
    &:focus {
      outline: none;
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
      animation: spin 2s infinite linear;
    }
  }
</style>
