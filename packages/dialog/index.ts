import dialog from './src/dialog.vue'

export default {
  install (app: any) {
    app.component(dialog.name, dialog)
  }
}

export {
  dialog
}
