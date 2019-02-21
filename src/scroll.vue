/**
* @create-date :2019-Feb-Friday-4:01 PM
* @author : fangXinRui
*/
<template>
  <div class="parent" ref="parent" :style="`height:${height}px`">
    <div class="child" ref="child">
      <slot></slot>
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
          translateY -= -20 * 3
        } else if (e.deltaY < -20) {
          translateY -= -20 * 3
        } else {
          translateY -= e.deltaY * 3
        }
        if (translateY > 0) {
          translateY = 0
        } else if (translateY < -maxHeight) {
          translateY = -maxHeight
        }
        child.style.transform = `translateY(${translateY}px)`
      })
    },
    methods: {}
  }
</script>

<style scoped lang='scss' type="text/scss">
  .parent {
    border: 1px solid red;
    width: 400px;
    margin: 0 auto;
    overflow: hidden;
    .child {
      border: 1px solid green;
      transition: transform 0.05s ease;
    }
  }

</style>
