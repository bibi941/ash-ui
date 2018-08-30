import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import buttonGroup from './button-gorup';

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);
Vue.component('b-button-group', buttonGroup);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
});

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;
//button单元测试
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    },
  );
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-settings');
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true,
      },
    },
  );
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}
{//检查icon和文字的order
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    },
  );
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1');
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right',
      },
    },
  );
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    },
  });
  vm.$mount();
  let spy = chai.spy(function () {
  });
  vm.$on('click', spy);
  // 希望这个函数被执行
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
}