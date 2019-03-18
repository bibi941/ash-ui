<template>
  <div>
    <div>
      <ash-button type="default" icon="settings" >默认按钮</ash-button>
      <ash-button type="default" loading>默认按钮</ash-button>
      <ash-button type="default" icon="good" iconPosition="right">默认按钮</ash-button>
      <ash-button type="default" icon="settings">默认按钮</ash-button>
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
