export default {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  // 已弃用
  // width: {
  //   type: String,
  //   default: '200px'
  // },
  password: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showClear: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'default'
  },
  color: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'middle'
  },
  round: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  warn: {
    type: Boolean,
    default: false
  },
  number: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  maxlength: Number,
  minlength: Number,
  // 已弃用
  // suffix: {
  //   type: [Array, String],
  //   default: ''
  // },
  // prefix: {
  //   type: [Array, String],
  //   default: ''
  // },
  placeholder: {
    type: String,
    default: ''
  },
  search: {
    type: Boolean,
    default: false
  }
}
