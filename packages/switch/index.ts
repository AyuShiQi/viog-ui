import { App } from 'vue'

import _switch from './src/switch.vue'

export default {
  install (app: App) {
    app.component(_switch.name, _switch)
  }
}

export {
  _switch
}
