import { ref, computed } from 'vue'
import type { SetupContext } from 'vue'

import dateState from './date-state'

export default function (props: any, ctx: SetupContext) {
  const _date = dateState(props, props.choosed)
  const viewStart = computed(() => {
    const temp: number = Math.trunc(_date.viewYear.value / 10) * 10

    if (temp >= props.beginYear) {
      if (props.endYear && temp > props.endYear) {
        return Math.trunc(props.endYear / 10) * 10
      }
      return temp
    } else {
      return Math.trunc(props.beginYear / 10) * 10
    }
  })

  const viewEnd = computed(() => {
    return props.endYear ? Math.min(props.endYear, viewStart.value! + 9) : viewStart.value! + 9
  })

  const years = computed((): number[] => {
    const years: number[] = []
    for (let i = viewStart.value!; i <= viewEnd.value!; i++) {
      years.push(i)
    }
    return years
  })

  /**
   * 年份范围后退
   */
  function yearRangeBack (): void {
    _date.viewYear.value = Math.max(props.beginYear, _date.viewYear.value - 10)
  }
  /**
   * 年份范围前进
   */
  function yearRangeForward (): void {
    _date.viewYear.value = props.endYear ? Math.max(props.endYear, _date.viewYear.value + 10) : _date.viewYear.value + 10
  }

  /**
   * 是否是被选择的
   */
  function isChoosed (y: number): boolean {
    if (!props.end) {
      if (props.choosed.year === y) return true
    } else {
      if (props.choosed.endYear === y) return true
    }
    return false
  }

  return {
    viewStart,
    viewEnd,
    years,
    yearRangeBack,
    yearRangeForward,
    isChoosed,
    ..._date
  }
}
