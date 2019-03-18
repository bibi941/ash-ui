<template>
  <div>
    <div>
      <ash-button disabled type="default">默认按钮</ash-button>
      <ash-button disabled type="primary">主要按钮</ash-button>
      <ash-button disabled type="success">成功按钮</ash-button>
      <ash-button disabled type="warning">警告按钮</ash-button>
      <ash-button disabled type="danger">危险按钮</ash-button>
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
