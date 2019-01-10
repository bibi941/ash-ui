/**
* @create-date :2019-Jan-Sunday-10:31 PM
* @author : fangXinRui
*/
<template>
  <div class="b-sub-nav" :class="{active}" v-click-outside="close">
    <span class="b-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="b-sub-nav-icon" :class="{open}">
        <icon  name="left"></icon>
      </span>
    </span>
    <transition name="fade">
      <div class="b-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon'
  import ClickOutside from '../click-outside'

  export default {
    name: 'ash-sub-nav',
    inject: ['root'],
    components: {Icon},
    directives: {ClickOutside},
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
      close() {
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
    &-icon {display: none;}
    &-label {padding: 10px 20px;display: block;width: 100%;}
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
  .b-sub-nav .b-sub-nav {
    &.active{
      &::after{
        display: none;
      }
    }
    display: flex;
    .b-sub-nav-label{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .b-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .b-sub-nav-icon {
      transition: all 300ms;
      display: inline-flex;
      svg{
        fill:$grey-lv3
      }
      &.open{
        transform: rotate(180deg);
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
</style>
