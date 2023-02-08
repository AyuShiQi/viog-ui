export default {
  modelValue: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'button'//  default/plain/button
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
  width: {
    type: String,
    default: '200px'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  datas: Array
}
