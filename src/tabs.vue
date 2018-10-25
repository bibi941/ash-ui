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
    provide () {
      return {eventBus: this.eventBus}
    },
    data () {
      return {eventBus: new Vue()}
    },
    mounted () {

    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
