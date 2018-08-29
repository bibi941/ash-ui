<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: '',
    mounted() {
      //自定义警告
      for (let node of this.$el.children) {
        let name = node.nodeName.toLocaleLowerCase();
        if (name !== 'button') {
          console.warn(`b-button-grounp的子元素应该全是b-button,你输入的是${name}`);
        }
      }
    }
  };
</script>

<style scoped lang="scss" type="text/scss">
  .b-button-group {
    display: inline-flex;
    vertical-align: middle;
    & > .b-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>