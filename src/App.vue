/**
* @create-date :2019-Mar-Monday-11:02 PM
* @author : fangXinRui
*/
<template>
  <ash-layout style="color: white; margin-bottom:50px;">
    <ash-header style="height: 50px; background:lightskyblue;">
      header
    </ash-header>
    <ash-content style="height: 100px; background:deepskyblue;">
      content
    </ash-content>
    <ash-footer style="height: 50px; background:lightskyblue;">
      footer
    </ash-footer>
  </ash-layout>
</template>

<script>
  import layout from './layout/layout'
  import header from './layout/hearder'
  import footer from './layout/footer'
  import sider from './layout/sider'
  import content from './layout/content'
  export default {
    name: 'layout-demos-1',
    components:{
      'ash-layout':layout,
      'ash-header':header,
      'ash-footer':footer,
      'ash-sider':sider,
      'ash-content':content,
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
