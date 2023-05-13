import { App } from 'vue'

import selectV from './src/select.vue'

export default {
  install (app: App) {
    app.component(selectV.name, selectV)
  }
}

export {
  selectV
}
