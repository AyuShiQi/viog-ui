import { App } from 'vue'

import icon from './src/icon.vue'

export default {
  install (app: App) {
    app.component(icon.name, icon)
  }
}

export {
  icon
}
