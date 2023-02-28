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
  // 未实现
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
  width: {
    type: String,
    default: '200px'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  // 未实现
  filter: {
    type: Boolean,
    default: false
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
  }
}
