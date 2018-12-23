const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'


Vue.component('b-popover', Popover)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在', () => {
    expect(Popover).to.exist
  })

  it('接受 position 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
     <b-popover position="left" ref="popover">
     <template slot="content" >
        <div>这就是你
          <button >关闭</button>
        </div>
      </template>
      <button>左</button>
    </b-popover>
    `
    let vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {content} = vm.$refs.popover.$refs
      expect(content.classList.contains('position-left')).to.be.true
      done()
    })
  })

  xit('可以设置 trigger', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <b-popover trigger="hover" ref="popover">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </b-popover>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let event = new Event('mouseenter');
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.popover.$refs
        expect(contentWrapper).to.exist
        done()
      })
    }, 200)

  })
})
