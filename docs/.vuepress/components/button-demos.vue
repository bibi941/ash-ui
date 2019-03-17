<template>
  <div>
    <div>
      <ash-button type="default">默认按钮</ash-button>
      <ash-button type="primary">主要按钮</ash-button>
      <ash-button type="success">成功按钮</ash-button>
      <ash-button type="warning">警告按钮</ash-button>
      <ash-button type="danger">危险按钮</ash-button>
    </div>
    <pre><code>{{content}}</code></pre>

  </div>
</template>

<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'ash-button': Button
    },
    name: '',
    props: {},
    data() {
      return {
        content: `
        <ash-button>默认按钮</ash-button>
        <ash-button loading>默认按钮</ash-button>
        <ash-button icon="settings">默认按钮</ash-button>
        <ash-button icon="settings" iconPosition="right">默认按钮</ash-button>
`.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
