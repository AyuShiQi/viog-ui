import { App } from 'vue'

import dialog from './src/dialog.vue'

export default {
  install (app: App) {
    app.component(dialog.name, dialog)
  }
}

export {
  dialog
}
