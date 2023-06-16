export default {
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  name: String,
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'default' // button
  },
  color: {
    type: String,
    default: 'purple'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  mutate: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
}
