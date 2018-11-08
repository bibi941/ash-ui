<template>
  <div id="app">
<b-button icon="settings">啊啊啊</b-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Header from './hearder'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import popOver from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
Vue.use(plugin)
export default {
  name: 'app',
  components: {
    'b-button':Button
  }
}
</script>

<style lang="scss">
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
</style>
