/**
* @create-date :2019-Feb-Friday-4:01 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-scroll-parent" ref="parent" :style="`height:${height}px`">
    <div class="ash-scroll-child" ref="child">
      <slot></slot>
    </div>
    <div class="ash-scroll-track">
      <div class="ash-scroll-bar" ref="bar">
        <div class="ash-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-scroll',
    props: {
      height: {
        type: Number,
        required: true
      }
    },
    data() {
      return {}
    },
    computed: {},
    created() {
    },
    mounted() {
      let parent = this.$refs.parent
      let child = this.$refs.child
      let translateY = 0
      let {height: childHeight} = child.getBoundingClientRect()
      let {height: parentHeight} = parent.getBoundingClientRect()
      let {borderTop, borderBottom, paddingTop, paddingBottom} = getComputedStyle(parent)
      borderTop = parseInt(borderTop)
      borderBottom = parseInt(borderBottom)
      paddingTop = parseInt(paddingTop)
      paddingBottom = parseInt(paddingBottom)
      let maxHeight = childHeight - parentHeight + (borderTop + borderBottom + paddingTop + paddingBottom)
      parent.addEventListener('wheel', (e) => {
        if (e.deltaY > 20) {
          translateY -= 20 * 3
        } else if (e.deltaY < -20) {
          translateY -= -20 * 3
        } else {
          translateY -= e.deltaY * 3
        }
        if (translateY > 0) {
          translateY = 0
        } else if (translateY < -maxHeight) {
          translateY = -maxHeight
        } else {
          e.preventDefault()
        }
        child.style.transform = `translateY(${translateY}px)`
        this.updataBarHeight(parentHeight, childHeight, translateY)
      })
      this.updataBarHeight(parentHeight, childHeight, translateY)
    },
    methods: {
      updataBarHeight(parentHeight, childHeight, translateY) {
        let barHeight = parentHeight ** 2 / childHeight
        let bar = this.$refs.bar
        bar.style.height = barHeight + 'px'
        let y = parentHeight * translateY / childHeight
        bar.style.transform = `translateY(${-y}px)`
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .ash-scroll {
    &-parent {
      border: 1px solid red;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
    }
    &-child {
      border: 1px solid green;
      transition: transform 0.05s ease;
    }
    &-track {
      width: 14px;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      background: #fafafa;
      border-left: 1px solid #e8e7e8;
    }
    &-bar {
      position: absolute;
      top: -1px;
      left: 50%;
      height: 40px;
      width: 8px;
      margin-left: -4px;
      padding: 4px 0;
      &-inner {
        height: 100%;
        border-radius: 4px;
        background: #c2c2c2;
        &:hover {
          background: #7d7d7d;
        }
      }
    }

  }

</style>
