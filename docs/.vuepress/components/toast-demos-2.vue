<template>
  <div>
    <ash-button @click="onClickButton">上方弹出</ash-button>
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
    },
    methods:{
      onClickButton () {
        this.$toast('这个可以关闭噢', {
          closeButton: {
            text: '关闭',
            callback: () => {
              console.log('you can do someThing in this')
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
