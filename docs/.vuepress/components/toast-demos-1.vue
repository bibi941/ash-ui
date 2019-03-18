<template>
  <div>
    <ash-button @click="$toast('这是我的提示')">上方弹出</ash-button>
    <ash-button @click="$toast('这是我的提示', {position:'middle'})">中间弹出</ash-button>
    <ash-button @click="$toast('这是我的提示', {position:'bottom'})">下方弹出</ash-button>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  import plugin from '../../../src/toastPlugin'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {
      'ash-button': Button
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
