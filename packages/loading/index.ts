import { App } from 'vue'

import loading from './src/loading.vue'

export default {
  install (app: App) {
    app.component(loading.name, loading)
  }
}

export {
  loading
}
