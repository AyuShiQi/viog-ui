import { computed } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

export default function (props: any) {
  // 是否需要展示
  function needShow (year: number, month: number, date: number): boolean {
    // 是否有显示时间的需求
    if (props.unit === 'year') {
      if (year !== undefined) return true
    } else if (props.unit === 'month') {
      if (year !== undefined && month !== undefined) return true
    } else if (props.unit === 'date') {
      if (year !== undefined && month !== undefined && date !== undefined) return true
    }

    return false
  }
  // 格式化日期与时间
  const formatDateTime = computed((): string => {
    const { year, month, date, hour, minute, second } = props.modelValue
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(year, month, date)) return ''
    format = format.replace('YYYY', year + '')
    format = format.replace('MM', month + '')
    format = format.replace('DD', date + '')
    format = format.replace('hh', formatTimeDigit(hour as number))
    format = format.replace('mm', formatTimeDigit(minute as number))
    format = format.replace('ss', formatTimeDigit(second as number))

    return format
  })

  return {
    formatDateTime
  }
}
