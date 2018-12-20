let onClickDocument = e => {
  let {target} = e
  callbacks.forEach(item => {
    if (target === item.el || item.el.contains(target)) {
      return
    }
    item.callback() //close
  })
}
let callbacks = []

document.addEventListener('click',onClickDocument)

export default {
  bind: function (el, binding, vnode) {
    callbacks.push({el, callback: binding.value})
  }
}

let removeListener = () => {
  document.removeEventListener('click',onClickDocument)
}
export {removeListener}

