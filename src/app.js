import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Sider from './sider';
import Header from './hearder';
import Content from './content';
import Footer from './footer';

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);
Vue.component('b-button-group', ButtonGroup);
Vue.component('b-input', Input);
Vue.component('b-row', Row);
Vue.component('b-col', Col);
Vue.component('b-content', Content);
Vue.component('b-header', Header);
Vue.component('b-footer', Footer);
Vue.component('b-sider', Sider);
Vue.component('b-layout', Layout);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    mesa: ''
  },
  methods: {}
});


