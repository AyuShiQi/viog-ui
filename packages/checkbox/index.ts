import { App } from 'vue'

import checkbox from './src/checkbox.vue'
import checkboxGroup from './src/checkbox-group.vue'

export default {
  install (app: App) {
    app.component(checkbox.name, checkbox)
    app.component(checkboxGroup.name, checkboxGroup)
  }
}

export {
  checkbox,
  checkboxGroup
}
