<template>
  <div id="app">
<b-button icon="settings">哥哥</b-button>
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
import plugin from './toast'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import PopOver from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
Vue.use(plugin)

export default {
  name: 'app',
  components: {
    'b-button':Button,
    'b-icon':Icon,
    'b-button-group':ButtonGroup,
    'b-input':Input,
    'b-row':Row,
    'b-col':Col,
    'b-layout':Layout,
    'b-sider':Sider,
    'b-Header':Header,
    'b-content':Content,
    'b-footer':Footer,
    'b-toast':Toast,
    'b-tabs':Tabs,
    'b-tabs-head':TabsHead,
    'b-tabs-item':TabsItem,
    'b-tabs-body':TabsBody,
    'b-tabs-pane':TabsPane,
    'b-popover':PopOver,
    'b-collapse':Collapse,
    'b-collapse-item':CollapseItem,
  },
  data(){
    return{

    }
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
