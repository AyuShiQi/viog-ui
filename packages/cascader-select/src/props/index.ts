export default {
  modelValue: {
    type: Array,
    default: []
  },
  options: {
    type: Array,
    default: []
  },
  name: String,
  separator: {
    type: String,
    default: '/'
  },
  type: {
    type: String,
    default: 'default' // button plain
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
}
