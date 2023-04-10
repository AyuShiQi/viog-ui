import { createVNode, render, effect, ref } from 'vue'
import type { App, VNode, Ref } from 'vue'
import message from './src/message.vue'

let toastComp: VNode
const _message: Ref<any[]> = ref([])
let first = true

export default {
  install (app: App) {
    app.component(message.name, message)
  },
  append (info: any, time = 20000) {
    // 挂载一个toast
    if (first) {
      first = false
      effect(() => {
        toastComp = createVNode(message, {
          message: _message.value
        })
        render(toastComp, document.body)
      })
    }
    _message.value.push(info)
    setTimeout(() => {
      const index = _message.value.indexOf(info)
      _message.value.splice(index, 1)
    }, time)
  }
}

export {
  message
}
