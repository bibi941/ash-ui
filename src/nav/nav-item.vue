/**
* @create-date :2019-Jan-Sunday-10:31 PM
* @author : fangXinRui
*/
<template>
  <div class="b-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Ash-nav-item',
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created() {
      this.root.addItem(this)
    },
    mounted() {
    },
    computed: {},
    methods: {
      onClick() {
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .b-nav-item {
    color: $grey-lv3;
    padding: 10px 20px;
    &.selected {
      position: relative;
      color: $grey-lv6;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $purple-lv2;
      }
    }
  }

  .b-sub-nav .b-nav-item.selected {
    color: $grey-lv6;
    &::after {
      content: '';
      border-bottom: none;
    }
  }

</style>
