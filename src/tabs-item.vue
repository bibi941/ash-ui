<template>
  <div class="tabs-item" @click="onclick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-item',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      }
    },
    inject: ['eventBus'],
    methods: {
      onclick () {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    mounted () {
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name)
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
.tabs-item{
  cursor: pointer;
}
</style>
