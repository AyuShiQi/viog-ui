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
  width: {
    type: String,
    default: '200px'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  filter: {
    type: Boolean,
    default: false
  },
  datas: Array,
  range: { // 日期是否开启范围选择
    type: Boolean,
    default: false
  },
  unit: { // 日期显示单位  year/month/week/date
    type: String,
    default: 'date'
  },
  timeUnit: { // 时间显示单位  hour/minute/second
    type: String,
    default: 'minute'
  }
}
