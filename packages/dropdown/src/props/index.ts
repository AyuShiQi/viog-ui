export default {
  trigger: {
    type: String,
    // hover
    default: 'click'
  },
  noTriggerOpen: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'auto'
  },
  scrollTarget: [Object, String],
  modelValue: {
    type: Boolean,
    default: false
  }
}
