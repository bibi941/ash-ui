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
      return {}
    },
    computed: {},
    methods: {
      playAutomatic() {
        let names = this.$children.map(vm => vm.name)
        let index = names.indexOf(this.getSelected())
        let run = () => {
          if(index === names.length){index = 0}
          this.$emit('update:selected', names[index + 1])
          index++
          setTimeout(run, 3000)
        }
        setTimeout(run, 3000)
      },
      updateChildren() {
        let selected = this.getSelected()
        this.$children.forEach(vm => {
          vm.selected = selected
        })
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      }
    },
    created() {
    },
    mounted() {
      this.updateChildren()
      this.playAutomatic()
    },
    updated() {
      this.updateChildren()
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .b-slides {
    display: inline-block;
    &-window {
      overflow: hidden;
    }
    &-wrapper {
      position: relative;
    }
  }
</style>
