<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
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
    mounted () {

    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
