export default {
  modelValue: {
    type: Array,
    default: []
  },
  value: [String, Number, Boolean, Array],
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
  },
  hidden: {
    type: Boolean,
    default: false
  }
}
