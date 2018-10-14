import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message) => {
      let Cunsturctor = Vue.extend(Toast)
      let toast = new Cunsturctor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
