<template>
  <div class="ash-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'ash-collapse',
    props: {
      selected: {
        type: Array
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.emitSonComponents(this.selected)
      this.listenAddSelected()
      this.listenRemoveSelected()
    },
    methods: {
      listenAddSelected() {
        this.eventBus.$on('update:addSelected', (name) => {
          let selectedCopy = JSON.parse(JSON.stringify(this.selected))
          if (this.single) {
            selectedCopy = [name]
          } else {
            selectedCopy.push(name)
          }
          this.$emit('update:selected', selectedCopy)//通知自己（外层））
          this.emitSonComponents(selectedCopy)
        })
      },
      listenRemoveSelected() {
        this.eventBus.$on('update:removeSelected', (name) => {
          let selectedCopy = JSON.parse(JSON.stringify(this.selected))
          let index = selectedCopy.indexOf(name)
          selectedCopy.splice(index, 1)
          this.$emit('update:selected', selectedCopy)//通知自己（外层））
          this.emitSonComponents(selectedCopy)
        })
      },
      emitSonComponents(selected) {
        this.eventBus.$emit('update:selected', selected)
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";
  .ash-collapse {
    border: 1px solid $grey-lv2;
    border-radius: 4px;
  }
</style>
