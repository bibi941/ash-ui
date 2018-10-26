<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'ash-tabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {eventBus: new Vue()}
    },
    provide () {
      return {eventBus: this.eventBus}
    },
    mounted () {
      this.eventBus.$emit('update:selected',this.selected)
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
