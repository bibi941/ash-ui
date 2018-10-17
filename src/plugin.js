import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      let Cunsturctor = Vue.extend(Toast)
      let toast = new Cunsturctor({
        propsData: toastOptions
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
