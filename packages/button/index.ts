import button from './src/button.vue'

export default {
  install (app: any) {
    app.component(button.name, button)
  }
}

export {
  button
}
