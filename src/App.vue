<template>
  <div>
    <b-slides class="wrapper" :selected.sync='selected'>
      <b-slides-item name="1">
        <div class="box">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box">3</div>
      </b-slides-item>
    </b-slides>
  </div>
</template>

<script>
  import Button from './button/button'
  import ButtonGroup from './button/button-group'
  import Cascader from './cascader/cascader'
  import Col from './col'
  import Collapse from './collapse'
  import CollapseItem from './collapse-item'
  import Content from './content'
  import Footer from './footer'
  import Header from './hearder'
  import Icon from './icon'
  import Input from './input'
  import Layout from './layout'
  import plugin from './toast'
  import PopOver from './popover'
  import Row from './row'
  import Sider from './sider'
  import Slides from './slides'
  import SlidesItem from './slides-item'
  import Tabs from './tabs/tabs'
  import TabsBody from './tabs/tabs-body'
  import TabsHead from './tabs/tabs-head'
  import TabsItem from './tabs/tabs-item'
  import TabsPane from './tabs/tabs-pane'
  import Toast from './toast'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    name: 'app',
    components: {
      'b-button': Button,
      'b-button-group': ButtonGroup,
      'b-cascader': Cascader,
      'b-col': Col,
      'b-collapse': Collapse,
      'b-collapse-item': CollapseItem,
      'b-content': Content,
      'b-footer': Footer,
      'b-Header': Header,
      'b-icon': Icon,
      'b-input': Input,
      'b-layout': Layout,
      'b-popover': PopOver,
      'b-row': Row,
      'b-sider': Sider,
      'b-tabs': Tabs,
      'b-tabs-body': TabsBody,
      'b-tabs-head': TabsHead,
      'b-tabs-item': TabsItem,
      'b-tabs-pane': TabsPane,
      'b-toast': Toast,
      'b-slides': Slides,
      'b-slides-item': SlidesItem
    },
    data() {
      return {
        selected: '1'
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .box {
    width: 100%;
    height: 300px;
    background: #000;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 100px;
    color: white;
  }

  .wrapper {
    margin: 40px;
  }
</style>
