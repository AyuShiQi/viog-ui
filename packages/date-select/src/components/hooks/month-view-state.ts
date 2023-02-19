import type { Ref } from 'vue'

export default function (props: any, viewYear: Ref) {
  const months: number[] = []
  // months 初始化
  for (let i = 1; i <= 12; i++) {
    months.push(i)
  }

  function isChoose (viewMonth: number): boolean {
    const { year, month } = props.choosed
    if (year === viewYear.value) {
      if (month === viewMonth) return true
    }
    return false
  }

  return {
    months,
    isChoose
  }
}
