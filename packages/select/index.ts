import { App } from 'vue'

import select from './src/select.vue'

export default {
  install (app: App) {
    app.component(select.name, select)
  }
}

export {
  select
}
