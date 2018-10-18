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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    mesa: ''
  },
  created () {
  },
  methods: {
    showToast () {
      this.$toast(`吃我压路机`, {
        position: 'middle',
        closeButton: {
          text: '关关哦',
          callback (toast) {
            // toast实例
            console.log('插件知道了')
          }
        }
      })
    }
  }
})


