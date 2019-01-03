<template>
  <div>
    <div>
      <b-button>默认按钮</b-button>
      <b-button loading>默认按钮</b-button>
      <b-button icon="settings">默认按钮</b-button>
      <b-button icon="settings" iconPosition="right">默认按钮</b-button>
    </div>
    <pre><code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'b-button': Button
    },
    name: '',
    props: {},
    data() {
      return {
        content: `
        <b-button>默认按钮</b-button>
        <b-button loading>默认按钮</b-button>
        <b-button icon="settings">默认按钮</b-button>
        <b-button icon="settings" iconPosition="right">默认按钮</b-button>
`.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
