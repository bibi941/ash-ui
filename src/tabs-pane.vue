<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-pane',
    inject:['eventBus'],
    mounted () {
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name)
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
