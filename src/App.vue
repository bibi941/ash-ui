<template>
  <div style="padding: 100px;">
    <b-cascader  :source="source" :selected="selected" @update:selected="selected = $event"></b-cascader>
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
      'b-toast': Toast
    },
    data() {
      return {
        selected: [],
        source: [
          {
            name: '四川',
            children: [
              {
                name: '成都',
                children: [{name: '高新区'}, {name: '天府新区'}, {name: '武侯区'}]
              },
              {
                name: '乐山',
                children: [{name: '峨眉'}, {name: '夹江'}, {name: '五通桥'}]
              }
            ]
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [{name: '鼓楼'}, {name: '台江'}, {name: '仓山'}]
              }
            ]
          },
          {
            name: '安徽',
            children: [
              {
                name: '合肥',
                children: [
                  {name: '瑶海'}, {name: '庐阳'}
                ]
              }
            ]
          }
        ]

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
