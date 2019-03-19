/**
* @create-date :2019-Mar-Tuesday-10:25 AM
* @author : fangXinRui
*/
<template>
  <div>
    <ash-tabs :selected="selected">
      <ash-tabs-head>
        <ash-tabs-item name="1">新闻</ash-tabs-item>
        <ash-tabs-item name="2">科技</ash-tabs-item>
        <ash-tabs-item name="3" disabled>社会</ash-tabs-item>
      </ash-tabs-head>
      <ash-tabs-body>
        <ash-tabs-pane name="1">我是新闻</ash-tabs-pane>
        <ash-tabs-pane name="2">我是科技</ash-tabs-pane>
        <ash-tabs-pane name="4">我是社会</ash-tabs-pane>
      </ash-tabs-body>
    </ash-tabs>
  </div>
</template>

<script>
  import tabs from '../../../src/tabs/tabs'
  import tabsHead from '../../../src/tabs/tabs-head'
  import tabsBody from '../../../src/tabs/tabs-body'
  import tabsItem from '../../../src/tabs/tabs-item'
  import tabsPane from '../../../src/tabs/tabs-pane'

  export default {
    name: 'tabs-demos-1',
    components: {
      'ash-tabs': tabs,
      'ash-tabs-head': tabsHead,
      'ash-tabs-body': tabsBody,
      'ash-tabs-item': tabsItem,
      'ash-tabs-pane': tabsPane
    },
    data(){
      return {
        selected:'1'
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
