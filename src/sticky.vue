/**
* @create-date :2019-Jan-Thursday-10:20 AM
* @author : fangXinRui
*/
<template>
  <div class="ash-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="ash-sticky" :class="{sticky}" :style="{width,left,top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-sticky',
    props: {
      distance: {
        type: Number
      }
    },
    data() {
      return {
        sticky: false,
        left: null,
        width: null,
        height: null,
        top: null,
        windowScrollHandler: null
      }
    },
    computed: {},
    created() {
    },
    mounted() {
      this.windowScrollHandler = this._windowScrollHandler.bind(this)
      addEventListener('scroll', this.windowScrollHandler)
    },
    beforeDestroy() {
      removeEventListener('scroll', this.windowScrollHandler)
    },
    methods: {
      toDocHeadDistance() {
        let {top} = this.$refs.wrapper.getBoundingClientRect()
        return top + window.scrollY
      },
      _windowScrollHandler() {
        let top = this.toDocHeadDistance()
        let distance = this.distance ? this.distance : 0
        if (window.scrollY > top - distance) {
          let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
          this.left = `${left}px`
          this.width = `${width}px`
          this.height = `${height}px`
          this.top = this.distance ? this.distance + 'px' : 0
          this.sticky = true
        } else {
          this.left = null
          this.width = null
          this.height = null
          this.top = null
          this.sticky = false
        }
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .ash-sticky {
    &.sticky {
      position: fixed;
    }
  }

</style>
