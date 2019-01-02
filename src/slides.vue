/**
* @create-date :2018-Dec-Thursday-11:43 PM
* @author : fangXinRui
*/
<template>
  <div class="b-slides">
    <div class="b-slides-window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span v-for="n in childrenLength" :class="{active:selectedIndex === n-1}"
        @click="select(n-1)">
        {{n-1}}
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
        lastSelectedIndex:null
      }
    },
    computed: {
      selectedIndex() {
        return this.names.indexOf(this.selected) || 0
      },
      names() {
        return this.$children.map(vm => vm.name)
      },
      getSelected(){
        let first = this.$children[0]
        return this.selected || first.name
      }
    },
    methods: {
      playAutomatic() {
        let index = this.names.indexOf(this.getSelected)
        let run = () => {
          let newIndex = index - 1
          if (newIndex === -1) {newIndex = this.names.length - 1}
          if (newIndex === this.names.length) {newIndex = 0}
          this.select(newIndex)
          setTimeout(run, 3000)
        }
        // setTimeout(run, 3000)
      },
      updateChildren() {
        this.$children.forEach(vm => {
          vm.reverse = this.selectedIndex - this.lastSelectedIndex <= 0
          this.$nextTick(()=>{
          vm.selected = this.getSelected
          })
        })
      },
      select(index){
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected',this.names[index])
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
      > span {
        cursor: pointer;
        &.active {
          color: $red-error;
        }
      }
    }
  }
</style>
