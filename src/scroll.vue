/**
* @create-date :2019-Feb-Friday-4:01 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-scroll-parent" ref="parent" :style="`height:${height}px`"
    @mouseenter="onMouseEnterParent"
    @mouseleave="onMouseLeaveParent"
    @mousemove="onMouseMoveParent"
    @wheel="onWheelParent">
    <div class="ash-scroll-child" ref="child" :style="{transform: `translateY(${this.contentY}px)`}">
      <slot></slot>
    </div>
    <div class="ash-scroll-track" v-show="scrollBarVisible">
      <div class="ash-scroll-bar" ref="bar"
        @selectstart="onSelectStartScrollBar"
        @mousedown="onMouseDownScrollBar">
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
      },
      scrollVisibleWhenMouseEnter: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scrollBarVisible: true,
        isScrolling: false,
        mouseIn: false,
        barHeight: null,
        parentHeight: null,
        childHeight: null,
        barStartPosition: null,
        barEndPosition: null,
        barScrollY: 0,
        contentY: 0
      }
    },
    computed: {
      maxScrollHeight() {
        return this.parentHeight - this.barHeight
      }
    },
    created() {
    },
    mounted() {
      this.listenToDocument()
      this.scrollVisibleWhenMouseEnter && this.onScrollBarVisible()
      this.parentHeight = this.$refs.parent.getBoundingClientRect().height
      this.childHeight = this.$refs.child.getBoundingClientRect().height
      this.updateScrollBar()
    },
    beforeDestroy() {
      removeEventListener('mouseenter', this.onScrollBarVisible)
      removeEventListener('mouseleave', this.onScrollBarVisible)
    },
    methods: {
      listenToDocument() {
        document.addEventListener('mousemove', e => this.onMouseMoveScrollbar(e))
        document.addEventListener('mouseup', e => this.onMouseUpScrollbar(e))
      },
      // 更新高度
      updateContentY(deltaY, fn) {
        let maxHeight = this.calculateContentYMax()
        this.contentY = this.calculateContentYFromDeltaY(deltaY)
        if (this.contentY > 0) {
          this.contentY = 0
        } else if (this.contentY < -maxHeight) {
          this.contentY = -maxHeight
        } else {
          fn && fn()
        }
      },
      updateScrollBar() {
        let parentHeight = this.parentHeight
        let childHeight = this.childHeight
        this.barHeight = parentHeight ** 2 / childHeight
        this.$refs.bar.style.height = this.barHeight + 'px'
        this.barScrollY = -parentHeight * this.contentY / childHeight
        this.$refs.bar.style.transform = `translateY(${this.barScrollY}px)`
      },
      // 计算高度
      calculateContentYMax() {
        let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = getComputedStyle(this.$refs.parent)
        borderTopWidth = parseInt(borderTopWidth)
        borderBottomWidth = parseInt(borderBottomWidth)
        paddingTop = parseInt(paddingTop)
        paddingBottom = parseInt(paddingBottom)
        let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
        return maxHeight
      },
      calculateContentYFromDeltaY(deltaY) {
        let contentY = this.contentY
        if (deltaY > 20) {
          contentY -= 20 * 3
        } else if (deltaY < -20) {
          contentY -= -20 * 3
        } else {
          contentY -= deltaY * 3
        }
        return contentY
      },
      calculateScrollBarY(delta) {
        let newBarScrollY = parseInt(this.barScrollY) + delta.y
        if (newBarScrollY < 0) {
          newBarScrollY = 0
        } else if (newBarScrollY > this.maxScrollHeight) {
          newBarScrollY = this.maxScrollHeight
        }
        return newBarScrollY
      },
      // 监听顶级元素Parent
      onWheelParent(e) {
        this.updateContentY(e.deltaY, () => e.preventDefault())
        this.updateScrollBar()
      },
      onMouseEnterParent() {
        if (this.scrollVisibleWhenMouseEnter) this.scrollBarVisible = true
        this.mouseIn = true
      },
      onMouseMoveParent() {
        this.mouseIn = true
      },
      onMouseLeaveParent() {
        this.mouseIn = false
        if (!this.isScrolling && this.scrollVisibleWhenMouseEnter) this.scrollBarVisible = false
      },
      //监听滚动条
      onMouseDownScrollBar(e) {
        this.isScrolling = true
        let {screenX, screenY} = e
        this.barStartPosition = {x: screenX, y: screenY}
      },
      onMouseMoveScrollbar(e) {
        if (!this.isScrolling) {
          return
        }
        this.barEndPosition = {x: e.screenX, y: e.screenY}
        let delta = {x: this.barEndPosition.x - this.barStartPosition.x, y: this.barEndPosition.y - this.barStartPosition.y}
        this.barScrollY = this.calculateScrollBarY(delta)
        this.contentY = -(this.childHeight * this.barScrollY / this.parentHeight)
        this.barStartPosition = this.barEndPosition
        this.$refs.bar.style.transform = `translate(0px,${this.barScrollY}px)`
      },
      onMouseUpScrollbar() {
        this.isScrolling = false
        if (!this.mouseIn && this.scrollVisibleWhenMouseEnter) {
          this.scrollBarVisible = false
        }
      },
      onScrollBarVisible() {
        let parent = this.$refs.parent
        parent.addEventListener('mouseenter', () => {
          this.scrollBarVisible = true
        })
        parent.addEventListener('mouseleave', () => {
          this.scrollBarVisible = false
        })
      },
      onSelectStartScrollBar(e) {
        e.preventDefault()
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
      opacity: 0.9;
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
