<template>
  <div>
    <ash-button @click="onClickButton" onClickButton>HTML</ash-button>
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
        this.$toast('<strong style="color:dodgerblue;">这个是 HTML 哦</strong>', {
          enableHtml: true
        })
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
