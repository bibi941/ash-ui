<template>
  <div>
    <div>
      <ash-button type="default">默认按钮</ash-button>
      <ash-button type="primary">主要按钮</ash-button>
      <ash-button type="success">成功按钮</ash-button>
      <ash-button type="warning">警告按钮</ash-button>
      <ash-button type="danger">危险按钮</ash-button>
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
