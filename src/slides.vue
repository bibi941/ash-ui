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
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      updateChildren() {
        let first = this.$children[0]
        let selected = this.selected || first.name
        this.$children.forEach(vm => {
          vm.selected = selected
        })
      }
    },
    created() {
    },
    mounted() {
      this.updateChildren()
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
