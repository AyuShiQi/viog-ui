import radio from './src/radio.vue'

export default {
  install (app: any) {
    app.component(radio.name, radio)
  }
}

export {
  radio
}
