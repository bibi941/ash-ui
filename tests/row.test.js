import Button from '../src/button';

const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/row';
import Col from '../src/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist;
  });

  it('接受gutter属性 ', (done) => {
    Vue.component('b-row', Row);
    Vue.component('b-col', Col);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
  <b-row gutter="20">
   <b-col span="12"></b-col>
   <b-col span="12"></b-col>
  </b-row>
  `;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const row = vm.$el.querySelector('.row');
      expect(getComputedStyle(row).marginRight).to.eq('-10px');
      expect(getComputedStyle(row).marginLeft).to.eq('-10px');
      const cols = vm.$el.querySelectorAll('.col');
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  it('接受align属性 ', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end');
    div.remove();
    vm.$destroy();
  });
});



