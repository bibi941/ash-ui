/**
* @create-date :2019-Jan-Sunday-10:31 PM
* @author : fangXinRui
*/
<template>
  <div class="b-sub-nav">
    <span class="b-sub-nav-title" @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="b-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-sub-nav',
    inject: ['root'],
    props: {},
    data() {
      return {
        open: false
      }
    },
    created() {

    },
    mounted() {
    },
    computed: {},
    methods: {
      onClick() {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .b-sub-nav {
    position: relative;
    > span {
      padding: 10px 20px;
      display: inline-block;
      vertical-align: top;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      border: 1px solid black;
    }
  }
</style>
