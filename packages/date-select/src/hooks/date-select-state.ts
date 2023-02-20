import { computed } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

import type { DateSelectProps } from '@/types/date-select-types'

export default function (props: DateSelectProps) {
  // 是否需要展示
  function needShow (year: number | undefined, month: number | undefined, date: number | undefined): boolean {
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

  function timeInit (unit: number | undefined): number {
    if (unit === undefined) return 0
    return unit
  }

  function dateInit (unit: number | undefined, target: string): number | undefined {
    // 那么需要初始化date和month为1
    if (props.unit === 'year') {
      if (target === 'date') return props.defaultUnit.date ? props.defaultUnit.date : 1
      if (target === 'month') return props.defaultUnit.month ? props.defaultUnit.date : 1
    } else if (props.unit === 'month') {
      if (target === 'date') return props.defaultUnit.date ? props.defaultUnit.date : 1
    }
    return unit
  }

  // 格式化日期与时间
  const formatDateTime = computed((): string => {
    const { year, month, date, hour, minute, second } = props.modelValue
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(year, month, date)) return props.placeholder
    format = format.replace('YYYY', dateInit(year, 'year') + '')
    format = format.replace('MM', dateInit(month, 'month') + '')
    format = format.replace('DD', dateInit(date, 'date') + '')
    format = format.replace('hh', formatTimeDigit(timeInit(hour)))
    format = format.replace('mm', formatTimeDigit(timeInit(minute)))
    format = format.replace('ss', formatTimeDigit(timeInit(second)))

    return format
  })

  return {
    formatDateTime
  }
}
