import type { App } from 'vue'
import timeSelect from './src/time-select.vue'

export default {
  install (app: App) {
    app.component(timeSelect.name, timeSelect)
  }
}

export {
  timeSelect
}
