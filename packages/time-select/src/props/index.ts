export default {
  modelValue: {
    type: Object,
    default: {
      hour: undefined,
      minute: undefined,
      second: undefined
    }
  },
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'default'//  default/plain/button
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  // 是否开启范围选择
  range: {
    type: Boolean,
    default: false
  },
  // 最小显示单位  hour/minute/second
  unit: {
    type: String,
    default: 'second'
  },
  // 格式化显示格式
  format: {
    type: String,
    default: 'hh:mm:ss'
  },
  name: String
}
