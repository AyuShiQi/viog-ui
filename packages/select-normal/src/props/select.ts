export default {
  modelValue: {
    default: ''
  },
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'default'//  default/plain/button
  },
  dark: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multi: { // 是否开启复选
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
}