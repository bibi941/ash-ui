<template>
  <div >
    <ash-button-group>
      <ash-button type="default">上一页</ash-button>
      <ash-button type="default">确定</ash-button>
      <ash-button type="default">下一页</ash-button>
    </ash-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  import ashButtonGroup from '../../../src/button/button-group'


  export default {
    components: {
      'ash-button': Button,
      ashButtonGroup
    },
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
