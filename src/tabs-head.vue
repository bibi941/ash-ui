<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="button"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-head',
    props:{

    },
    inject:['eventBus'],
    mounted(){
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
