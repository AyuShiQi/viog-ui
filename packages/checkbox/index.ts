import checkbox from './src/checkbox.vue'

export default {
  install (app: any) {
    app.component(checkbox.name, checkbox)
  }
}

export {
  checkbox
}
