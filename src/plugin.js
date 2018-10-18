import Toast from './toast'

let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}

function createToast ({Vue, message, propsData}) {
  let Cunsturctor = Vue.extend(Toast)
  let toast = new Cunsturctor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
