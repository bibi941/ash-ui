const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <b-tabs selected="finance">
        <b-tabs-head>
          <b-tabs-item name="woman"> 美女 </b-tabs-item>
          <b-tabs-item name="finance"> 财经 </b-tabs-item>
          <b-tabs-item name="sports"> 体育 </b-tabs-item>
        </b-tabs-head>
        <b-tabs-body>
          <b-tabs-pane name="woman"> 美女相关资讯 </b-tabs-pane>
          <b-tabs-pane name="finance"> 财经相关资讯 </b-tabs-pane>
          <b-tabs-pane name="sports"> 体育相关资讯 </b-tabs-pane>
        </b-tabs-body>
      </b-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      let y = vm.$el.querySelector(`.tabs-pane[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      expect(y.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受 direction', () => {
  })
})
