/**
* @create-date :2019-Mar-Monday-11:02 PM
* @author : fangXinRui
*/
<template>
  <div>
    <ash-layout style="color: white; margin-bottom:50px;">
      <ash-header style="height: 50px; background:lightskyblue;">
        header
      </ash-header>
      <ash-content style="height: 150px; background:deepskyblue;">
        content
      </ash-content>
      <ash-footer style="height: 50px; background:lightskyblue;">
        footer
      </ash-footer>
    </ash-layout>

    <ash-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <ash-sider style=" background:lightblue; width:200px;">
        sider
      </ash-sider>
      <ash-layout>
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
    </ash-layout>
  </div>

</template>

<script>
  import layout from '../../../src/layout/layout'
  import header from '../../../src/layout/hearder'
  import footer from '../../../src/layout/footer'
  import sider from '../../../src/layout/sider'
  import content from '../../../src/layout/content'

  export default {
    name: 'layout-demos-1',
    components: {
      'ash-layout': layout,
      'ash-header': header,
      'ash-footer': footer,
      'ash-sider': sider,
      'ash-content': content
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
