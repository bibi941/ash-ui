<template>
<div class="collapse-item">
  <div>
    {{title}}
  </div>
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ash-collapse-item',
    props:{
      title:{
        type:String,
        required:true
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
