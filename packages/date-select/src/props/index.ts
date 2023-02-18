export default {
  modelValue: {
    type: Object,
    default: {
      year: undefined,
      month: undefined,
      date: undefined,
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
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD hh:mm:ss'
  }
}
