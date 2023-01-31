import _switch from './src/switch.vue'

export default {
  install (app: any) {
    app.component(_switch.name, _switch)
  }
}

export {
  _switch
}
