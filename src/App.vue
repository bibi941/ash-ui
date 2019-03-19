/**
* @create-date :2019-Mar-Monday-11:02 PM
* @author : fangXinRui
*/
<template>
  <div>
    <ash-tabs :selected="selected">
      <ash-tabs-head>
        <ash-tabs-item name="1">1</ash-tabs-item>
        <ash-tabs-item name="2">2</ash-tabs-item>
      </ash-tabs-head>
      <ash-tabs-body>
        <ash-tabs-pane name="1">content 1</ash-tabs-pane>
        <ash-tabs-pane name="2">content 2</ash-tabs-pane>
      </ash-tabs-body>
    </ash-tabs>
  </div>
</template>

<script>
  import tabs from './tabs/tabs'
  import tabsHead from './tabs/tabs-head'
  import tabsBody from './tabs/tabs-body'
  import tabsItem from './tabs/tabs-item'
  import tabsPane from './tabs/tabs-pane'

  export default {
    name: 'ash',
    components: {
      'ash-tabs': tabs,
      'ash-tabs-head': tabsHead,
      'ash-tabs-body': tabsBody,
      'ash-tabs-item': tabsItem,
      'ash-tabs-pane': tabsPane
    },
    data() {
      return {selected: '1'}
    },
    methods: {}
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
