import dialog from './src/dialog.vue'

export default {
  install (app: any) {
    console.log(app)
    app.component(dialog.name, dialog)
  }
}

export {
  dialog
}
