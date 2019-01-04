import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import PopOver from '../../src/popover.vue'
import { mount } from '@vue/test-utils'

chai.use(sinonChai)

describe('PopOver', () => {
  it('存在.', () => {
    expect(PopOver).to.exist
  })

  it('接受 position 属性', () => {
    const wrapper = mount(PopOver, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom')
  })

  it('可以设置 trigger', () => {
    const wrapper = mount(PopOver, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    expect(wrapper.find('.content-wrapper').element).to.exist
  })
})
