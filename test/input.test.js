const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist;
  });

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });

    it('接受value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      // console.log(inputElement);
      expect(inputElement.value).to.equal('1234');
      vm.$destroy();
    });
    it('接受disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      // console.log(inputElement);
      expect(inputElement.disabled).to.equal(true);
      vm.$destroy();
    });
    it('接受readonly', () => {
      const Constructor = Vue.extend(Input);
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      // console.log(inputElement);
      expect(inputElement.readOnly).to.equal(true);
    });
    it('接受error', () => {
      const Constructor = Vue.extend(Input);
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
      const errorMessage = vm.$el.querySelector('.error-text');
      expect(errorMessage.innerHTML).to.equal('你错了');
    });
  });
  describe('事件', () => {
    it('支持change事件');
  });
});

