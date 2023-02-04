import { App } from 'vue'

import radio from './src/radio.vue'
import radioGroup from './src/radio-group.vue'

export default {
  install (app: App) {
    app.component(radio.name, radio)
    app.component(radioGroup.name, radioGroup)
  }
}

export {
  radio
}
