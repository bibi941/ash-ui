
const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'

Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('存在', () => {
    expect(TabsItem).to.exist
  })

  it('接受name属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'onclick'
      }
    }).$mount()
    const element = vm.$el
    expect(element.getAttribute('data-name')).to.eq('onclick')
  })

  it('接受disabled属性 ', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const element = vm.$el
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
