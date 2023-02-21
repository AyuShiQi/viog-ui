import { computed } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

export default function (props: any) {
  // 是否需要展示
  function needShow (year: number | undefined, month: number | undefined, date: number | undefined): boolean {
    // 是否有显示时间的需求
    return true
  }

  function timeInit (unit: number | undefined): number {
    if (unit === undefined) return 0
    return unit
  }

  // 格式化日期与时间
  const formatTime = computed((): string => {
    const { year, month, date, hour, minute, second } = props.modelValue
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(year, month, date)) return props.placeholder
    format = format.replace('hh', formatTimeDigit(timeInit(hour)))
    format = format.replace('mm', formatTimeDigit(timeInit(minute)))
    format = format.replace('ss', formatTimeDigit(timeInit(second)))

    return format
  })

  function needHour () {
    return true
  }
  function needMinute () {
    return true
  }
  function needSecond () {
    return true
  }

  return {
    formatTime,
    needHour,
    needMinute,
    needSecond
  }
}
