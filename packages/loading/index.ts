import loading from './src/loading.vue'

export default {
  install (app: any) {
    app.component(loading.name, loading)
  }
}

export {
  loading
}
