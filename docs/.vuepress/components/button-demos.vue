<template>
  <div>
    <div>
      <ash-button>默认按钮</ash-button>
      <ash-button loading>默认按钮</ash-button>
      <ash-button icon="settings">默认按钮</ash-button>
      <ash-button icon="settings" iconPosition="right">默认按钮</ash-button>
    </div>
    <pre><code>{{content}}</code>
    </pre>
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
