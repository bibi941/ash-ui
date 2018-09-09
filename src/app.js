import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);
Vue.component('b-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
});


