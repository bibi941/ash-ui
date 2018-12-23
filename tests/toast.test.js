const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  it('接受 autoClose', (done) => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 1
      }
    }).$mount(div)
    vm.$on('close', () => {
      expect(document.body.contains(vm.$el)).to.eq(false)
      done()
      div.remove()
      vm.$destroy()
    })
  })

  it('接受 closeButton', () => {
    const callback = sinon.fake()
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: 'ojbk',
          callback
        }
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.button')
    expect(closeButton.textContent.trim()).to.eq('ojbk')
    closeButton.click()
    expect(callback).to.have.been.called
    vm.$destroy()
  })

  it('接受 enableHtml', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        enableHtml: true
      }
    })
    vm.$slots.default = ['<strong id="test">hi</strong>']
    vm.$mount()
    let strong = vm.$el.querySelector('#test')
    expect(strong).to.exist
    vm.$destroy()
  })

  it('接受 position', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'bottom'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
  })
})

