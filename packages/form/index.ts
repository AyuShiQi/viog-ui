import type { App } from 'vue'

import form from './src/form.vue'
import formItem from './src/form-item.vue'

export default {
  install (app: App) {
    app.component(form.name, form)
    app.component(formItem.name, formItem)
  }
}

export {
  form,
  formItem
}
