/**
* @create-date :2019-Jan-Sunday-10:31 PM
* @author : fangXinRui
*/
<template>
  <div class="b-sub-nav" :class="{active}" v-click-outside="close">
    <span class="b-sub-nav-title" @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="b-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  export default {
    name: 'ash-sub-nav',
    inject: ['root'],
    directives:{ClickOutside},
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false
      }
    },
    created() {

    },
    mounted() {
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) >= 0
      }
    },
    methods: {
      onClick() {
        this.open = !this.open
      },
      close(){
        console.log(1111)
        this.open = false
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {//顶级菜单为 nav-item
        }
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .b-sub-nav {
    position: relative;
    color: $grey-lv3;
    &.active {
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
    > span {
      padding: 10px 20px;
      display: block;
    }
    &-popover {
      margin-top: 4px;
      background: white;
      position: absolute;
      min-width: 150px;
      top: 100%;
      left: 0;
      white-space: nowrap;
      border: 1px solid $grey-lv1;
      border-radius: $border-radius;
      box-shadow: $box-shadow-light;
    }
  }

  //非第一层
  .b-sub-nav .b-sub-nav .b-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>
