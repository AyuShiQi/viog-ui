import { createVNode, render, effect, ref } from 'vue'
import type { VNode, Ref } from 'vue'
import toast from './src/toast.vue'
import { toInstall } from '../utils/component'

let toastComp: VNode
const show = ref(false)
const message: Ref<unknown> = ref('')
let first = true
let timer: NodeJS.Timeout | undefined
let container: Element

export default toInstall({
  open (info: unknown, time = 2000) {
    if (timer) clearTimeout(timer)
    // 挂载一个toast
    if (first) {
      first = false
      container = document.createElement('div')
      effect(() => {
        toastComp = createVNode(toast, {
          message: message.value,
          show: show.value
        })
        document.body.appendChild(container)
        render(toastComp, container)
      })
    }
    message.value = info
    show.value = true
    timer = setTimeout(() => {
      show.value = false
      timer = undefined
    }, time)
  }
}, toast)

export {
  toast
}
