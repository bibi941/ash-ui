<template>
  <div>
    <div class="ddd">
      <ash-input v-model="value1" clearable></ash-input>
      <ash-input value="错误的内容" error="你输入的不对"></ash-input>
      <ash-input v-model="value" ></ash-input>
      <div style="line-height: 35px">{{value}}</div>
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'ash-input': Input
    },
    data(){
      return{
        value1:'请输入内容',
        value:'我是双向绑定'
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .ddd{
    display: flex;
  }
</style>
