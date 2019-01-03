/**
* @create-date :2018-Dec-Thursday-11:43 PM
* @author : fangXinRui
*/
<template>
  <div class="b-slides"
    @mouseleave="onMouseLeave"
    @mouseenter="onMouseEnter"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <div class="b-slides-window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span v-for="n in childrenLength" :class="{active:selectedIndex === n-1}"
        @click="select(n-1)">
        {{n}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-slides',
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: null,
        timeId: null,
        startTouch: null
      }
    },
    computed: {
      selectedIndex() {
        let index = this.names.indexOf(this.selected)
        return index === -1 ? 0 : index
      },
      names() {
        return this.$children.map(vm => vm.name)
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      }
    },
    methods: {
      playAutomatic() {
        if (this.timeId) {
          return
        }
        let run = () => {
          let index = this.names.indexOf(this.getSelected)
          let newIndex = index + 1
          this.select(newIndex)
          this.timeId = setTimeout(run, 3000)
        }
        this.timeId = setTimeout(run, 3000)
      },
      pause() {
        window.clearTimeout(this.timeId)
        this.timeId = null
      },
      onMouseEnter() {
        this.pause()
      },
      onMouseLeave() {
        this.playAutomatic()
      },
      onTouchStart(e) {
        if (e.touches.length > 1) {
          return
        }
        this.startTouch = e.touches[0]
        this.pause()
      },
      onTouchEnd(e) {
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          if (endTouch.clientX > this.startTouch.clientX) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatic()
        })
      },
      updateChildren() {
        this.$children.forEach(vm => {
          let reverse = this.selectedIndex - this.lastSelectedIndex <= 0
          if (this.timeId) {
            if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
              reverse = false
            } else if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
              reverse = true
            }
          }
          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = this.getSelected
          })
        })
      },
      select(index) {
        this.lastSelectedIndex = this.selectedIndex
        if (index === -1) {
          index = this.names.length - 1
        }
        if (index === this.names.length) {
          index = 0
        }
        this.$emit('update:selected', this.names[index])
      }
    },
    created() {
    },
    mounted() {
      this.updateChildren()
      this.playAutomatic()
      this.childrenLength = this.$children.length
    },
    updated() {
      this.updateChildren()
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "base";

  .b-slides {
    &-window {
      overflow: hidden;
    }
    &-wrapper {
      position: relative;
    }
    &-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 0;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: $grey-lv1;
        color: $grey-lv4;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 4px;
        font-size: 12px;
        &.active {
          color: $white;
          background: $purple-lv1;
          font-weight: 600;
          cursor: default;
        }
      }
    }
  }
</style>
