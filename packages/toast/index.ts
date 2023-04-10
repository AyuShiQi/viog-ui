import { createVNode, render, effect, ref } from 'vue'
import type { App, VNode, Ref } from 'vue'
import toast from './src/toast.vue'

let toastComp: VNode
const show = ref(false)
const message: Ref<unknown> = ref('')
let first = true
let timer: NodeJS.Timeout | undefined

export default {
  install (app: App) {
    app.component(toast.name, toast)
  },
  open (info: unknown, time = 2000) {
    if (timer) clearTimeout(timer)
    // 挂载一个toast
    if (first) {
      first = false
      effect(() => {
        toastComp = createVNode(toast, {
          message: message.value,
          show: show.value
        })
        render(toastComp, document.body)
      })
    }
    message.value = info
    show.value = true
    timer = setTimeout(() => {
      show.value = false
      timer = undefined
    }, time)
  }
}

export {
  toast
}
