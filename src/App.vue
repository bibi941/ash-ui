<template>
  <div>
    <b-slides class="wrapper" :selected='selected'>
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
  import Button from './button'
  import ButtonGroup from './button-group'
  import Cascader from './cascader'
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
  import Tabs from './tabs'
  import TabsBody from './tabs-body'
  import TabsHead from './tabs-head'
  import TabsItem from './tabs-item'
  import TabsPane from './tabs-pane'
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
        selected: null
      }
    },
    methods: {},
    created() {
      let n = 1
      setInterval(() => {
        if(n ===4){
          n =1
        }
        this.selected = n+''
        n += 1
      }, 2000)
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
    width: 400px;
    height: 300px;
    background: #999;
    border: 1px solid red;
  }

  .wrapper {
    margin: 40px;
  }
</style>
