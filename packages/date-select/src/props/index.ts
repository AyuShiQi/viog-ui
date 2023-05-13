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
  placeholder: {
    type: String,
    default: '请选择'
  },
  // 未实现，已禁用
  filter: {
    type: Boolean,
    default: false
  },
  // 日期是否开启范围选择
  range: {
    type: Boolean,
    default: false
  },
  // 日期最小显示单位  year/month/week/date
  unit: {
    type: String,
    default: 'date'
  },
  // 是否启用时间选择
  time: {
    type: Boolean,
    default: false
  },
  // 时间显示最小单位  hour/minute/second
  timeUnit: {
    type: String,
    default: 'minute'
  },
  // 格式化显示格式
  format: {
    type: String,
    default: 'YYYY-MM-DD hh:mm:ss'
  },
  // 起始年份
  beginYear: {
    type: Number,
    default: 1970
  },
  // 结束年份
  endYear: {
    type: Number,
    default: undefined
  },
  // 当没有被选择的单位，可以指定默认值
  defaultUnit: {
    type: Object,
    default: {
      year: 2000,
      month: 1,
      date: 1,
      hour: 0,
      minute: 0,
      second: 0
    }
  }
}
