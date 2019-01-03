const expect = chai.expect
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接受span属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('span-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受offset属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受pc属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('pc-offset-12')).to.eq(true)
    expect(element.classList.contains('pc-span-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受ipad属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('ipad-offset-12')).to.eq(true)
    expect(element.classList.contains('ipad-span-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受notebook属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        notebook: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('notebook-offset-12')).to.eq(true)
    expect(element.classList.contains('notebook-span-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受pc2k属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc2k: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('pc2k-offset-12')).to.eq(true)
    expect(element.classList.contains('pc2k-span-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受pc4k属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc4k: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('pc4k-offset-12')).to.eq(true)
    expect(element.classList.contains('pc4k-span-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})



