import Toast from './toast'

let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      currentToast && currentToast.close()
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onclose: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast ({Vue, message, propsData, onclose}) {
  let Cunsturctor = Vue.extend(Toast)
  let toast = new Cunsturctor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onclose)
  document.body.appendChild(toast.$el)
  return toast
}
