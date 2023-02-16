import type { App } from 'vue'

import dateSelect from './src/date-select.vue'

export default {
  install (app: App) {
    app.component(dateSelect.name, dateSelect)
  }
}

export {
  dateSelect
}
