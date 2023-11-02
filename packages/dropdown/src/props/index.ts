export default {
  modelValue: {
    type: Boolean,
    default: false
  },
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
  scrollTarget: [Object, String]
}
