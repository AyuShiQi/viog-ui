import icon from './src/icon.vue'

export default {
  install (app: any) {
    app.component(icon.name, icon)
  }
}

export {
  icon
}
