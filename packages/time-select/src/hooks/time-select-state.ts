import { computed, reactive, watch } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

import { TimeSelectProps } from '@/types/time-select-types'

import { getTimeStamp } from '@/utils/time-utils'

export default function (props: TimeSelectProps) {
  const value = reactive(props.modelValue)
  watch(value, () => {
    const start = getTimeStamp(value.hour, value.minute, value.second)
    const end = getTimeStamp(value.endHour, value.endMinute, value.endSecond)
    if (start > end) {
      [value.endHour, value.endMinute, value.endSecond] = [value.hour, value.minute, value.second]
    }
  })

  // 是否需要展示
  function needShow (hour: number | undefined, minute: number | undefined, second: number | undefined): boolean {
    // 是否有显示时间的需求
    return !(hour === undefined && minute === undefined && second === undefined)
  }

  function timeInit (unit: number | undefined): number {
    if (unit === undefined) return 0
    return unit
  }

  // 格式化日期与时间
  const formatTime = computed((): string => {
    const { hour, minute, second } = value
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(hour, minute, second)) return props.placeholder
    format = format.replace('hh', formatTimeDigit(timeInit(hour)))
    format = format.replace('mm', formatTimeDigit(timeInit(minute)))
    format = format.replace('ss', formatTimeDigit(timeInit(second)))

    return format
  })

  // 格式化日期与时间
  const formatTimeEnd = computed((): string => {
    const { endHour, endMinute, endSecond } = value
    let format = props.format.slice(0)
    // 以最小单位为界限返回对应值
    if (!needShow(endHour, endMinute, endSecond)) return props.placeholder
    format = format.replace('hh', formatTimeDigit(timeInit(endHour)))
    format = format.replace('mm', formatTimeDigit(timeInit(endMinute)))
    format = format.replace('ss', formatTimeDigit(timeInit(endSecond)))

    return format
  })

  function needHour () {
    return true
  }
  function needMinute () {
    return props.unit !== 'hour'
  }
  function needSecond () {
    return props.unit === 'second'
  }

  return {
    value,
    formatTime,
    formatTimeEnd,
    needHour,
    needMinute,
    needSecond
  }
}
