import type { Ref } from 'vue'

export default function (props: any, viewYear: Ref, viewMonth: Ref) {
  const dates = ['日', '一', '二', '三', '四', '五', '六']

  function isChoose (viewDate: string | number): boolean {
    if (typeof viewDate === 'string') viewDate = parseInt(viewDate)
    const { year, month, date } = props.choosed
    if (year === viewYear.value && month === viewMonth.value) {
      if (date === viewDate) return true
    }
    return false
  }

  return {
    dates,
    isChoose
  }
}
