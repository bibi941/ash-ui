/**
* @create-date :2019-Jan-Sunday-10:31 PM
* @author : fangXinRui
*/
<template>
  <div class="b-nav-item" :class="{selected,vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-nav-item',
    inject: ['root', 'vertical'],
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
        this.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "_var";

  .b-nav-item {
    color: $grey-lv3;
    padding: 10px 20px;
    &.vertical {
      color: $grey-lv6;
      &:hover {
        background: $purple-lv0;
      }
    }
    &.selected {
      &.vertical {
        color:$purple-lv2;
        &::after {
          border: none;
        }
      }
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
    &.vertical{
        background:$white;
        color: $purple-lv1;
    }
    color: $grey-lv6;
    background: $grey-lv0;
    &::after {
      content: '';
      border-bottom: none;
    }
  }

</style>
