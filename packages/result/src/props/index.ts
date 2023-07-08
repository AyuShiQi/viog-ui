export default {
  modelValue: {
    type: Boolean,
    default: true
  },
  state: {
    // ['success', 'danger', 'warning', 'default']
    type: String,
    default: 'success'
  },
  type: {
    // default | plain | transparent
    type: String,
    default: 'default'
  }
}
