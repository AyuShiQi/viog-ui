import { App } from 'vue'

import input from './src/input.vue'

export default {
  install (app: App) {
    app.component(input.name, input)
  }
}

export {
  input
}
