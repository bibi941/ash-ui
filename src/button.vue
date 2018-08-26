<template>
  <button class="b-button" :class="{[`icon-${iconPosition}`]: true}">
    <b-icon class="icon" v-if="icon" :name="icon"></b-icon>
    <b-icon class="loading" v-if="icon" name="loading"></b-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(val) {
          return !(val !== 'left' && val !== 'right');
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .b-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
    .loading{
      animation: spin 2s infinite linear;
    }
  }
</style>
