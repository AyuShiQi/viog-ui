import { computed, reactive, watch } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

import type { DateSelectProps } from '@/types/date-select-types'

import { getTimeStamp } from '@/utils/time-utils'

import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: DateSelectProps) {
  const value = reactive(props.modelValue)

  watch(value, () => {
    // 年份比较
    if (!value.year || value.year < value.endYear!) return
    else if (value.year === value.endYear!) {
      // 月份比较
      if (!value.month || value.month < value.endMonth!) return
      else if (value.month === value.endMonth!) {
        // 天数比较
        if (!value.date || value.date < value.endDate!) return
        else if (value.date === value.endDate!) {
          if (getTimeStamp(value.hour, value.minute, value.second) < getTimeStamp(value.endHour, value.endMinute, value.endSecond)) return
        }
      }
    }
    [value.endYear, value.endMonth, value.endDate, value.endHour, value.endMinute, value.endSecond] = [value.year, value.month, value.date, value.hour, value.minute, value.second]
  })

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

  const formatDateTimeEnd = computed((): string => {
    const { endYear, endMonth, endDate, endHour, endMinute, endSecond } = props.modelValue
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(endYear, endMonth, endDate)) return props.placeholder
    format = format.replace('YYYY', dateInit(endYear, 'year') + '')
    format = format.replace('MM', dateInit(endMonth, 'month') + '')
    format = format.replace('DD', dateInit(endDate, 'date') + '')
    format = format.replace('hh', formatTimeDigit(timeInit(endHour)))
    format = format.replace('mm', formatTimeDigit(timeInit(endMinute)))
    format = format.replace('ss', formatTimeDigit(timeInit(endSecond)))

    return format
  })

  if (props.name) formTargetStateReactive(props.name, value)

  return {
    value,
    formatDateTime,
    formatDateTimeEnd
  }
}
