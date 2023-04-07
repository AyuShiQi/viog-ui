export default {
  modelValue: {
    type: Array,
    default: []
  },
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
    default: 'purple'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  mutate: {
    type: Boolean,
    default: false
  }
}
