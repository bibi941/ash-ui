<template>
  <div style="padding: 100px">
    <div class="ddd">
    <ash-button @click="click">默认</ash-button>
    <ash-button type="primary">主要</ash-button>
    <ash-button type="success">成功</ash-button>
    <ash-button type="warning">警告</ash-button>
    <ash-button type="danger">危险</ash-button>
  </div>
    <div class="ddd">
      <ash-button disabled @click="click">默认</ash-button>
      <ash-button type="primary" disabled>主要</ash-button>
      <ash-button type="success" disabled>成功</ash-button>
      <ash-button type="warning" disabled>警告</ash-button>
      <ash-button type="danger" disabled>危险</ash-button>
    </div>
    <div class="ddd">
      <ash-button>默认按钮</ash-button>
      <ash-button size="medium">中等按钮</ash-button>
      <ash-button size="small">小型按钮</ash-button>
      <ash-button size="mini">超小按钮</ash-button>
    </div>
  </div>
</template>

<script>
  import ashButton from './button/button'

  export default {
    name: 'app',
    components: {
      ashButton
    },
    data() {
      return {
        type1: ''
      }
    },
    methods: {
      click() {
        console.log(1)
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" type="text/scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .ddd {
    > button {
      margin: 8px;
    }
  }
</style>
