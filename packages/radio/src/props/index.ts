export default {
  picked: [String, Number, Boolean],
  name: [String, Number, Boolean],
  value: [String, Number, Boolean],
  rid: String,
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
    type: String,
    default: false
  }
}
