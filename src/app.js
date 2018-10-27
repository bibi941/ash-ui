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

Vue.component('b-button', Button)
Vue.component('b-icon', Icon)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)
Vue.component('b-content', Content)
Vue.component('b-header', Header)
Vue.component('b-footer', Footer)
Vue.component('b-sider', Sider)
Vue.component('b-layout', Layout)
Vue.component('b-toast', Toast)
Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-pane', TabsPane)
Vue.component('b-popover', popOver)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab:'sport'
  },
  created () {
  },
  methods: {
    showToast () {
      this.$toast(`吃我压路机`, {
        position: 'middle',
        autoClose: false,
        closeButton: {
          text: '关关哦',
          callback (toast) {
            // toast实例
            console.log('这就是你最后的波纹吗？JOJO')
          }
        }
      })
    }
  }
})


