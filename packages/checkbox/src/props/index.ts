export default {
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'default' // button
  },
  dark: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'spurple'
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
