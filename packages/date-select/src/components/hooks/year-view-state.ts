import { ref, computed } from 'vue'

export default function (props: any, nowDate: Date) {
  let temp: number = Math.trunc(nowDate.getFullYear() / 10) * 10

  if (temp >= props.beginYear) {
    if (props.endYear && temp > props.endYear) {
      temp = Math.trunc(props.endYear / 10) * 10
    }
  } else {
    temp = Math.trunc(props.beginYear / 10) * 10
  }
  const viewStart = ref(temp)
  const viewEnd = ref(props.endYear ? Math.min(props.endYear, viewStart.value + 9) : viewStart.value + 9)

  const years = computed((): number[] => {
    const years: number[] = []
    for (let i = viewStart.value; i <= viewEnd.value; i++) {
      years.push(i)
    }
    return years
  })

  /**
   * 年份范围后退
   */
  function yearRangeBack (): void {
    viewStart.value = Math.max(props.beginYear, viewStart.value - 10)
    viewEnd.value = props.endYear ? Math.min(props.endYear, viewStart.value + 9) : viewStart.value + 9
  }
  /**
   * 年份范围前进
   */
  function yearRangeForward (): void {
    viewStart.value = props.endYear ? Math.min(props.endYear, viewStart.value + 10) : viewStart.value + 10
    viewEnd.value = props.endYear ? Math.min(props.endYear, viewStart.value + 9) : viewStart.value + 9
  }

  /**
   * 是否是被选择的
   */
  function isChoosed (y: number): boolean {
    if (props.choosed.year === y) return true
    return false
  }

  return {
    viewStart,
    viewEnd,
    years,
    yearRangeBack,
    yearRangeForward,
    isChoosed
  }
}
