<template>
  <div>
    <ash-collapse :selected.sync="select" single>
      <ash-collapse-item title="财经" name="1">
        <div>我是财经内容</div>
      </ash-collapse-item>
      <ash-collapse-item title="科技" name="2">
        <div>我是科技内容</div>
      </ash-collapse-item>
      <ash-collapse-item title="动画" name="3">
        <div>我是动画内容</div>
      </ash-collapse-item>
    </ash-collapse>
  </div>
</template>

<script>
  import collapse from '../../../src/collapse/collapse'
  import collapseItem from '../../../src/collapse/collapse-item'

  export default {
    components: {
      'ash-collapse': collapse,
      'ash-collapse-item': collapseItem,
    },
    data(){
      return{
        select:['2']
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
