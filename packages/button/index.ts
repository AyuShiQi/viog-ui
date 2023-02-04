import { App } from 'vue'

import button from './src/button.vue'

export default {
  install (app: App) {
    app.component(button.name, button)
  }
}

export {
  button
}
