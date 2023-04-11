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
  append (info: any, duration?: number) {
    if (first) {
      first = false
      effect(() => {
        toastComp = createVNode(message, {
          message: _message.value
        })
        render(toastComp, document.body)
      })
    }
    (function () {
      const mes = {
        info,
        duration,
        time: Date.now()
      }
      _message.value.push(mes)
      if (duration) {
        setTimeout(() => {
          const index = _message.value.indexOf(mes)
          _message.value.splice(index, 1)
        }, duration)
      }
    })()
  }
}

export {
  message
}
