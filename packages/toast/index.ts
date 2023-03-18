import { createApp } from 'vue'
import type { App } from 'vue'
import toast from './src/toast.vue'

let first = true
export default {
  install (app: App) {
    app.component(toast.name, toast)
  },
  open () {
    // 挂载一个toast
    if(first) {
      first = false
      const container = document.createElement('div')
      container.id = 'viToastContainer'
      document.appendChild(container)
      createApp(toast).mount(container)
    }
  }
}

export {
  toast
}
