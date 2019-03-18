<template>
  <div>
    <div class="ddd">
      <ash-input value="请输入内容" ></ash-input>
      <ash-input value="请输入内容" disabled></ash-input>
      <ash-input value="请输入内容" readonly></ash-input>
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
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
.ddd{
  display: flex;
}
</style>
