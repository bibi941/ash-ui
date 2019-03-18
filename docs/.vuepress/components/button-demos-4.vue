<template>
  <div>
    <div>
      <ash-button type="primary" >默认按钮</ash-button>
      <ash-button type="success" size="medium">中等按钮</ash-button>
      <ash-button type="warning" size="small">小型按钮</ash-button>
      <ash-button type="danger" size="mini">超小按钮</ash-button>
    </div>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'ash-button': Button
    },
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
