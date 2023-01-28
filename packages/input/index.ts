import input from './src/input.vue'

export default {
  install (app: any) {
    app.component(input.name, input)
  }
}

export {
  input
}
